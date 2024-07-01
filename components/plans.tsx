interface Plan {
    link: string;
    price: string;
    priceId: string;
}

export const plans: { [key: string]: { [key: string]: Plan } } = {
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
