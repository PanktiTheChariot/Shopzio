import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const { state } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemsCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-slate-800">Shopzio</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/products" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                Products
              </Link>
            </div>

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-emerald-600">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
