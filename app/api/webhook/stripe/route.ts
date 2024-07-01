import { plans } from "@/components/pricing";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db"
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";


// Function to find plan and type based on stripePriceId
function findPlanAndType(plans: { [key: string]: { [key: string]: any } }, stripePriceId: string): { plan: string, type: string } | null {
    for (const planKey of Object.keys(plans)) {
        const plan = plans[planKey];
        for (const typeKey of Object.keys(plan)) {
            const subscriptionType = plan[typeKey];
            if (subscriptionType.priceId === stripePriceId) {
                return { plan: planKey, type: typeKey };
            }
        }
    }
    return null; // Return null if stripePriceId is not found in plans
}


export async function POST(req:any){
     await  prisma.$connect;

     const body = await req.text();

     const signature = headers().get("stripe-signature") ;

     let event: Stripe.Event;
     let data: Stripe.Checkout.Session;
     let eventType: string;


     // check the webhook is strips
     try {
          event = stripe.webhooks.constructEvent(
               body,
               signature!,
               process.env.STRIPE_WEBHOOK_SECRET!,
          );
    
     } catch (error) {
          return new NextResponse("invalid signature",{status:400})
          
     }
     
     data = event.data.object as Stripe.Checkout.Session;
     eventType = event.type;

     

     // console.log("eventType", eventType);
     // console.log("session", session);
     try {
          switch (eventType) {
               case 'checkout.session.completed': {
                    // (1) first payment is successful and a payment is made
                    // (2) User should be given access to product
                    console.log("PAYMENT SESSION COMPLETED")
                    // console.log("DATA OBJECT", data)
                    
                    const checkoutSession = await stripe.checkout.sessions.retrieve(data.id, {
                         expand:["line_items"]
                    });
                    // console.log("THE SESSIONN   I GOT ",checkout_session)
                    
                    // console.log(checkout_session)
                    if (checkoutSession.customer) {
                         const customerId = checkoutSession.customer as string;
                         const customer = await stripe.customers.retrieve(customerId);
                         console.log("CUSTOMER ID", customerId);
                         // console.log("CUSTOMER", customer);
                       } else {
                         console.log("No customer associated with this session.");
                       }

                    // get user email from Stripe session
                    const userEmail = checkoutSession.customer_details?.email;
                    if (!userEmail) {
                         console.error("No email found in STRIPE CHECKOUT session");
                         return new NextResponse("No email found in session", { status: 400 });
                    }
                    
                    // Retrieve line items from the Stripe session
                    const lineItems = checkoutSession.line_items?.data ?? [];
                    if (lineItems.length === 0 || !lineItems[0].price?.id) {
                         console.error("No valid line items found in checkout session");
                         return new NextResponse("No valid line items found", { status: 400 });
                    }

                    const stripe_priceId = lineItems[0].price.id;
                    console.log("Price ID:", stripe_priceId);
                    
                    console.log("Plans Object:", plans);
                    // Match the priceId with the plan from your pricing configuration
                    let planName = "";
                    let planType = "";

                    const foundPlanAndType = findPlanAndType(plans, stripe_priceId);
                    
                    if (foundPlanAndType) {
                         planName = foundPlanAndType.plan;
                         planType = foundPlanAndType.type;
                     } else {
                         console.log(`No matching plan found for Price ID: ${stripe_priceId}`);
                         // Handle this case based on your application's logic
                     }

                    console.log("Plan Name:", planName);
                    console.log("Plan Type:", planType);

                    // Determine credits based on plan
                    const planCredits: { [key: string]: number } = {
                         "starter-monthly": 100,
                         "starter-yearly": 1200,
                         "pro-monthly": 500,
                         "pro-yearly": 6000,
                         "premium-monthly": 1000,
                         "premium-yearly": 12000,
                    };

                    const planKey = `${planName}-${planType}`;
                    const credits = planCredits[planKey] || 0;

                    // Update user data with the plan type and credits
                    const updatedUser = await prisma.user.update({
                         where: { email: userEmail },
                         data: {
                         credits: { increment: credits },
                         plan: planName,
                         planType: planType,
                         },
                    });
                    
                    if (!updatedUser) {
                         console.error("User not found");
                         return new NextResponse("User not found", { status: 404 });
                    }

                    console.log("User credits updated", updatedUser);
                    break;

               }

               default:
               //unhandled event type
          }
          return new NextResponse("Event handled", { status: 200 });
     } catch (e) {
          console.error("Internal server error:", e);
          return new NextResponse("Internal server error", { status: 500 });
          
     }
     
}