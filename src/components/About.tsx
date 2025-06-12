export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Brew & Bite
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2018, Brew & Bite has been serving the community with exceptional 
              coffee and fresh baked goods. We believe in creating a warm, welcoming space 
              where neighbors become friends and every cup tells a story.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our beans are sourced directly from sustainable farms and roasted locally 
              to ensure the freshest flavor in every cup. Our pastries and light meals 
              are made fresh daily using high-quality, locally-sourced ingredients.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2">5+</h3>
                <p className="text-gray-600">Years Serving</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2">1000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
            <div className="text-8xl mb-6">☕</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To create a community hub where great coffee, delicious food, 
              and genuine connections come together to brighten your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
