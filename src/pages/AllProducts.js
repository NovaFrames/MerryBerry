import icecream from '../assets/Icecreams/ice2.png'



const iceCreams = [
        {
            id: 1,
            name: "Vanilla Bean Supreme",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: icecream,
            rating: 4.8,
            category: "ice-cream"
        },
        {
            id: 2,
            name: "Chocolate Fudge Delight",
            description: "A chocolate lover's dream come true! We start with a rich, dark chocolate base made from premium cocoa beans, then swirl in ribbons of homemade fudge that stay perfectly soft even when frozen. The intense chocolate flavor develops in layers, starting with deep cocoa notes and finishing with a sweet fudge aftertaste. Contains real Belgian chocolate chunks for occasional bursts of extra indulgence.",
            image: icecream,
            rating: 4.9,
            category: "ice-cream"
        },
        {
            id: 3,
            name: "Strawberry Fields",
            description: "Made with sun-ripened strawberries picked at peak season, this flavor bursts with natural fruitiness. We macerate fresh strawberries in their own juices before folding them into a sweet cream base. You'll find real strawberry pieces throughout, with just the right balance of tart and sweet. The pink hue comes entirely from the fruit - no artificial colors added. A refreshing choice for warm summer days.",
            image: icecream,
            rating: 4.7,
            category: "ice-cream"
        }
    ];

    const friedChicken = [
        {
            id: 7,
            name: "Classic Crispy Wings",
            description: "Our signature fried chicken wings with an impossibly crispy exterior that gives way to juicy, tender meat inside. Each wing is brined for 12 hours in our secret spice blend, then double-dredged in seasoned flour for extra crunch. Fried to golden perfection in small batches using a blend of oils for optimal flavor. Served with your choice of dipping sauce - try it with our house-made buttermilk ranch for the ultimate experience.",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.7,
            category: "chicken",
            spicy: false
        },
        {
            id: 8,
            name: "Spicy Buffalo Tenders",
            description: "Premium chicken tenders hand-breaded with our special spicy flour blend, then fried until golden and tossed in authentic Buffalo sauce made with aged cayenne peppers. The tenders are cut from whole chicken breasts for maximum juiciness, with the perfect meat-to-breading ratio. Our Buffalo sauce delivers the ideal balance of heat, tang, and buttery richness. Served with cooling blue cheese dressing and crisp celery sticks to tame the heat.",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.8,
            category: "chicken",
            spicy: true
        }
    ];

    const burgers = [
        {
            id: 13,
            name: "Classic Beef Burger",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500",
            rating: 4.6,
            category: "burger"
        },
        {
            id: 14,
            name: "Chicken Deluxe Burger",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500",
            rating: 4.5,
            category: "burger"
        }
    ];

    const sandwiches = [
        {
            id: 15,
            name: "Club Sandwich",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500",
            rating: 4.4,
            category: "sandwich"
        },
        {
            id: 16,
            name: "Grilled Cheese Supreme",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500",
            rating: 4.7,
            category: "sandwich"
        }
    ];

    const mojitos = [
        {
            id: 17,
            name: "Classic Mojito",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500",
            rating: 4.8,
            category: "mojito"
        },
        {
            id: 18,
            name: "Strawberry Mojito",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500",
            rating: 4.6,
            category: "mojito"
        }
    ];

    const fries = [
        {
            id: 19,
            name: "Classic French Fries",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500",
            rating: 4.3,
            category: "fries"
        },
        {
            id: 20,
            name: "Loaded Cheese Fries",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500",
            rating: 4.7,
            category: "fries"
        }
    ];

export const allProducts = [...iceCreams, ...friedChicken, ...burgers, ...sandwiches, ...mojitos, ...fries];