import icecream from '../assets/Icecreams/icecream.png'
import chicken from '../assets/Icecreams/chicken.png'
import burger from '../assets/Icecreams/burger.png'
import sandwich from '../assets/Icecreams/sandwich.png'
import milkshake from '../assets/Icecreams/milkshake.png'
import fry from '../assets/Icecreams/fries.png'
import mojito from '../assets/Icecreams/mojito.png'



const iceCreams = [
        {
            id: 1,
            name: "Vanilla Bean Supreme",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: icecream,
            rating: 4.8,
            category: "ice-cream"
        },
        
    ];

    
    const friedChicken = [
        {
            id: 2,
            name: "Classic Crispy Wings",
            description: "Our signature fried chicken wings with an impossibly crispy exterior that gives way to juicy, tender meat inside. Each wing is brined for 12 hours in our secret spice blend, then double-dredged in seasoned flour for extra crunch. Fried to golden perfection in small batches using a blend of oils for optimal flavor. Served with your choice of dipping sauce - try it with our house-made buttermilk ranch for the ultimate experience.",
            image: chicken,
            rating: 4.7,
            category: "chicken",
            spicy: false
        }
    ];
    
    const burgers = [
        {
            id: 3,
            name: "Classic Beef Burger",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: burger,
            rating: 4.6,
            category: "burger"
        },
    ];
    
    const sandwiches = [
        {
            id: 4,
            name: "Club Sandwich",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: sandwich,
            rating: 4.4,
            category: "sandwich"
        },
    ];
    
    const mojitos = [
        {
            id: 5,
            name: "Classic Mojito",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: mojito,
            rating: 4.8,
            category: "mojito"
        },
    ];
    
    const fries = [
        {
            id: 6,
            name: "Classic French Fries",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: fry,
            rating: 4.3,
            category: "fries"
        },
        
    ];

    const milkshakes = [
            {
                id: 7,
                name: "Oreo Milkshake",
                description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
                image: milkshake,
                rating: 4.8,
                category: "milkshake"
            },
            
        ];
    
    export const allProducts = [...iceCreams, ...friedChicken, ...burgers, ...sandwiches, ...mojitos, ...fries, ...milkshakes];