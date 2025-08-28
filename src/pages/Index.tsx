import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-clinical-lab.jpg";
import dermatologistRealistic from "@/assets/dermatologist-realistic.jpg";

interface IndexProps {
  destinationUrl?: string;
}

const Index = ({ destinationUrl = "https://www.idrotherapylove.com" }: IndexProps) => {
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

            {/* Morning Night Section - Left Column */}
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
                <a href={destinationUrl} className="editorial-cta-success">
                  ✅ Dermatologist Recommended - Order Now →
                </a>
              </div>
            </div>

            {/* Morning Night Section */}
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

            {/* Science Section */}
            <div className="mb-8">
              <h2 className="news-headline font-bold mb-4">The Science Behind the "Miracle"</h2>
              
              <p className="news-body mb-4 max-w-[65ch]">
                What makes iDrotherapy different isn't just one ingredient—it's the synergy of clinically-proven peptides working together:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-blue-800 mb-2">Matrixyl 3000</h3>
                  <p className="text-sm text-blue-700">Boosts collagen production by up to 117%, restoring skin's structural support</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-green-800 mb-2">Renovage</h3>
                  <p className="text-sm text-green-700">Extends cell lifespan, protecting against environmental damage and premature aging</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <h3 className="font-bold text-purple-800 mb-2">Hyaluronic Acid Complex</h3>
                  <p className="text-sm text-purple-700">Delivers deep hydration, plumping fine lines from within</p>
                </div>
              </div>

              <div className="pull-quote">
                "This combination creates a 'cellular reset' effect we've never seen before"
                <div className="text-sm text-news-muted mt-2 not-italic">– Dr. Jennifer Adams, Dermatological Research Institute</div>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="mb-8">
              <h2 className="news-headline font-bold mb-6">Real Women Share Their Results</h2>
              
              <div className="space-y-6">
                {[
                  {
                    name: "Sarah M.",
                    age: "Age 52",
                    location: "Beverly Hills, CA",
                    review: "I was skeptical at first, but after 3 weeks, my husband asked if I had work done! My crow's feet are practically gone, and my neck looks 10 years younger.",
                    rating: "★★★★★",
                    image: "https://idro.vouue.com/lovable-uploads/9530d609-ffde-4551-ae23-6229cc1d21f4.png"
                  },
                  {
                    name: "Jennifer K.",
                    age: "Age 47",
                    location: "Miami, FL",
                    review: "This cream replaced my entire nighttime routine. I use it on my face, neck, and even my hands. People keep asking what I'm doing differently!",
                    rating: "★★★★★",
                    image: "https://idro.vouue.com/lovable-uploads/7a13f339-f5ca-4551-a35e-a8ece21151e7.png"
                  },
                  {
                    name: "Lisa R.",
                    age: "Age 43",
                    location: "Austin, TX",
                    review: "Finally, a cream that doesn't irritate my sensitive skin! The texture is luxurious, and I wake up with the most radiant glow.",
                    rating: "★★★★★",
                    image: "https://idro.vouue.com/lovable-uploads/4d1b5466-0136-4052-9d86-4c4f902b9a11.png"
                  },
                  {
                    name: "Maria S.",
                    age: "Age 38",
                    location: "Phoenix, AZ",
                    review: "I've tried everything from drugstore to department store brands. Nothing compares to iDrotherapy. It's like having a spa facial every night.",
                    rating: "★★★★★",
                    image: "https://idro.vouue.com/lovable-uploads/fb2adcf7-d948-4a38-bf2c-83c5e14960f9.png"
                  },
                  {
                    name: "Amanda T.",
                    age: "Age 55",
                    location: "Seattle, WA",
                    review: "My dermatologist noticed the difference and asked what I was using. She was impressed when I told her about the peptide complex!",
                    rating: "★★★★★",
                    image: "https://idro.vouue.com/lovable-uploads/de927a92-871d-4d92-b61b-71f777c9bf6d.png"
                  },
                  {
                    name: "Rachel B.",
                    age: "Age 49",
                    location: "Boston, MA",
                    review: "The before and after photos speak for themselves. I look like I did 5 years ago, and I feel so much more confident!",
                    rating: "★★★★★",
                    image: "https://idro.vouue.com/lovable-uploads/043d2e7e-6d08-4240-9e73-ddd439d79c0d.png"
                  }
                ].map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={review.image} 
                          alt={`${review.name} customer photo`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-news-text">{review.name}</h3>
                          <span className="text-sm text-news-muted">{review.age}</span>
                          <span className="text-sm text-news-muted">• {review.location}</span>
                        </div>
                        <div className="text-yellow-500 mb-2">{review.rating}</div>
                        <p className="text-news-text italic">"{review.review}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a href={destinationUrl} className="editorial-cta-large block w-full min-h-[48px] py-3 text-center md:inline-flex md:w-auto">
                  Join Thousands of Happy Customers →
                </a>
              </div>
            </div>

            {/* How to Use */}
            <div className="mb-8">
              <h2 className="news-headline font-bold mb-4">How to Use iDrotherapy for Best Results</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <span className="text-2xl flex-shrink-0">1️⃣</span>
                  <div>
                    <h3 className="font-bold mb-1">Cleanse</h3>
                    <p className="text-sm">Start with clean, dry skin</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <span className="text-2xl flex-shrink-0">2️⃣</span>
                  <div>
                    <h3 className="font-bold mb-1">Apply</h3>
                    <p className="text-sm">Use a small amount on face, neck, and any problem areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg">
                  <span className="text-2xl flex-shrink-0">3️⃣</span>
                  <div>
                    <h3 className="font-bold mb-1">Massage</h3>
                    <p className="text-sm">Gently massage in upward motions until absorbed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                  <span className="text-2xl flex-shrink-0">4️⃣</span>
                  <div>
                    <h3 className="font-bold mb-1">Results</h3>
                    <p className="text-sm">Use morning and night for visible results in 2-3 weeks</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">💡 Pro Tip: Start with once daily if you have sensitive skin, then increase to twice daily as your skin adjusts.</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="news-headline font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "Is iDrotherapy suitable for sensitive skin?",
                    a: "Yes! Unlike retinol-based products, iDrotherapy uses gentle peptides that won't cause irritation or redness."
                  },
                  {
                    q: "How long before I see results?",
                    a: "Most users notice improved hydration within days, with visible wrinkle reduction appearing in 2-3 weeks of consistent use."
                  },
                  {
                    q: "Can I use it with other skincare products?",
                    a: "Absolutely! iDrotherapy plays well with other products, though many users find they can simplify their routine significantly."
                  },
                  {
                    q: "Is there a money-back guarantee?",
                    a: "Yes, iDrotherapy comes with a 60-day satisfaction guarantee. If you're not completely happy, return it for a full refund."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-news-text mb-2">Q: {faq.q}</h3>
                    <p className="text-news-muted">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mb-8">
              <div className="bg-red-600 text-white p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-2">⚠️ LIMITED TIME OFFER</h3>
                <p className="mb-4">Special pricing for our readers - but inventory is running low!</p>
                <a href={destinationUrl} className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
                  Claim Your Discount Now
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              
              {/* Email Capture */}
              <div className="sidebar-box">
                <h3 className="sidebar-title">Get Beauty Insider Updates</h3>
                <p className="sidebar-text mb-4">Be the first to know about breakthrough skincare discoveries</p>
                <div className="klaviyo-form-TaTjsW"></div>
              </div>

              {/* Product Showcase */}
              <div className="sidebar-box">
                <h3 className="sidebar-title">Featured Product</h3>
                <a href={destinationUrl} className="block">
                  <img 
                    src="/lovable-uploads/579730e5-27da-484a-8c7d-60a7043bf40c.png" 
                    alt="iDrotherapy Wrinkle Reducer Cream jar with elegant packaging" 
                    className="w-full h-auto rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </a>
                <p className="text-sm text-news-muted mt-2 text-center">Click to learn more</p>
                
                <div className="mt-4">
                  <a href={destinationUrl} className="sidebar-cta">
                    Order Your Jar Today
                  </a>
                </div>
              </div>

              {/* Social Proof */}
              <div className="sidebar-box">
                <h3 className="sidebar-title">What People Are Saying</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="text-yellow-500 mb-1">★★★★★</div>
                    <p className="italic">"Game changer for my skincare routine!"</p>
                    <p className="text-news-muted mt-1">- verified buyer</p>
                  </div>
                  <div className="text-sm">
                    <div className="text-yellow-500 mb-1">★★★★★</div>
                    <p className="italic">"My wrinkles are practically gone in 3 weeks."</p>
                    <p className="text-news-muted mt-1">- verified buyer</p>
                  </div>
                  <div className="text-sm">
                    <div className="text-yellow-500 mb-1">★★★★★</div>
                    <p className="italic">"Finally found something that actually works!"</p>
                    <p className="text-news-muted mt-1">- verified buyer</p>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="sidebar-box">
                <h3 className="sidebar-title">Recent Orders ⚡</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Jennifer M. - California</span>
                    <span className="text-green-600">2 min ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sarah L. - Texas</span>
                    <span className="text-green-600">5 min ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maria K. - Florida</span>
                    <span className="text-green-600">8 min ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Linda R. - New York</span>
                    <span className="text-green-600">12 min ago</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="sidebar-box">
                <h3 className="sidebar-title">Beauty Breakthrough Newsletter</h3>
                <p className="sidebar-text mb-4">Get exclusive access to the latest anti-aging discoveries</p>
                <div className="klaviyo-form-TaTjsW"></div>
              </div>

              {/* Customer Photos */}
              <div className="sidebar-box">
                <h3 className="sidebar-title">Customer Results</h3>
                <a href={destinationUrl}>
                  <img 
                    src="/lovable-uploads/3e4a304c-08b1-466b-b683-fe5980f99c11.png" 
                    alt="Before and after results showing dramatic skin improvement with iDrotherapy cream" 
                    className="w-full h-auto rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                    loading="lazy"
                    width="400"
                    height="600"
                  />
                </a>
                <p className="text-sm text-news-muted mt-2 text-center italic">Real customer results in 28 days</p>
                
                <div className="mt-4">
                  <a href={destinationUrl} className="sidebar-cta">
                    See Your Results →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 mt-16">
        <div className="mobile-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Skin?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of women who've discovered the power of iDrotherapy</p>
          <a href={destinationUrl} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors inline-block">
            Order Your Breakthrough Cream Now
          </a>
          <p className="text-sm mt-4 opacity-75">60-day money-back guarantee • Free shipping on all orders</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;