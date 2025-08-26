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

            {/* Product Image with Caption */}
            <div className="image-container">
              <img 
                src="/lovable-uploads/671dac0b-4492-4be8-ae3b-884fde280fc9.png" 
                alt="iDrotherapy Cream luxury jar with elegant black packaging showing Wrinkle Reducer formula" 
                className="image-responsive max-w-md"
                loading="lazy"
                width="600"
                height="400"
              />
              <p className="text-sm text-news-muted mt-3 italic">The breakthrough iDrotherapy Wrinkle Reducer that's selling out nationwide</p>
              
              {/* Inline CTA */}
              <div className="mt-6">
                <a href="https://www.idrotherapylove.com" className="editorial-cta">
                  Try Risk-Free Today →
                </a>
              </div>
            </div>

            {/* Why Experts Section */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold mb-4">Why Experts Are Calling It the "Retinol Replacement"</h2>
              
              <p className="news-body text-lg mb-4">
                Retinol has long been the gold standard for anti-aging… but it often causes peeling, redness, and sensitivity.
              </p>
              
              <p className="news-body text-lg mb-4">
                iDrotherapy takes a different approach. Its Matrixyl 3000 + Renovage peptide complex targets aging at the cellular level, boosting skin's natural repair cycle and prolonging the lifespan of tissues.
              </p>

              <div className="pull-quote-large">
                "Think of it as retinol's younger, smarter, gentler sibling"
                <div className="text-lg text-news-muted mt-2 not-italic">– Leading Cosmetic Chemist</div>
              </div>

              <div className="text-center mb-6">
                <a href="https://www.idrotherapylove.com" className="editorial-cta">
                  Readers Are Calling This 'Nature's Botox' →
                </a>
              </div>

              <p className="news-body text-lg mb-4">
                The result? Skin that looks visibly younger, firmer, and more radiant—without the irritation.
              </p>
            </div>
            {/* Clinical Results */}
            <section className="mb-8">
              <h2 className="news-headline text-3xl font-bold text-center text-red-600 mb-2">
                Clinical Before & After Results
              </h2>
              <p className="text-center text-news-muted mb-6">
                Independent clinical studies document the remarkable transformation achieved in just 28 days of use.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Eye Area',
                    stat: "67% reduction in crow's feet",
                    img: 'https://idro.vouue.com/lovable-uploads/82a086d7-78a5-438b-944c-2c5a90641034.png',
                    alt: "Before and after of eye area showing fewer crow's feet",
                  },
                  {
                    title: 'Nasolabial Folds',
                    stat: '58% reduction in smile lines',
                    img: 'https://idro.vouue.com/lovable-uploads/61df6848-20ff-4902-8965-e92df230b702.png',
                    alt: 'Before and after of nasolabial folds',
                  },
                  {
                    title: "Crow's Feet",
                    stat: '59% reduction in fine lines',
                    img: 'https://idro.vouue.com/lovable-uploads/962d3867-0231-4910-aa28-05f9644d96e3.png',
                    alt: "Closeup showing crow's feet improvement",
                  },
                  {
                    title: 'Overall Complexion',
                    stat: '73% improvement in skin tone',
                    img: 'https://idro.vouue.com/lovable-uploads/76e19f87-0866-485a-af6c-ea5b259e69ec.png',
                    alt: 'Face showing overall complexion improvement',
                  },
                  {
                    title: 'Facial Radiance',
                    stat: '65% improvement in brightness',
                    img: 'https://idro.vouue.com/lovable-uploads/234c02bd-e749-482b-88ab-afc4e01f84d0.png',
                    alt: 'Before and after of facial radiance',
                  },
                  {
                    title: 'Neck & Jawline',
                    stat: '58% reduction in neck lines',
                    img: 'https://idro.vouue.com/lovable-uploads/a477b904-f3b7-4f83-ba4f-1a96f86f3907.png',
                    alt: 'Neck and jawline showing smoother skin',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-2 border-red-600 rounded-lg bg-white flex flex-col overflow-hidden"
                  >
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-red-600 mb-1">{item.title}</h3>
                      <p className="text-sm text-news-muted">{item.stat}</p>
                    </div>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    <div className="p-2 text-center">
                      <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        Clinical Study Result
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-bold text-center text-red-600 mb-4">
                  PEER-REVIEWED CLINICAL EVIDENCE
                </h3>
                <p className="text-center text-news-muted mb-6">
                  These results have been published in the International Journal of Cosmetic Science and verified by independent
                  dermatological assessment.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { stat: '28', label: 'Days to Results' },
                    { stat: '120', label: 'Study Participants' },
                    { stat: '98%', label: 'Showed Improvement' },
                  ].map((d) => (
                    <div key={d.label} className="bg-white rounded-lg p-4 text-center shadow">
                      <div className="text-3xl font-bold text-red-600">{d.stat}</div>
                      <div className="text-sm text-news-muted">{d.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Dermatologist Image */}
            <div className="mb-8">
              <img
                src={dermatologistRealistic}
                alt="Professional dermatologist examining skincare products in clinical setting"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
                width="1000"
                height="600"
              />
              <p className="text-sm text-news-muted mt-2 italic">Dr. Sarah Mitchell examines the breakthrough peptide formula in her Beverly Hills clinic</p>

              {/* Mid-article CTA */}
              <div className="text-center mt-6 mb-8">
                <a href="https://www.idrotherapylove.com" className="editorial-cta-success">
                  ✅ Dermatologist Recommended - Order Now →
                </a>
              </div>
            </div>

            {/* Morning Night Section */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold mb-4">Morning. Night. Even On Your Hands.</h2>
              
              <p className="news-body text-lg mb-4">
                Unlike other creams designed for one area of the face, iDrotherapy is an all-in-one solution:
              </p>

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

              <div className="scarcity-alert mb-6">
                <p className="font-semibold mb-2">⏰ Limited Time: Special Editorial Pricing</p>
                <p className="text-sm">Our readers get exclusive access to discounted pricing - but only while supplies last.</p>
              </div>

              <div className="editorial-cta inline-block mb-6">
                <a href="https://www.idrotherapylove.com" className="editorial-cta-large">
                  See Before & After Photos →
                </a>
              </div>
            </div>

            {/* Before After Image */}
            <div className="comparison-box">
              <h3 className="text-xl font-bold mb-6 text-center">Dramatic Results in Just 4 Weeks</h3>
              <div className="image-container">
                <img 
                  src="/lovable-uploads/579730e5-27da-484a-8c7d-60a7043bf40c.png" 
                  alt="Before and after comparison showing dramatic reduction in fine lines, wrinkles, and skin texture improvement" 
                  className="image-responsive max-w-2xl"
                  loading="lazy"
                  width="800"
                  height="400"
                />
                <p className="text-sm text-news-muted italic mt-3">Real results: Dramatic improvement in fine lines and skin texture after 4 weeks of daily use</p>
              </div>
              <div className="text-center mt-6">
                <a href="https://www.idrotherapylove.com" className="editorial-cta-urgent">
                  ⚡ Limited Stock - Order Before It's Gone →
                </a>
              </div>
            </div>

            {/* Real Women Section */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold mb-4">Real Women Are Raving</h2>
              
              <div className="space-y-6 mb-8">
                <div className="testimonial-enhanced">
                  <p className="text-lg mb-2 font-medium">I was skeptical, but within 2 weeks, my under-eye circles faded and my skin felt plumper. I actually stopped buying my $150 serum.</p>
                  <p className="text-sm text-news-muted font-semibold">– Susan, 52, verified buyer</p>
                </div>
                
                <div className="testimonial-enhanced">
                  <p className="text-lg mb-2 font-medium">My neck lines were deep and noticeable. After a month with iDrotherapy, they're barely visible. This cream is my holy grail.</p>
                  <p className="text-sm text-news-muted font-semibold">– Maria, 48, verified buyer</p>
                </div>
                
                <div className="testimonial-enhanced">
                  <p className="text-lg mb-2 font-medium">It's like Photoshop in a jar. I use it morning and night and my skin has never looked more even.</p>
                  <p className="text-sm text-news-muted font-semibold">– Claire, 56, verified buyer</p>
                </div>
              </div>

            <div className="text-center mb-8">
                <a href="https://www.idrotherapylove.com" className="editorial-cta-large">
                  Join 10,000+ Happy Customers →
                </a>
              </div>
            </div>

            {/* Beauty Revolution Section */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold text-center mb-4">
                Join The Beauty Revolution
              </h2>
              <p className="news-body text-lg text-center mb-6">
                Thousands of women worldwide have discovered the transformative power of iDrotherapy's revolutionary formula. See the confidence in their faces.
              </p>
              <div className="image-container">
                <img
                  src="https://idro.vouue.com/lovable-uploads/8da99380-b785-4a85-961c-2b5f761d611e.png"
                  alt="Collage of women holding iDrotherapy cream"
                  className="image-responsive"
                  loading="lazy"
                  width="975"
                  height="199"
                />
              </div>
              <div className="p-6 rounded-lg bg-pink-100 text-center">
                <h3 className="news-headline text-2xl mb-4">The Results Speak For Themselves</h3>
                <p className="news-body text-lg mb-6">
                  These women represent just a fraction of our 50,000+ satisfied customers who have experienced the life-changing benefits of RenuV8® and Renovage® technology.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-4xl font-bold text-red-600 mb-2">94%</p>
                    <p className="text-sm text-news-muted">Visible improvement in 2 weeks</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-red-600 mb-2">98%</p>
                    <p className="text-sm text-news-muted">Would recommend to friends</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-red-600 mb-2">91%</p>
                    <p className="text-sm text-news-muted">Plan to repurchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Woman with Product Image */}
            <div className="content-section">
              <div className="image-container">
                <img 
                  src="/lovable-uploads/ca66e615-6b53-470a-b542-1020dc49a3d8.png" 
                  alt="Happy woman proudly displaying her iDrotherapy Wrinkle Reducer cream with confident smile" 
                  className="image-responsive max-w-lg"
                  loading="lazy"
                  width="600"
                  height="700"
                />
                <p className="text-sm text-news-muted mt-3 italic">Sarah, 34, says iDrotherapy transformed her confidence and simplified her entire skincare routine</p>
              </div>
              
              {/* Another CTA */}
              <div className="text-center mt-8">
                <a href="https://www.idrotherapylove.com" className="editorial-cta-large">
                  🌟 Transform Your Skin Today →
                </a>
              </div>
            </div>

            {/* Why It's Different */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold mb-4">Why It's Different From Everything Else</h2>
              
              <p className="news-body text-lg mb-4">
                Most beauty brands split their formulas: one for eyes, one for the neck, one for the face, one for spots.
              </p>
              
              <p className="news-body text-lg mb-4">
                <strong>iDrotherapy doesn't play that game.</strong>
              </p>

              <p className="news-body text-lg mb-4">
                It's one luxurious cream—formulated to:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
                <li>Boost elasticity</li>
                <li>Reduce wrinkles and lines</li>
                <li>Shrink pores</li>
                <li>Brighten dull skin</li>
                <li>Lock in hydration</li>
                <li>Smooth texture</li>
              </ul>
            </div>

            {/* Final CTA Section */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold mb-4">Where to Get It Before It Sells Out</h2>
              
              <p className="news-body text-lg mb-4">
                Here's the catch: iDrotherapy Cream is only available online, and demand has been skyrocketing since beauty insiders began calling it "the one-step wonder."
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-lg font-semibold mb-2">⚠️ Editor's Note:</p>
                <p className="text-base">Due to overwhelming demand, new customers are limited to 2 jars per order. Once this batch is gone, shipping delays may last several weeks.</p>
              </div>

              <div className="fomo-box text-center">
                <p className="font-semibold text-lg mb-2">🔥 Exclusive Reader Discount</p>
                <p className="text-sm mb-4">Fox Lifestyle readers save 40% - but only for the next 24 hours!</p>
              </div>

              <div className="text-center">
                <a href="https://www.idrotherapylove.com" className="editorial-cta-large text-xl px-10 py-5">
                  👉 Claim Your Exclusive Discount Now
                </a>
              </div>

              <p className="news-body text-lg mt-6 text-center font-semibold">
                Don't wait—your younger-looking skin could start today.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 self-start">
            <div className="lg:sticky lg:bottom-0">
              {/* Quick Facts Widget */}
              <div className="sidebar-widget">
                <div className="editor-pick mb-4">Editor's Pick</div>
                <h3 className="news-subhead text-xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Formula:</strong> Matrixyl 3000 + Renovage Peptides</li>
                  <li><strong>Results:</strong> Visible in 2-4 weeks</li>
                  <li><strong>Use:</strong> Morning & Night</li>
                  <li><strong>Safe for:</strong> All skin types</li>
                  <li><strong>No:</strong> Harsh retinol, parabens, sulfates</li>
                  <li><strong>Targets:</strong> Face, neck, hands</li>
                </ul>
              </div>

              {/* Newsletter Signup Widget */}
              <div className="sidebar-widget bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
                <h3 className="news-subhead text-xl font-bold mb-4 text-red-700">📧 Beauty Insider Alerts</h3>
                <p className="text-sm mb-2">Get exclusive access to breakthrough beauty discoveries before they go viral!</p>
                <div className="klaviyo-form-TaTjsW"></div>
                <p className="text-xs text-news-muted mt-2">Join 50,000+ beauty insiders. Unsubscribe anytime.</p>
              </div>

              {/* Product Image Widget */}
              <div className="sidebar-widget text-center">
                <div className="editor-pick mb-4">Trending Now</div>
                <img
                  src="/lovable-uploads/ff2aee7a-de72-4c36-aa5c-9a46a571308c.png"
                  alt="iDrotherapy Wrinkle Reducer cream jar with luxury packaging"
                  className="image-responsive max-w-xs mb-4"
                  loading="lazy"
                  width="300"
                  height="300"
                />
                <h4 className="font-bold mb-2">iDrotherapy Wrinkle Reducer</h4>
                <p className="text-sm text-news-muted mb-4">The breakthrough formula dermatologists recommend</p>
                <a href="https://www.idrotherapylove.com" className="editorial-cta w-full justify-center mb-3">
                  Check Availability →
                </a>
                <a href="https://www.idrotherapylove.com" className="editorial-cta-urgent w-full justify-center">
                  🔥 Flash Sale - 40% Off →
                </a>
              </div>

              {/* FAQ Widget */}
              <div className="sidebar-widget">
                <h3 className="news-subhead text-xl font-bold mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Is it safe for sensitive skin?</h4>
                    <p className="text-sm text-news-muted">Yes, formulated without harsh retinol or irritating chemicals.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">When will I see results?</h4>
                    <p className="text-sm text-news-muted">Most users notice improvements within 2-4 weeks of consistent use.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Can I use it with other products?</h4>
                    <p className="text-sm text-news-muted">Yes, but many find they can replace multiple products with just this one.</p>
                  </div>
                </div>
              </div>

              {/* Limited Stock Widget */}
              <div className="sidebar-widget bg-red-50 border-red-200">
                <h3 className="news-subhead text-xl font-bold mb-4 text-red-700">⚠️ Stock Alert</h3>
                <div className="fomo-counter mb-3">⚡ {orderCount} orders today</div>
                <p className="text-sm mb-4">Less than 200 units remaining for this month. New shipments delayed until next quarter.</p>
                <a href="https://www.idrotherapylove.com" className="editorial-cta bg-red-600 hover:bg-red-700 w-full justify-center">
                  Order Before It's Gone →
                </a>
              </div>

              {/* Related Articles Widget */}
              <div className="sidebar-widget">
                <h3 className="news-subhead text-xl font-bold mb-6">Related Stories</h3>

                {/* CaviArgan Article */}
                <a
                  href="https://www.beverlyhillsscoops.com"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/1554c539-cd88-45fd-a732-3a457ca6ea44.png"
                    alt="Woman holding CaviArgan cream with radiant skin"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-red-600">
                    SHOCKING: This $39 CaviArgan Cream Outperforms $300 Luxury Brands
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Celebrity makeup artists reveal the affordable secret behind Hollywood's glow that's causing luxury brands to panic...
                  </p>
                  <div className="text-xs text-red-600 font-semibold">TRENDING NOW • 2 min read</div>
                </a>

                {/* Essence of Argan Article */}
                <a
                  href="https://www.beverlyhillsscoops.com/argan"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/88a7dfa9-88af-4d1b-92b2-d1515ac28421.png"
                    alt="Woman applying Essence of Argan oil with glowing skin"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-red-600">
                    EXCLUSIVE: Moroccan Argan Oil Secret That's Making Botox Obsolete
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Beauty insiders scramble to get their hands on this ancient anti-aging formula that's leaving dermatologists speechless...
                  </p>
                  <div className="text-xs text-red-600 font-semibold">BREAKING • 3 min read</div>
                </a>

                {/* Additional Article 1 */}
                <a
                  href="https://idro.vouue.com/"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/ca66e615-6b53-470a-b542-1020dc49a3d8.png"
                    alt="Woman with perfect skin results"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-red-600">
                    VIRAL: 58-Year-Old Mom Looks 35 After Using This 1 Simple Trick
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Plastic surgeons hate her! Local mom discovers fountain of youth that costs less than your morning coffee...
                  </p>
                  <div className="text-xs text-red-600 font-semibold">VIRAL • 4 min read</div>
                </a>

                {/* Additional Article 2 */}
                <a
                  href="https://idro.vouue.com/"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/ff2aee7a-de72-4c36-aa5c-9a46a571308c.png"
                    alt="Premium skincare product results"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-red-600">
                    EXPOSED: The $15 Anti-Aging Cream That Billionaires Don't Want You to Know About
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Silicon Valley insider leaks the secret formula that tech moguls have been hiding from the public...
                  </p>
                  <div className="text-xs text-red-600 font-semibold">EXCLUSIVE • 5 min read</div>
                </a>

                {/* Additional Article 3 */}
                <a
                  href="https://www.beverlyhillsscoops.com"
                  className="block group"
                >
                  <img
                    src="/lovable-uploads/579730e5-27da-484a-8c7d-60a7043bf40c.png"
                    alt="Amazing before after transformation"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-red-600">
                    MIRACLE: Before & After Photos That Will Make You Believe in Anti-Aging Science
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    These shocking transformation photos are proof that age is just a number when you know the right secrets...
                  </p>
                  <div className="text-xs text-red-600 font-semibold">MUST SEE • 3 min read</div>
                </a>
              </div>

              {/* Additional Sidebar Content */}
              <div className="sidebar-widget">
                <h3 className="news-subhead text-xl font-bold mb-4 text-red-700">🔥 What's Hot Right Now</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="text-2xl">📈</span>
                    <div>
                      <h4 className="font-semibold text-sm">Anti-Aging Market Explodes</h4>
                      <p className="text-xs text-news-muted">Peptide creams see 400% surge in demand</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="text-2xl">🧪</span>
                    <div>
                      <h4 className="font-semibold text-sm">Lab Results Shock Scientists</h4>
                      <p className="text-xs text-news-muted">New formula shows unprecedented results</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="text-2xl">👩‍⚕️</span>
                    <div>
                      <h4 className="font-semibold text-sm">Dermatologists Recommend</h4>
                      <p className="text-xs text-news-muted">94% of experts endorse peptide therapy</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup Widget */}
              <div className="sidebar-widget bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
                <h3 className="news-subhead text-xl font-bold mb-4 text-red-700">📧 Beauty Insider Alerts</h3>
                <p className="text-sm mb-2">Get exclusive access to breakthrough beauty discoveries before they go viral!</p>
                <div className="klaviyo-form-TaTjsW"></div>
                <p className="text-xs text-news-muted mt-2">Join 50,000+ beauty insiders. Unsubscribe anytime.</p>
              </div>

              {/* Urgency Widget - Updated to Red Theme */}
              <div className="sidebar-widget bg-red-50 border-red-200">
                <h3 className="news-subhead text-xl font-bold mb-4 text-red-700">⏰ 24-Hour Flash Sale</h3>
                <p className="text-sm mb-4">Editorial readers get 40% off, but this deal expires at midnight!</p>
                <a href="https://www.idrotherapylove.com" className="editorial-cta w-full justify-center">
                  Claim Flash Discount →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final Order Section */}
        <div id="order" className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="news-headline text-4xl font-bold mb-4">Where to Buy iDrotherapy Cream Before It's Gone</h2>
          <p className="news-body text-xl mb-6">Exclusive online availability - Limited to 2 jars per customer</p>
          
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="image-container mb-6">
              <img 
                src="/lovable-uploads/8b78a4f6-6b4f-4883-9246-ffc0a706f5e4.png" 
                alt="Radiant woman holding iDrotherapy Wrinkle Reducer cream with beautiful results" 
                className="w-32 h-32 mx-auto rounded-lg object-cover"
                loading="lazy"
                width="128"
                height="128"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">iDrotherapy Wrinkle Reducer</h3>
            <p className="text-lg font-semibold text-red-600 mb-6">Special Editorial Price - 40% Off!</p>
            <div className="space-y-4">
              <a href="https://www.idrotherapylove.com" className="editorial-cta-large text-xl px-8 py-4 w-full justify-center">
                CLAIM YOUR JAR NOW →
              </a>
              <a href="https://www.idrotherapylove.com" className="editorial-cta-urgent w-full justify-center">
                ⚡ Only 2 Hours Left - Order Now! →
              </a>
            </div>
            <p className="text-xs text-news-muted mt-6">*This editorial pricing is available for a limited time only</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-news-border">
          <p className="text-xs text-news-muted text-center">
            <strong>Editorial Disclaimer:</strong> This article is for informational purposes and represents the editorial opinion of Fox Lifestyle. Individual results may vary. This content has not been evaluated by the FDA. The product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new skincare regimen.
          </p>
        </div>

        {/* Footer Links */}
        <footer className="mt-4 text-center text-xs text-news-muted">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            <a href="https://idrotherapylove.com/contact" className="hover:text-red-600">
              Contact Us
            </a>
            <span>|</span>
            <a href="https://idrotherapylove.com/terms" className="hover:text-red-600">
              Terms and Conditions
            </a>
            <span>|</span>
            <a href="https://idrotherapylove.com/privacy" className="hover:text-red-600">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="https://idrotherapylove.com/refund" className="hover:text-red-600">
              Refund Policy
            </a>
            <span>|</span>
            <a href="https://idrotherapylove.com/shipping" className="hover:text-red-600">
              Shipping Policy
            </a>
            <span>|</span>
            <a
              href="https://streamline.everflowclient.io/affiliate/signup"
              className="hover:text-red-600"
            >
              AFFILIATE SIGN UP
            </a>
          </div>
          <div className="mt-1">© 2025 Idrotherapy. All Rights Reserved</div>
        </footer>

        {/* Floating Order Button */}
        <a
          href="https://www.idrotherapylove.com"
          className="fixed bottom-0 left-0 right-0 z-50 block w-full text-center text-white font-semibold py-3 bg-[#DC3636]"
        >
          ORDER NOW - Up to 75% OFF + FREE Gua sha set! ($70 value)
        </a>

      </div>
    </div>
  );
};

export default Index;