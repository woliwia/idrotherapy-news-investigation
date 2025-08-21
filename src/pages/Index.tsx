import heroImage from "@/assets/hero-clinical-lab.jpg";
import productImage from "@/assets/product-main.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import dermatologistImage from "@/assets/dermatologist-expert.jpg";
import womanApplyingImage from "@/assets/woman-applying-cream.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Breaking News Header */}
      <div className="bg-breaking-red text-white py-2 px-4">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wide">BREAKING NEWS</span>
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
              className="w-full h-auto rounded-lg shadow-lg"
              fetchPriority="high"
            />
            <p className="text-sm text-news-muted mt-2 italic">Clinical researchers examine the breakthrough peptide formula that's revolutionizing skincare routines nationwide</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
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
                <a href="#order" className="editorial-cta">
                  Editor's Pick: Try iDrotherapy Cream Here →
                </a>
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
            <div className="mb-8">
              <img 
                src={productImage} 
                alt="iDrotherapy Cream luxury jar on marble surface" 
                className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              <p className="text-sm text-news-muted mt-2 italic text-center">The breakthrough iDrotherapy Cream that's selling out nationwide</p>
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

              <div className="pull-quote">
                "Think of it as retinol's younger, smarter, gentler sibling"
                <div className="text-sm text-news-muted mt-2">– Leading Cosmetic Chemist</div>
              </div>

              <p className="news-body text-lg mb-4">
                The result? Skin that looks visibly younger, firmer, and more radiant—without the irritation.
              </p>
            </div>

            {/* Dermatologist Image */}
            <div className="mb-8">
              <img 
                src={dermatologistImage} 
                alt="Professional dermatologist examining skincare products in clinical setting" 
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              <p className="text-sm text-news-muted mt-2 italic">Dr. Sarah Mitchell examines the breakthrough peptide formula in her Beverly Hills clinic</p>
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

              <div className="editorial-cta inline-block mb-6">
                <a href="#order" className="editorial-cta">
                  See Before & After Photos →
                </a>
              </div>
            </div>

            {/* Before After Image */}
            <div className="mb-8">
              <img 
                src={beforeAfterImage} 
                alt="Before and after comparison showing dramatic skin improvement" 
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              <p className="text-sm text-news-muted mt-2 italic">Clinical documentation shows dramatic improvements in skin texture and firmness after 4 weeks of use</p>
            </div>

            {/* Real Women Section */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold mb-4">Real Women Are Raving</h2>
              
              <div className="space-y-6 mb-8">
                <div className="testimonial-card">
                  <p className="text-lg mb-2">💬 "I was skeptical, but within 2 weeks, my under-eye circles faded and my skin felt plumper. I actually stopped buying my $150 serum."</p>
                  <p className="text-sm text-news-muted">– Susan, 52</p>
                </div>
                
                <div className="testimonial-card">
                  <p className="text-lg mb-2">💬 "My neck lines were deep and noticeable. After a month with iDrotherapy, they're barely visible. This cream is my holy grail."</p>
                  <p className="text-sm text-news-muted">– Maria, 48</p>
                </div>
                
                <div className="testimonial-card">
                  <p className="text-lg mb-2">💬 "It's like Photoshop in a jar. I use it morning and night and my skin has never looked more even."</p>
                  <p className="text-sm text-news-muted">– Claire, 56</p>
                </div>
              </div>
            </div>

            {/* Woman Applying Image */}
            <div className="mb-8">
              <img 
                src={womanApplyingImage} 
                alt="Elegant mature woman applying iDrotherapy cream with confidence" 
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              <p className="text-sm text-news-muted mt-2 italic">Maria, 52, credits iDrotherapy with transforming her confidence and simplifying her skincare routine</p>
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

              <div className="text-center">
                <a href="#order" className="editorial-cta text-lg px-8 py-4">
                  👉 Click here to claim your jar of iDrotherapy before stock runs out
                </a>
              </div>

              <p className="news-body text-lg mt-6 text-center font-semibold">
                Don't wait—your younger-looking skin could start today.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            
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

            {/* Product Image Widget */}
            <div className="sidebar-widget text-center">
              <div className="editor-pick mb-4">Trending Now</div>
              <img 
                src={productImage} 
                alt="iDrotherapy Cream product" 
                className="w-full h-auto rounded-lg shadow-md mb-4"
                loading="lazy"
              />
              <h4 className="font-bold mb-2">iDrotherapy Cream</h4>
              <p className="text-sm text-news-muted mb-4">The breakthrough formula dermatologists recommend</p>
              <a href="#order" className="editorial-cta w-full justify-center">
                Check Availability →
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
              <p className="text-sm mb-4">Less than 200 units remaining for this month. New shipments delayed until next quarter.</p>
              <a href="#order" className="editorial-cta bg-red-600 hover:bg-red-700 w-full justify-center">
                Order Before It's Gone →
              </a>
            </div>

          </div>
        </div>

        {/* Final Order Section */}
        <div id="order" className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="news-headline text-4xl font-bold mb-4">Where to Buy iDrotherapy Cream Before It's Gone</h2>
          <p className="news-body text-xl mb-6">Exclusive online availability - Limited to 2 jars per customer</p>
          
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <img 
              src={productImage} 
              alt="iDrotherapy Cream - Order now" 
              className="w-32 h-32 mx-auto mb-4 rounded-lg"
              loading="lazy"
            />
            <h3 className="text-xl font-bold mb-2">iDrotherapy Cream</h3>
            <p className="text-lg font-semibold text-blue-600 mb-4">Special Editorial Price</p>
            <a href="#" className="editorial-cta text-xl px-8 py-4 w-full justify-center">
              CLAIM YOUR JAR NOW →
            </a>
            <p className="text-xs text-news-muted mt-4">*This editorial pricing is available for a limited time only</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-news-border">
          <p className="text-xs text-news-muted text-center">
            <strong>Editorial Disclaimer:</strong> This article is for informational purposes and represents the editorial opinion of Fox Lifestyle. Individual results may vary. This content has not been evaluated by the FDA. The product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new skincare regimen.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Index;