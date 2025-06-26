
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Product, useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-slate-300"
        }`}
      />
    ));
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 overflow-hidden">
        <div className="aspect-square overflow-hidden bg-slate-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center mr-2">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-slate-500">({product.rating})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg text-slate-800">
              ${product.price}
            </span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
