import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Truck, Shield, Headphones, Star, ArrowRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <section className="relative bg-gradient-to-br from-emerald-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">24/7 Support</span>
                </div>
          </div>
                
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Discover Your
                  <span className="text-emerald-600 block">Perfect Style</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Shop premium quality products with unbeatable prices. From fashion to electronics, 
                  we have everything you need to elevate your lifestyle.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/learn-more">
                  <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800">50K+</div>
                  <div className="text-sm text-slate-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800">10K+</div>
                  <div className="text-sm text-slate-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800">4.9</div>
                  <div className="flex items-center justify-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-slate-200 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Shopping Experience"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Shopzio?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800">Free Shipping</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Free shipping on all orders over $50. Fast and reliable delivery.</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800">Secure Payment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Your payment information is always secure with our encryption.</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Our customer service team is here to help you anytime.</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800">Easy Returns</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">30-day hassle-free returns on all purchases.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Products</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our most popular items, carefully selected just for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover amazing products at unbeatable prices.
          </p>
          <Link to="/products">
            <Button size="lg" variant="outline" className="bg-white text-emerald-600 border-white hover:bg-emerald-50 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Start Shopping Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
