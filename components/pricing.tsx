"use client";
import Link from "next/link";
import { Button } from "./ui/button";


import { Check,X } from "@phosphor-icons/react/dist/ssr";
import { auth } from "@/lib/auth";
import { useState } from "react";




interface Plan {
    link: string;
    price: string;
    priceId: string;
  }
const plans: { [key: string]: { [key: string]: Plan } } = {
    starter: {
        monthly: {
            link:
                process.env.NODE_ENV === 'development'
                    ? 'https://buy.stripe.com/test_aEU16r83u6fKcbCbII'
                    : '',
            price: '£12.99',
            priceId:
                process.env.NODE_ENV === 'development'
                    ? 'price_1POpsyRqLyEgrrLVhWeonU9Z'
                    : '',
        },
        yearly: {
            link:
                process.env.NODE_ENV === 'development'
                    ? 'https://buy.stripe.com/test_cN2eXhdnOfQka3u3cg'
                    : '',
            price: '£9.99',
            priceId:
                process.env.NODE_ENV === 'development'
                    ? 'price_1PXA7LRqLyEgrrLVPYqpgQfU'
                    : '',
        },
    },
    pro: {
        monthly: {
            link:
                process.env.NODE_ENV === 'development'
                    ? 'https://buy.stripe.com/test_bEU16r83u6fKcbCbII'
                    : '',
            price: '£24.99',
            priceId:
                process.env.NODE_ENV === 'development'
                    ? 'price_1POpsyRqLyEgrrLVhWeonU9Z'
                    : '',
        },
        yearly: {
            link:
                process.env.NODE_ENV === 'development'
                    ? 'https://buy.stripe.com/test_7sI16r83udIc7Vm4gl'
                    : '',
            price: '£19.99',
            priceId:
                process.env.NODE_ENV === 'development'
                    ? 'price_1PXTgFRqLyEgrrLVeZXfbjAI'
                    : '',
        },
    },
    premium: {
        monthly: {
            link:
                process.env.NODE_ENV === 'development'
                    ? 'https://buy.stripe.com/test_cEU16r83u6fKcbCbII'
                    : '',
            price: '£34.99',
            priceId:
                process.env.NODE_ENV === 'development'
                    ? 'price_1POpsyRqLyEgrrLVhWeonU9Z'
                    : '',
        },
        yearly: {
            link:
                process.env.NODE_ENV === 'development'
                    ? 'https://buy.stripe.com/test_fN2eXhdnOfQka3u3cg'
                    : '',
            price: '£39.99',
            priceId:
                process.env.NODE_ENV === 'development'
                    ? 'price_1PXA7LRqLyEgrrLVPYqpgQfU'
                    : '',
        },
    },
};

export default function Pricing() {
    // const session = await auth();
    // const user_email = session?.user?.email

    const [planType, setPlanType] = useState<"monthly" | "yearly">("yearly");

  const togglePlanType = (type: "monthly" | "yearly") => {
    setPlanType(type);
  };

  return (
    <>
    <div className='flex flex-col justify-center text-center text-black'>
        <div className='p-6 text-5xl font-black text-teal-800'>
            Pricing
        </div>
        <h1  className='py-4 text-3xl font-bold md:text-4xl '>Save precious time from finding the perfect sound</h1>
        {/* <h3 className='py-4 md:py-8' >
            <span className='font-medium text-teal-500'>Save 20% </span> Extra with a yearly plan  
        </h3> */}

        {/* Switch from yearly to monthly */}
        <div className="space-x-2">
        <Button
          variant="outline"
          className={` ${planType === "monthly" ? "bg-teal-500 text-white" : "border border-black"} rounded-3xl `}
          onClick={() => togglePlanType("monthly")}
        >
          Monthly
        </Button>
        <Button
          variant="outline" 
          className={` ${planType === "yearly" ? "bg-teal-500 text-white" : "border border-black"} rounded-3xl`}
          onClick={() => togglePlanType("yearly")}
        >
          Yearly <span className="text-sm text-black "> (save 25%)</span>
        </Button>
      </div>
        {/* PRICING CARDS */}
        <div className='flex flex-col justify-center py-12 space-y-4 md:space-y-0 md:justify-around md:flex-row md:w-full'>

            {/* STARTER CARD */}
            <div className="bg-[#212121]  border rounded-lg flex flex-col justify-end w-3/5 md:w-[350px] mx-auto md:justify-normal text-left p-5 md:transition-transform md:transform md:hover:scale-105">
              
                <h4 className="text-teal-500">Starter</h4>
                <div className="flex flex-row">
                    {/* <p className="mt-6 text-gray-400 line-through">£39.99</p> */}
                    <h1 className='text-4xl font-black text-white md:text-5xl bg-inherit'>
                    {planType === "yearly" ? "£9.99" : "£12.99"}
                    </h1>
                </div>
                <div className="py-4 text-white">
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">100 Uses/month </span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">Low quality image input</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">Single sound generated per request</span>
                    </p>

                    <p className="flex flex-row items-center py-3 text-gray-500">
                        <X size={28} color="gray" weight="regular" />
                        <span className="ml-3">Access to generated Sound history</span>
                    </p>

                </div>
                <Link href={plans.starter[planType].link}>
                    <Button className="w-full px-4 text-2xl font-medium text-white bg-teal-500 md:min-w-64">Buy now</Button>
                </Link>
            </div>
            
            {/* Pro CARD */}
            <div className="bg-[#212121] border-2 border-teal-400 rounded-lg flex flex-col w-3/5 md:w-[400px] mx-auto md:justify-normal text-left p-5 md:transition-transform md:transform md:hover:scale-105">

                <h4 className="text-teal-500">Pro</h4>
                <div className="flex flex-row">
                    <p className="mt-6 text-gray-400 line-through">{planType === "yearly" ? "£29.99" : "£34.99"}</p>
                    <h1 className='text-4xl font-black text-teal-300 md:text-5xl bg-inherit'>
                    {planType === "yearly" ? "£19.99" : "£24.99"}
                    </h1>
                </div>
                <div className="py-4 text-white">
                   
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">500 Uses/month</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">High quality Image input</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">3 sounds generated per request</span>
                    </p>
                    
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">Access to generated sound history</span>
                    </p>

                </div>
                <Link href={plans.pro[planType].link}>
                  <Button className="w-full px-4 text-2xl font-medium text-white bg-gradient-to-r from-teal-300 to-violet-600 hover:from-purple-600 hover:to-purple-700 md:min-w-64">
                      Buy now
                  </Button>
                </Link>
            </div>
            
            {/* PREMIUM CARD */}
            <div className="bg-[#212121] border rounded-lg flex flex-col justify-end w-3/5 md:w-[350px] mx-auto md:justify-normal text-left p-5 md:transition-transform md:transform md:hover:scale-105">
                <h4 className="text-teal-500">Premium</h4>
                <div className="flex flex-row">
                    {/* <p className="mt-6 text-gray-400 line-through">£39.99</p> */}
                    <h1 className='text-4xl font-black text-white md:text-5xl bg-inherit'>
                    {planType === "yearly" ? "£39.99" : "£34.99"}
                    </h1>
                </div>
                <div className="py-4 text-white">
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">1000 Uses/month </span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">High quality image input</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">3 sounds generated per request</span>
                    </p>

                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">Access to generated sound history</span>
                    </p>

                </div>
                <Link href={plans.premium[planType].link}>
                    <Button className="w-full px-4 text-2xl font-medium text-white bg-teal-500 md:min-w-64">Buy now</Button>
                </Link>
            </div>
        </div>

    </div>
    </>
  )
}

