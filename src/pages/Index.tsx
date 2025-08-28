import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-clinical-lab.jpg";
import dermatologistRealistic from "@/assets/dermatologist-realistic.jpg";

const Index = ({ destinationUrl }) => {
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
      <div className="breaking-ticker w-full">
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
      <div className="mobile-container py-8">
        <div className="text-center mb-8">
          <h1 className="news-headline font-bold text-news-text mb-4 leading-tight">
            BREAKING: The "One-Step Wonder Cream" Dermatologists Say Could Replace Half Your Skincare Routine
          </h1>
          <p className="news-subhead text-news-muted mb-6 leading-relaxed">
            Fox Lifestyle – Special Investigation: Revolutionary peptide formula creating buzz across beauty forums for its ability to smooth wrinkles, fade dark circles, and deliver all-day hydration without harsh retinol
          </p>
          <div className="relative w-full max-w-4xl mx-auto">
            <a href={destinationUrl}>
              <img 
                src={heroImage} 
                alt="Clinical laboratory researchers examining breakthrough skincare formula" 
                className="w-full h-auto aspect-[16/9] md:aspect-auto object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
                fetchPriority="high"
                loading="eager"
                width="1200"
                height="675"
              />
            </a>
            <p className="text-sm text-news-muted mt-2 italic max-w-[65ch] mx-auto">Clinical researchers examine the breakthrough peptide formula that's revolutionizing skincare routines nationwide</p>
          </div>

          {/* First CTA */}
          <div className="text-center mt-6">
            <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 md:inline-flex md:w-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 max-w-none mx-auto">
          
          {/* Main Article Column */}
          <div className="lg:col-span-2">
            
            {/* Opening Story */}
            <div className="mb-6">
              <p className="news-body mb-4 max-w-[65ch]">
                For years, the beauty industry has convinced women they need five different products: an eye cream, a night cream, a neck cream, a wrinkle serum, and a spot corrector. But what if one single cream could replace them all?
              </p>
              
              <p className="news-body mb-4 max-w-[65ch]">
                Enter <strong>iDrotherapy Cream</strong>—a breakthrough peptide-rich formula that women are calling "the only product I need anymore."
              </p>

              <div className="mb-6">
                <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                  Editor's Pick: Try iDrotherapy Cream Before It's Gone →
                </a>
              </div>

              <div className="fomo-box">
                <p className="text-sm font-semibold mb-2">⚠️ Stock Alert</p>
                <p className="text-sm">Only 2 jars per customer due to overwhelming demand. Just restocked after 3 sellouts this year.</p>
              </div>

              <p className="news-body mb-6 max-w-[65ch]">
                This dermatologist-approved cream is already creating buzz across beauty forums for its ability to:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-8 news-body max-w-[65ch]">
                <li>Smooth wrinkles & fine lines (without harsh retinol)</li>
                <li>Fade dark circles & neck lines</li>
                <li>Erase age spots & sun damage</li>
                <li>Plump crepey skin on the face, neck, and arms</li>
                <li>Deliver all-day hydration & a radiant glow</li>
              </ul>
            </div>

            {/* Product Image with Caption */}
            <div className="image-container">
              <a href={destinationUrl}>
                <img 
                  src="/lovable-uploads/671dac0b-4492-4be8-ae3b-884fde280fc9.png" 
                  alt="iDrotherapy Cream luxury jar with elegant black packaging showing Wrinkle Reducer formula" 
                  className="image-responsive max-w-md cursor-pointer hover:opacity-95 transition-opacity"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </a>
              <p className="text-sm text-news-muted mt-3 italic">The breakthrough iDrotherapy Wrinkle Reducer that's selling out nationwide</p>
              
              {/* Inline CTA */}
              <div className="mt-6">
                <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                  Try Risk-Free Today →
                </a>
              </div>
            </div>

            {/* Why Experts Section */}
            <div className="mb-8">
              <h2 className="news-headline font-bold mb-4">Why Experts Are Calling It the "Retinol Replacement"</h2>
              
              <p className="news-body mb-4 max-w-[65ch]">
                Retinol has long been the gold standard for anti-aging… but it often causes peeling, redness, and sensitivity.
              </p>
              
              <p className="news-body mb-4 max-w-[65ch]">
                iDrotherapy takes a different approach. Its Matrixyl 3000 + Renovage peptide complex targets aging at the cellular level, boosting skin's natural repair cycle and prolonging the lifespan of tissues.
              </p>

              <div className="pull-quote-large">
                "Think of it as retinol's younger, smarter, gentler sibling"
                <div className="text-lg text-news-muted mt-2 not-italic">– Leading Cosmetic Chemist</div>
              </div>

              <div className="text-center mb-6">
                <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                  Readers Are Calling This 'Nature's Botox' →
                </a>
              </div>

              <p className="news-body mb-4 max-w-[65ch]">
                The result? Skin that looks visibly younger, firmer, and more radiant—without the irritation.
              </p>
            </div>

            {/* Morning Night Section - Left Column */}
            <div className="mb-8">
              <h2 className="news-headline font-bold mb-4">
                Morning. Night. Even On Your Hands.
              </h2>
              
              <p className="news-body mb-6 max-w-[65ch]">
                Unlike other creams designed for one area of the face, iDrotherapy is an all-in-one solution:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">✨</span>
                  <div className="min-w-0">
                    <h3 className="font-bold news-subhead mb-2">Morning Routine</h3>
                    <p className="news-body">Revitalizes skin for the day ahead, leaving a natural glow.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">🌙</span>
                  <div className="min-w-0">
                    <h3 className="font-bold news-subhead mb-2">Night Routine</h3>
                    <p className="news-body">Works while you sleep, delivering visible improvements in weeks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">💫</span>
                  <div className="min-w-0">
                    <h3 className="font-bold news-subhead mb-2">Body Care</h3>
                    <p className="news-body">Targets age spots, crepey neck skin, and even dryness on arms or hands.</p>
                  </div>
                </div>
              </div>

              <p className="news-body mb-6 font-semibold max-w-[65ch]">
                👉 That means no more cluttered bathroom shelves, no more 5-step routines. Just one cream that does it all.
              </p>

              <div className="scarcity-alert mb-6">
                <p className="font-semibold mb-2">⏰ Limited Time: Special Editorial Pricing</p>
                <p className="text-sm">Our readers get exclusive access to discounted pricing - but only while supplies last.</p>
              </div>

              <div className="mb-6">
                <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                  See Before & After Photos →
                </a>
              </div>
            </div>
            {/* Media Mentions */}
            <section className="mb-8">
              <div className="max-w-2xl mx-auto text-center">
                <img
                  src="https://www.dropbox.com/scl/fi/cgx9mtxtk32oorvb3zmti/brag-bar.png?rlkey=xaemwoqabc4zuf8yint79h8v4&st=b2cq5bsi&dl=1"
                  alt="Vogue, Elle, InStyle, and OK! logos"
                  className="mx-auto"
                  loading="lazy"
                />
              </div>
            </section>
            {/* Clinical Results */}
            <section className="mb-8">
              <h2 className="news-headline text-3xl font-bold text-center text-red-600 mb-2">
                Clinical Before & After Results
              </h2>
              <p className="text-center text-news-muted mb-6">
                Independent clinical studies document the remarkable transformation achieved in just 28 days of use.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:1fr]">
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
                    className="border-2 border-red-600 rounded-lg bg-white flex flex-col h-full overflow-hidden"
                  >
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-red-600 mb-1">{item.title}</h3>
                      <p className="text-sm text-news-muted">{item.stat}</p>
                    </div>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                    <div className="p-2 text-center mt-auto">
                      <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded leading-tight">
                        Clinical Study Result
                        <span className="block text-[10px] font-normal">28-day treatment result</span>
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
            <a href={destinationUrl}>
              <img
                src={dermatologistRealistic}
                alt="Professional dermatologist examining skincare products in clinical setting"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                loading="lazy"
                width="1000"
                height="600"
              />
            </a>
              <p className="text-sm text-news-muted mt-2 italic">Dr. Sarah Mitchell examines the breakthrough peptide formula in her Beverly Hills clinic</p>

              {/* Mid-article CTA */}
              <div className="text-center mt-6 mb-8">
                <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                  ✅ Dermatologist Recommended - Order Now →
                </a>
              </div>
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
                <a href={destinationUrl} className="editorial-cta-large mt-6 block text-center w-full min-h-[48px] py-3">
                  Order Now →
                </a>
              </div>

              {/* Beauty Insider Alerts Widget */}
              <div className="sidebar-widget">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-red-600 text-lg">💡</span>
                    <h3 className="text-lg font-bold text-red-600">Beauty Insider Alerts</h3>
                  </div>
                  <p className="text-sm text-news-muted mb-4">
                    Get exclusive access to breakthrough beauty discoveries before they go viral!
                  </p>
                  <div className="klaviyo-form-TaTjsW"></div>
                  <p className="text-xs text-gray-500 mt-2">
                    Join 50,000+ beauty insiders. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              {/* Stock Alert Widget */}
              <div className="sidebar-widget">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-600 text-lg">⚠️</span>
                    <h3 className="text-lg font-bold text-orange-600">Stock Alert</h3>
                  </div>
                  <div className="text-red-600 font-semibold text-sm mb-1">📈 137 orders today</div>
                  <p className="text-sm text-news-muted mb-4">
                    Less than 200 units remaining for this month. 
                    New shipments delayed until next quarter.
                  </p>
                  <a 
                    href={destinationUrl} 
                    className="block w-full bg-red-600 text-white py-2 text-center rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
                  >
                    Order Before It's Gone →
                  </a>
                </div>
              </div>

              {/* Breaking News Widget */}
              <div className="sidebar-widget">
                <h3 className="news-subhead text-xl font-bold mb-4">🔥 Breaking Beauty News</h3>
                <div className="space-y-4 text-sm">
                  <div className="border-b pb-3">
                    <a href="https://www.beverlyhillsscoops.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-red-600">
                      Sephora Insider Reveals: This $15 Cream Outsells $300 Serums
                    </a>
                    <p className="text-news-muted text-xs mt-1">10 min ago</p>
                  </div>
                  <div className="border-b pb-3">
                    <a href="https://www.beverlyhillsscoops.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-red-600">
                      Beverly Hills Dermatologist: "I Recommend This Over Botox"
                    </a>
                    <p className="text-news-muted text-xs mt-1">22 min ago</p>
                  </div>
                  <div>
                    <a href="https://www.beverlyhillsscoops.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-red-600">
                      Lab Analysis: Why Peptides Are The New Anti-Aging Gold Standard
                    </a>
                    <p className="text-news-muted text-xs mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Articles */}
              <div className="sidebar-widget">
                <h3 className="news-subhead text-xl font-bold mb-6 text-red-700">More From Our Beauty Investigation</h3>
                
                {/* CaviArgan Article */}
                <a
                  href="https://beverlyhillsscoops.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/1554c539-cd88-45fd-a732-3a457ca6ea44.png"
                    alt="CaviArgan premium caviar and argan oil anti-aging cream"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-red-600">
                    SHOCKING: This $19 Caviar Cream Is Outselling $500 La Mer
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Celebrity aesthetician leaks the secret formula that A-listers have been hiding. Contains real caviar extract and pure argan oil...
                  </p>
                  <div className="text-xs text-red-600 font-semibold">TRENDING • 2 min read</div>
                </a>

                {/* Argan Oil Article */}
                <a
                  href="https://beverlyhillsscoops.com/argan"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
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

              <div className="sidebar-widget">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold">
                    Trending Now
                  </div>
                  <div className="p-4">
                    <img
                      src="/lovable-uploads/671dac0b-4492-4be8-ae3b-884fde280fc9.png"
                      alt="iDrotherapy Wrinkle Reducer cream"
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-bold text-base mb-2">iDrotherapy Wrinkle Reducer</h4>
                    <p className="text-sm text-news-muted mb-4">
                      The breakthrough formula dermatologists recommend
                    </p>
                    <a 
                      href={destinationUrl}
                      className="block w-full bg-red-600 text-white py-2 text-center rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm mb-2"
                    >
                      Check Availability →
                    </a>
                    <a 
                      href={destinationUrl}
                      className="block w-full bg-yellow-500 text-white py-2 text-center rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm flex items-center justify-center gap-1"
                    >
                      🔥 Flash Sale - 40% Off →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Sections - Mobile Optimized */}


        {/* Dramatic Results Section - Constrained Width */}
        <section className="w-full py-8 bg-gradient-to-b from-red-50 to-white">
          <div className="mobile-container">
            <div className="max-w-5xl mx-auto">
              <h2 className="news-headline font-bold text-center text-red-600 mb-6">
                Dramatic Results in Just 4 Weeks
              </h2>
              
              <div className="comparison-box max-w-4xl mx-auto">
                <div className="image-container text-center">
                  <a href={destinationUrl}>
                    <img 
                      src="/lovable-uploads/579730e5-27da-484a-8c7d-60a7043bf40c.png" 
                      alt="Before and after comparison showing dramatic reduction in fine lines, wrinkles, and skin texture improvement" 
                      className="w-full max-w-3xl mx-auto rounded-lg shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
                      loading="lazy"
                      width="800"
                      height="400"
                    />
                  </a>
                  <p className="text-sm text-news-muted italic mt-4 max-w-2xl mx-auto">
                    Real results: Dramatic improvement in fine lines and skin texture after 4 weeks of daily use
                  </p>
                </div>
                <div className="text-center mt-6">
                  <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                    ⚡ Limited Stock - Order Before It's Gone →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Customer Reviews Section - Full Width */}
        <section className="w-full py-12 bg-white">
          <div className="mobile-container">
            <h2 className="news-headline font-bold text-center text-black mb-4">
              Real Customer Reviews
            </h2>
            <p className="text-center text-news-muted mb-8 max-w-2xl mx-auto">
              See what our verified customers are saying about their iDrotherapy experience
            </p>
            
            <div className="grid gap-4 sm:gap-6 mobile-stack sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah M.",
                  info: "Age 42 • California",
                  quote: "I've tried every cream on the market. iDrotherapy is the first that actually made my husband ask if I had 'work done.' My laugh lines are practically gone!",
                  image: "https://idro.vouue.com/lovable-uploads/9530d609-ffde-4551-ae23-6229cc1d21f4.png"
                },
                {
                  name: "Jennifer R.",
                  info: "Age 38 • Texas",
                  quote: "Three weeks in and my co-workers keep asking what I'm using. My neck looks 10 years younger and my makeup goes on so much smoother now.",
                  image: "https://idro.vouue.com/lovable-uploads/7a13f339-f5ca-4551-a35e-a8ece21151e7.png"
                },
                {
                  name: "Lisa K.",
                  info: "Age 45 • New York",
                  quote: "This cream replaced my entire nighttime routine. I use it morning and night, and it's like I have new skin. The peptides really work!",
                  image: "https://idro.vouue.com/lovable-uploads/4d1b5466-0136-4052-9d86-4c4f902b9a11.png"
                },
                {
                  name: "Maria G.",
                  info: "Age 52 • Florida",
                  quote: "My dermatologist noticed the improvement immediately. She was shocked when I told her it wasn't prescription - she's now recommending it to patients!",
                  image: "https://idro.vouue.com/lovable-uploads/fb2adcf7-d948-4a38-bf2c-83c5e14960f9.png"
                },
                {
                  name: "Amanda T.",
                  info: "Age 35 • Illinois",
                  quote: "I was skeptical about the 'one cream for everything' claim, but it really does work on my eye area, neck, and face. Best skincare investment I've made.",
                  image: "https://idro.vouue.com/lovable-uploads/de927a92-871d-4d92-b61b-71f777c9bf6d.png"
                },
                {
                  name: "Rachel B.",
                  info: "Age 48 • Washington",
                  quote: "The texture is luxurious and it absorbs beautifully. After 6 weeks, my skin looks firmer and more radiant than it has in years. Already ordering my second jar!",
                  image: "https://idro.vouue.com/lovable-uploads/043d2e7e-6d08-4240-9e73-ddd439d79c0d.png"
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="border border-red-200 rounded-lg p-4 sm:p-6 bg-white shadow-sm flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={review.image}
                        alt={`${review.name} customer photo`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{review.name}</div>
                      <div className="text-xs text-news-muted">{review.info}</div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base flex-grow leading-relaxed">{review.quote}</p>
                  <div className="text-yellow-400 mt-4">★★★★★</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join The Beauty Revolution Section - Full Width */}
        <section className="w-full py-12 bg-gradient-to-b from-pink-50 to-white">
          <div className="mobile-container">
            <h2 className="news-headline font-bold text-center mb-8">
              Join The Beauty Revolution
            </h2>
            <p className="news-body text-center mb-8 max-w-3xl mx-auto max-w-[65ch]">
              Thousands of women worldwide have discovered the transformative power of iDrotherapy's revolutionary formula. See the confidence in their faces.
            </p>
            
            <div className="text-center mb-8">
              <a href={destinationUrl}>
                <img
                  src="https://idro.vouue.com/lovable-uploads/8da99380-b785-4a85-961c-2b5f761d611e.png"
                  alt="Collage of women holding iDrotherapy cream"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                  loading="lazy"
                  width="975"
                  height="199"
                />
              </a>
            </div>
            
            {/* The Results Speak For Themselves - Nested Section */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
              <h3 className="news-headline font-bold text-center mb-6">
                The Results Speak For Themselves
              </h3>
              <p className="news-body text-center mb-8 max-w-[65ch] mx-auto">
                These women represent just a fraction of our 50,000+ satisfied customers who have experienced the life-changing benefits of RenuV8® and Renovage® technology.
              </p>
              <div className="grid mobile-stack sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">94%</p>
                  <p className="text-sm text-news-muted">Visible improvement in 2 weeks</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">98%</p>
                  <p className="text-sm text-news-muted">Would recommend to friends</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">91%</p>
                  <p className="text-sm text-news-muted">Plan to repurchase</p>
                </div>
              </div>
            </div>

            {/* Woman with Product Image */}
            <div className="text-center mt-12">
              <a href={destinationUrl}>
                <img
                  src="/lovable-uploads/ca66e615-6b53-470a-b542-1020dc49a3d8.png"
                  alt="Happy woman proudly displaying her iDrotherapy Wrinkle Reducer cream with confident smile"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                  loading="lazy"
                  width="600"
                  height="700"
                />
              </a>
              <p className="text-sm text-news-muted mt-4 italic max-w-md mx-auto">
                Sarah, 34, says iDrotherapy transformed her confidence and simplified her entire skincare routine
              </p>
              
              <div className="mt-8">
                <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                  🌟 Transform Your Skin Today →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's Different Section - Full Width */}
        <section className="w-full py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="mobile-container">
            <h2 className="news-headline font-bold text-center mb-8">
              Why It's Different From Everything Else
            </h2>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="news-body mb-6 max-w-[65ch] mx-auto">
                Most beauty brands split their formulas: one for eyes, one for the neck, one for the face, one for spots.
              </p>

              <p className="news-body mb-6 max-w-[65ch] mx-auto">
                <strong>iDrotherapy doesn't play that game.</strong>
              </p>

              <p className="news-body mb-8 max-w-[65ch] mx-auto">
                Their breakthrough peptide complex works on a cellular level to address aging wherever it appears—whether that's crow's feet, forehead lines, or even the delicate skin on your hands.
              </p>

              <div className="scarcity-alert mb-8 max-w-md mx-auto">
                <p className="font-semibold mb-2">🚨 Flash Sale Alert</p>
                <p className="text-sm">Limited-time reader discount expires at midnight. Stock selling out fast.</p>
              </div>

              <div className="text-center mb-8">
                <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                  Claim Flash Discount →
                </a>
              </div>

              {/* Customer Testimonial Collage */}
              <div className="text-center mt-12">
                <img
                  src="/lovable-uploads/3e4a304c-08b1-466b-b683-fe5980f99c11.png"
                  alt="Happy customers displaying their iDrotherapy cream with radiant, youthful skin results"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                  loading="lazy"
                  width="1200"
                  height="300"
                />
                <p className="text-sm text-news-muted mt-4 italic max-w-2xl mx-auto">
                  Real customers sharing their transformation stories with iDrotherapy's revolutionary anti-aging formula
                </p>
              </div>

              {/* Email Subscription Section */}
              <div className="bg-red-50 rounded-lg p-6 mt-12 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-center text-red-600 mb-4">
                  Get Exclusive Beauty Tips & Special Offers
                </h3>
                <p className="text-center text-news-muted mb-6">
                  Join 50,000+ women receiving insider secrets and exclusive discounts on breakthrough skincare
                </p>
                <div className="klaviyo-form-TaTjsW"></div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-4 pt-4 border-t border-news-border mobile-container">
          <p className="text-xs text-news-muted text-center max-w-[65ch] mx-auto">
            <strong>Editorial Disclaimer:</strong> This article is for informational purposes and represents the editorial opinion of Fox Lifestyle. Individual results may vary. This content has not been evaluated by the FDA. The product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new skincare regimen.
          </p>
        </div>

        {/* Footer Links */}
        <footer className="mt-4 text-center text-xs text-news-muted mobile-container">
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
          href={destinationUrl}
          className="fixed bottom-0 left-0 right-0 z-50 block w-full text-center text-white font-semibold py-3 bg-[#DC3636] min-h-[48px] flex items-center justify-center"
        >
          ORDER NOW - Up to 75% OFF + FREE Gua sha set! ($70 value)
        </a>
      </div>
    </div>
  );
};

export default Index;