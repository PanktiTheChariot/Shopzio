import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LearnMore = () => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100">
    <Navigation />
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-slate-800 mb-6">Learn More About Shopzio</h1>
      <p className="text-xl text-slate-600 mb-10">
        Shopzio is your one-stop destination for premium quality products at unbeatable prices. We are committed to providing an exceptional shopping experience, fast shipping, secure payments, and 24/7 customer support. Discover why thousands of customers trust us for their shopping needs!
      </p>
      <Link to="/products">
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
          Start Shopping
        </Button>
      </Link>
    </div>
  </div>
);

export default LearnMore; 