
import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Blueberry Cheese Tart',
    price: '$26',
    description: 'Minimum 2 dozen orders',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400',
    color: '#DCE7FF'
  },
  {
    id: '2',
    name: 'Strawberry Shortcake',
    price: '$45',
    description: 'Light and airy fresh cream cake',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=400',
    color: '#FFE8D6'
  },
  {
    id: '3',
    name: 'Classic Velvet Cupcakes',
    price: '$36',
    description: 'Perfect for every celebration',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400',
    color: '#FFD1DC'
  }
];

export const REVIEWS: Review[] = [
  {
    author: 'Rlyic Jason',
    role: 'Loyal Customer',
    content: 'The most stunning and delicious cakes I have ever ordered in Toronto! The detail is just mind-blowing. 🎂',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    author: 'Sarah Chen',
    role: 'Event Planner',
    content: 'Rumah Toronto Cakery is my go-to for all my high-end events. They are professional and the taste is consistent every time. 💍',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
  },
  {
    author: 'Mark Thompson',
    role: 'Birthday Dad',
    content: 'My daughter loved her custom unicorn cake. Truly magical! It was the highlight of the entire party. ✨',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c'
  },
  {
    author: 'Elena Rodriguez',
    role: 'Corporate Client',
    content: 'We ordered 100 blueberry cheese tarts for our office launch. They were gone in minutes! Life-changing flavor. 🫐',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    author: 'James Wilson',
    role: 'Chocolate Lover',
    content: 'The velvet cupcakes are out of this world. Not too sweet, just perfectly balanced. Best in the city! 🧁',
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    author: 'Sofia G.',
    role: 'Bride-to-be',
    content: 'Nikki was so helpful on WhatsApp. She helped me design my dream engagement cake. Amazing service! 📱',
    avatar: 'https://i.pravatar.cc/150?u=sofia'
  }
];