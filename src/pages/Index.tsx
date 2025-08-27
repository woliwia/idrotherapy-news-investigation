import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-clinical-lab.jpg";
import dermatologistRealistic from "@/assets/dermatologist-realistic.jpg";

const Index = () => {
  const [orderCount, setOrderCount] = useState(137);
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);

  // Sidebar sticky management handled via CSS
  
  const tickerMessages = [
    "BREAKING: Dermatologists Stunned by This One-Step Cream",
    "TRENDING: Beauty Forums Exploding With Reviews",
    "ALERT: iDrotherapy Cream Sells Out in 72 Hours",
    "URGENT: Major Breakthrough in Anti-Aging Science",
    "EXCLUSIVE: Revolutionary Formula Replacing 5 Products"
  ];

  useEffect(() => {
    // Simulate live counter updates
    const interval = setInterval(() => {
      setOrderCount(prev => prev + Math.floor(Math.random() * 3));
    }, 45000);
    
    // Rotate ticker messages
    const tickerInterval = setInterval(() => {
      setCurrentTickerIndex(prev => (prev + 1) % tickerMessages.length);
    }, 4000);
    
    return () => {
      clearInterval(interval);
      clearInterval(tickerInterval);
    };
  }, [tickerMessages.length]);


  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Breaking News Ticker */}
      <div className="breaking-ticker">
        <div className="ticker-content">
          {tickerMessages.map((message, index) => (
            <span key={index} className="ticker-item">{message}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {tickerMessages.map((message, index) => (
            <span key={`dup-${index}`} className="ticker-item">{message}</span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="news-headline text-4xl md:text-5xl lg:text-6xl font-bold text-news-text mb-4">
            BREAKING: The "One-Step Wonder Cream" Dermatologists Say Could Replace Half Your Skincare Routine
          </h1>
          <p className="news-subhead text-xl md:text-2xl text-news-muted mb-6">
            Fox Lifestyle – Special Investigation: Revolutionary peptide formula creating buzz across beauty forums for its ability to smooth wrinkles, fade dark circles, and deliver all-day hydration without harsh retinol
          </p>
          <div className="relative w-full max-w-4xl mx-auto">
            <img 
              src={heroImage} 
              alt="Clinical laboratory researchers examining breakthrough skincare formula" 
              className="hero-image rounded-lg shadow-lg"
              fetchPriority="high"
              loading="eager"
              width="1200"
              height="675"
            />
            <p className="text-sm text-news-muted mt-2 italic">Clinical researchers examine the breakthrough peptide formula that's revolutionizing skincare routines nationwide</p>
          </div>

          {/* First CTA */}
          <div className="text-center mt-6">
            <a href="https://www.idrotherapylove.com" className="editorial-cta-large">
              🔥 Get Your Breakthrough Cream Now →
            </a>
          </div>
        </div>

        {/* Live FOMO Counter */}
        <div className="text-center mb-8">
          <div className="fomo-counter mx-auto">
            ⚡ {orderCount} readers ordered today
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-none mx-auto px-4">
          
          {/* Main Article Column */}
          <div className="lg:col-span-2">
            
            {/* Opening Story */}
            <div className="mb-8">
              <p className="news-body text-lg mb-4">
                For years, the beauty industry has convinced women they need five different products: an eye cream, a night cream, a neck cream, a wrinkle serum, and a spot corrector. But what if one single cream could replace them all?
              </p>
              
              <p className="news-body text-lg mb-4">
                Enter <strong>iDrotherapy Cream</strong>—a breakthrough peptide-rich formula that women are calling "the only product I need anymore."
              </p>

              <div className="editorial-cta inline-block mb-6">
                <a href="https://www.idrotherapylove.com" className="editorial-cta-large">
                  Editor's Pick: Try iDrotherapy Cream Before It's Gone →
                </a>
              </div>

              <div className="fomo-box">
                <p className="text-sm font-semibold mb-2">⚠️ Stock Alert</p>
                <p className="text-sm">Only 2 jars per customer due to overwhelming demand. Just restocked after 3 sellouts this year.</p>
              </div>

              <p className="news-body text-lg mb-6">
                This dermatologist-approved cream is already creating buzz across beauty forums for its ability to:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
                <li>Smooth wrinkles & fine lines (without harsh retinol)</li>
                <li>Fade dark circles & neck lines</li>
                <li>Erase age spots & sun damage</li>
                <li>Plump crepey skin on the face, neck, and arms</li>
                <li>Deliver all-day hydration & a radiant glow</li>
              </ul>
            </div>

            {/* Product Image */}
            <div className="mb-8">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/1428/1855/files/iDro_Article_Image_1_1024x1024.jpg?v=1699388448"
                alt="iDrotherapy Cream Jar"
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-news-muted mt-2 italic">The peptide-rich iDrotherapy Cream is flying off shelves as women ditch their 5-step routines</p>
            </div>

            {/* Expert Section */}
            <div className="mb-8">
              <h2 className="news-headline text-2xl font-bold mb-4">
                Why Dermatologists Are Recommending It
              </h2>
              <p className="news-body text-lg mb-4">
                "As a dermatologist, I'm always on the lookout for products that deliver real results without harsh chemicals," says Dr. Emily Carter, a leading expert in skincare. "iDrotherapy Cream is one of the few products I've seen that lives up to the hype. The unique blend of peptides and antioxidants work synergistically to rejuvenate the skin at a cellular level."
              </p>
            </div>

            {/* Clinical Results */}
            <div className="mb-8">
              <h2 className="news-headline text-2xl font-bold mb-4">
                The Science Doesn't Lie: Real Clinical Results
              </h2>
              <p className="news-body text-lg mb-4">
                In a recent clinical study, participants using iDrotherapy Cream experienced:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li><strong>92%</strong> reduction in wrinkle depth</li>
                <li><strong>87%</strong> decrease in dark circles</li>
                <li><strong>95%</strong> increase in skin hydration</li>
              </ul>
              <p className="news-body text-lg mb-4">
                These results speak for themselves. iDrotherapy Cream is not just another skincare product—it's a scientifically-backed solution for achieving younger, healthier-looking skin.
              </p>
            </div>

            {/* Dermatologist Image */}
            <div className="mb-8">
              <img
                src={dermatologistRealistic}
                alt="Dr. Emily Carter"
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-news-muted mt-2 italic">Dr. Emily Carter, a leading dermatologist, recommends iDrotherapy Cream to her patients</p>
            </div>
            
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 text-center">Related Stories</h3>
                
                <div className="space-y-6">
                  <a href="#" className="block hover:bg-gray-100 p-2 rounded-md transition-colors">
                    <h4 className="font-semibold">The Dark Side of Retinol Creams</h4>
                    <p className="text-sm text-gray-600">Are you unknowingly damaging your skin?</p>
                  </a>
                  <a href="#" className="block hover:bg-gray-100 p-2 rounded-md transition-colors">
                    <h4 className="font-semibold">5 Foods That Erase Wrinkles</h4>
                    <p className="text-sm text-gray-600">Eat your way to younger-looking skin.</p>
                  </a>
                  <a href="#" className="block hover:bg-gray-100 p-2 rounded-md transition-colors">
                    <h4 className="font-semibold">The $5 Hack for Glowing Skin</h4>
                    <p className="text-sm text-gray-600">Skip the spa, try this instead.</p>
                  </a>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm font-semibold text-red-600 mb-2">🔥 Breaking News</p>
                  <p className="text-xs">iDrotherapy just announced they're extending their 75% off sale through this weekend only!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Sections Start Here */}
      <div className="w-full">
        {/* Ingredients Section - Full Width */}
        <section className="bg-gradient-to-br from-red-50 to-red-100 py-8 md:py-12 lg:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600 mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                🔥 THE "FOUNTAIN OF YOUTH" FORMULA DECODED 🔥
              </h2>
              <div className="inline-block bg-red-600 text-white px-3 md:px-4 lg:px-6 py-2 rounded-full font-semibold text-xs md:text-sm lg:text-base">
                VALUED AT $25,000+ PER TREATMENT IN BEVERLY HILLS
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Palmitoyl Pentapeptide-4",
                  icon: "✨",
                  description: "Stimulates collagen and elastin production for firmer skin",
                  price: "CLINIC PRICE: $2,500+"
                },
                {
                  name: "Sodium Hyaluronate",
                  icon: "✨",
                  description: "Holds 1000x its weight in water for deep hydration",
                  price: "CLINIC PRICE: $2,500+"
                },
                {
                  name: "Teprenone",
                  icon: "✨",
                  description: "Powerful antioxidant that protects against free radical damage",
                  price: "CLINIC PRICE: $2,500+"
                },
                {
                  name: "Boron Nitride",
                  icon: "✨",
                  description: "Creates an immediate smoothing effect and fills fine lines",
                  price: "CLINIC PRICE: $2,500+"
                },
                {
                  name: "Glycerin",
                  icon: "✨",
                  description: "Natural humectant that maintains skin moisture barrier",
                  price: "CLINIC PRICE: $2,500+"
                },
                {
                  name: "Iodopropynyl Butylcarbamate",
                  icon: "✨",
                  description: "Advanced preservative system that maintains formula purity and stability",
                  price: "CLINIC PRICE: $2,500+"
                }
              ].map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="bg-white rounded-xl p-3 md:p-4 lg:p-6 shadow-lg border-2 border-red-200 hover:border-red-400 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-gray-800 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold">
                    CELEB FAVE
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 lg:mb-4">{ingredient.icon}</div>
                  <h3 className="font-bold text-sm md:text-base lg:text-lg mb-2 md:mb-3 text-gray-900 leading-tight">{ingredient.name}</h3>
                  <div className="bg-gray-100 rounded-lg p-2 md:p-3 lg:p-4 mb-2 md:mb-3 lg:mb-4">
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{ingredient.description}</p>
                  </div>
                  <div className="bg-red-600 text-white text-center py-2 rounded-lg font-semibold text-xs md:text-sm">
                    {ingredient.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Morning Night Section - Full Width */}
        <section className="bg-white py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="news-headline text-2xl md:text-3xl font-bold mb-4">Morning. Night. Even On Your Hands.</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <strong>Morning Routine</strong> – Revitalizes skin for the day ahead, leaving a natural glow.
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌙</span>
                  <div>
                    <strong>Night Routine</strong> – Works while you sleep, delivering visible improvements in weeks.
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💫</span>
                  <div>
                    <strong>Body Care</strong> – Targets age spots, crepey neck skin, and even dryness on arms or hands.
                  </div>
                </div>
              </div>

              <p className="news-body text-lg mb-6 font-semibold">
                👉 That means no more cluttered bathroom shelves, no more 5-step routines. Just one cream that does it all.
              </p>
            </div>

            {/* Customer Reviews Section */}
            <section className="mt-16 mb-8">
              <h2 className="news-headline text-3xl font-bold text-center text-black mb-2">
                Real Customer Reviews
              </h2>
              <p className="text-center text-news-muted mb-6">
                See what our verified customers are saying about their iDrotherapy experience
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <p className="text-sm italic mb-2">"I've been using iDrotherapy for just 2 weeks and I already see a huge difference! My wrinkles are fading and my skin is so much brighter."</p>
                  <p className="text-xs font-semibold">- Sarah J.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <p className="text-sm italic mb-2">"I was skeptical at first, but this cream is amazing! It's replaced 4 other products in my routine and my skin has never looked better."</p>
                  <p className="text-xs font-semibold">- Michelle K.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <p className="text-sm italic mb-2">"I have very sensitive skin and this is the only cream that doesn't irritate it. It's so gentle and hydrating, and it really works!"</p>
                  <p className="text-xs font-semibold">- Amanda L.</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Dramatic Results Section - Full Width */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
              Dramatic Results in Just 4 Weeks
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Week 1-2</h3>
                  <p className="text-gray-700">Skin feels smoother and more hydrated. Fine lines appear softer.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Week 3-4</h3>
                  <p className="text-gray-700">Visible reduction in wrinkles. Dark circles fade. Skin looks years younger.</p>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="https://cdn.shopify.com/s/files/1/0589/1428/1855/files/Before_After_1024x1024.jpg?v=1699388447"
                  alt="Before and after results showing dramatic skin improvement"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2 italic">Actual customer results after 4 weeks of use</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join The Beauty Revolution Section - Full Width */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join The Beauty Revolution
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Over 50,000 women have already discovered the secret to younger-looking skin. Don't wait – join them today!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">💝 Free Shipping</h3>
                <p className="text-sm">On all orders over $50</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">🔄 30-Day Guarantee</h3>
                <p className="text-sm">Love it or your money back</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">⚡ Limited Stock</h3>
                <p className="text-sm">Only 2 jars per customer</p>
              </div>
            </div>
            <a 
              href="https://www.idrotherapylove.com" 
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              CLAIM YOUR DISCOUNT NOW
            </a>
          </div>
        </section>

        {/* The Results Speak For Themselves Section - Full Width */}
        <section className="bg-white py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              The Results Speak For Themselves
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">92%</div>
                <p className="text-sm text-gray-700">Reduction in wrinkle depth</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">87%</div>
                <p className="text-sm text-gray-700">Decrease in dark circles</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
                <p className="text-sm text-gray-700">Increase in skin hydration</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                <p className="text-sm text-gray-700">Customer satisfaction rate</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/1428/1855/files/Customer_Results_1024x1024.jpg?v=1699388447"
                alt="Multiple customer before and after results"
                className="rounded-lg shadow-lg w-full max-w-4xl mx-auto"
              />
              <p className="text-sm text-gray-600 mt-4 italic">Real results from real customers - no filters, no editing</p>
            </div>
          </div>
        </section>

        {/* Where to Buy Section - Full Width */}
        <section className="bg-gradient-to-br from-red-100 to-red-200 py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
              Where to Buy iDrotherapy Cream Before It's Gone
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl">⚠️</span>
                <h3 className="text-xl font-bold text-red-600">STOCK ALERT</h3>
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="text-gray-700 mb-4">
                Due to overwhelming demand and limited production capacity, iDrotherapy Cream is currently:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Sold out in most retail stores</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Unavailable on Amazon (due to counterfeits)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Available ONLY on the official website</span>
                </li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
                <p className="text-sm text-red-700">
                  <strong>Beware of counterfeits!</strong> Only purchase from the official website to ensure you receive the genuine formula with the 30-day money-back guarantee.
                </p>
              </div>
            </div>
            <a 
              href="https://www.idrotherapylove.com" 
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors inline-block shadow-lg"
            >
              🔐 SECURE YOUR ORDER - OFFICIAL WEBSITE ONLY
            </a>
          </div>
        </section>

        {/* Final CTA - Full Width */}
        <section className="bg-red-600 text-white py-12 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Transform Your Skin Today</h2>
            <p className="text-lg md:text-xl mb-8">Join thousands who've discovered the secret to younger-looking skin</p>
            <a 
              href="https://www.idrotherapylove.com" 
              className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              ORDER NOW - Up to 75% OFF
            </a>
          </div>
        </section>
      </div>

      {/* Floating Order Button */}
      <a
        href="https://www.idrotherapylove.com"
        className="fixed bottom-0 left-0 right-0 z-50 block w-full text-center text-white font-semibold py-3 bg-[#DC3636]"
      >
        ORDER NOW - Up to 75% OFF + FREE Gua sha set! ($70 value)
      </a>
    </div>
  );
};

export default Index;
