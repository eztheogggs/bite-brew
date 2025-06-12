export function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to
            <span className="text-amber-800 block">Brew & Bite</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your neighborhood coffee shop serving freshly roasted coffee, artisanal pastries, 
            and delicious light meals in a warm, welcoming atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 hover:text-white transition-colors"
            >
              Visit Us
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Coffee</h3>
            <p className="text-gray-600">Locally roasted beans brewed to perfection</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🥐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Pastries</h3>
            <p className="text-gray-600">Baked daily with the finest ingredients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cozy Atmosphere</h3>
            <p className="text-gray-600">Perfect place to work, meet, or relax</p>
          </div>
        </div>
      </div>
    </section>
  );
}
