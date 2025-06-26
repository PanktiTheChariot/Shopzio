
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.8,
    description: "Experience exceptional sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
    reviews: [
      { id: 1, user: "John D.", rating: 5, comment: "Amazing sound quality and comfort!", date: "2024-01-15" },
      { id: 2, user: "Sarah M.", rating: 4, comment: "Great headphones, worth the price.", date: "2024-01-12" },
    ]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.6,
    description: "Track your fitness goals with our advanced smartwatch. Features heart rate monitoring, GPS tracking, and 7-day battery life.",
    reviews: [
      { id: 3, user: "Mike R.", rating: 5, comment: "Perfect for my daily workouts!", date: "2024-01-10" },
      { id: 4, user: "Lisa K.", rating: 4, comment: "Good battery life and accurate tracking.", date: "2024-01-08" },
    ]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    rating: 4.4,
    description: "Comfortable and sustainable organic cotton t-shirt. Perfect for everyday wear with a soft, breathable fabric.",
    reviews: [
      { id: 5, user: "Emma W.", rating: 4, comment: "Very comfortable and good quality.", date: "2024-01-05" },
    ]
  },
  {
    id: 4,
    name: "Leather Laptop Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.7,
    description: "Professional leather laptop bag with multiple compartments. Perfect for business or casual use.",
    reviews: [
      { id: 6, user: "David L.", rating: 5, comment: "Excellent quality leather and design.", date: "2024-01-03" },
    ]
  },
  {
    id: 5,
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.5,
    description: "Portable Bluetooth speaker with rich sound quality. Perfect for outdoor adventures and home use.",
    reviews: [
      { id: 7, user: "Anna T.", rating: 4, comment: "Great sound for the size!", date: "2024-01-01" },
    ]
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "Footwear",
    rating: 4.6,
    description: "High-performance running shoes with advanced cushioning and breathable mesh upper.",
    reviews: [
      { id: 8, user: "Tom H.", rating: 5, comment: "Best running shoes I've ever owned!", date: "2023-12-28" },
    ]
  },
  {
    id: 7,
    name: "Ceramic Mug Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
    category: "Home",
    rating: 4.3,
    description: "Beautiful set of 4 ceramic mugs. Perfect for your morning coffee or evening tea.",
    reviews: [
      { id: 9, user: "Grace S.", rating: 4, comment: "Beautiful design and perfect size.", date: "2023-12-25" },
    ]
  },
  {
    id: 8,
    name: "Wireless Phone Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.4,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and efficient design.",
    reviews: [
      { id: 10, user: "Alex P.", rating: 4, comment: "Works great, charges quickly.", date: "2023-12-20" },
    ]
  },
  {
    id: 9,
    name: "Backpack Travel Pack",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.7,
    description: "Durable travel backpack with multiple compartments and ergonomic design. Perfect for adventures.",
    reviews: [
      { id: 11, user: "Maria G.", rating: 5, comment: "Perfect for my hiking trips!", date: "2023-12-18" },
    ]
  },
  {
    id: 10,
    name: "Desk Lamp LED",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    category: "Home",
    rating: 4.5,
    description: "Modern LED desk lamp with adjustable brightness and flexible arm. Perfect for work or study.",
    reviews: [
      { id: 12, user: "Chris B.", rating: 4, comment: "Great lighting for my desk setup.", date: "2023-12-15" },
    ]
  },
  {
    id: 11,
    name: "Yoga Mat Premium",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    category: "Sports",
    rating: 4.6,
    description: "Premium yoga mat with excellent grip and cushioning. Made from eco-friendly materials.",
    reviews: [
      { id: 13, user: "Nina F.", rating: 5, comment: "Perfect grip and very comfortable.", date: "2023-12-12" },
    ]
  },
  {
    id: 12,
    name: "Kitchen Knife Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=500&fit=crop",
    category: "Home",
    rating: 4.8,
    description: "Professional kitchen knife set with sharp stainless steel blades and ergonomic handles.",
    reviews: [
      { id: 14, user: "Chef Marco", rating: 5, comment: "Excellent quality knives for cooking.", date: "2023-12-10" },
    ]
  }
];
