import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>
            <span className="text-xl font-bold tracking-tight text-green-900">GrocerGo</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-green-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-green-600 transition-colors">Deals</a>
            <a href="#" className="hover:text-green-600 transition-colors">Recipes</a>
            <a href="#" className="hover:text-green-600 transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-green-600">Sign In</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Fresh groceries, <br/>
              <span className="text-green-600">delivered in minutes.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the freshest produce, locally sourced meats, and pantry staples delivered directly to your doorstep. No fees on your first order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 max-w-md relative">
                <input 
                  type="text" 
                  placeholder="Enter your zip code" 
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm text-lg"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-green-600 text-white px-6 rounded-full font-medium hover:bg-green-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Free Delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                No Hidden Fees
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose GrocerGo?</h2>
            <p className="text-lg text-gray-600">We obsess over quality so you don't have to. From farm to table, we ensure every item meets our high standards.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Farm Fresh', desc: 'Sourced directly from local farmers within 24 hours of harvest.', icon: '🌱' },
              { title: 'Smart Savings', desc: 'Weekly deals and personalized coupons just for you.', icon: '🏷️' },
              { title: 'Fast Delivery', desc: 'Choose a 1-hour window that works for your schedule.', icon: '🚚' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-900 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start shopping?</h2>
              <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of happy customers who save time and money with GrocerGo.</p>
              <button className="bg-white text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Create Your Account
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
            <span className="font-bold text-gray-900">GrocerGo</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2025 GrocerGo Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
