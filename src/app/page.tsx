import React from 'react';

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#fbfaee]/80 backdrop-blur-xl transition-all duration-300">
        <div className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto relative">

          {/* Left: Logo */}
          <div className="absolute left-8 z-10 flex items-center h-full pointer-events-none">
            <img src="/logo_transparent.png" alt="Chai With Us Logo" className="w-[130px] md:w-[180px] h-auto object-contain origin-left pointer-events-auto -mt-1.5" />
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-8 z-10">
            <a className="text-[#894d0d] border-b border-[#894d0d] pb-1 font-label text-base italic" href="#">Shop</a>
            <a className="text-[#1A1A1A] hover:text-[#894d0d] transition-colors font-label text-base italic" href="#">About</a>
            <a className="text-[#1A1A1A] hover:text-[#894d0d] transition-colors font-label text-base italic" href="#">Learn</a>
            <a className="text-[#1A1A1A] hover:text-[#894d0d] transition-colors font-label text-base italic" href="#">Subscription</a>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6 z-10 ml-auto">
            <button className="hover:opacity-70 transition-opacity duration-300 active:scale-95">
              <span className="material-symbols-outlined text-primary" data-icon="search">search</span>
            </button>
            <button className="hover:opacity-70 transition-opacity duration-300 active:scale-95">
              <span className="material-symbols-outlined text-primary" data-icon="person">person</span>
            </button>
            <button className="hover:opacity-70 transition-opacity duration-300 active:scale-95">
              <span className="material-symbols-outlined text-primary" data-icon="shopping_bag">shopping_bag</span>
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section className="relative h-[calc(100vh-5rem)] mt-19.5 flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/chaiWithUsLandingPage.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-surface/60 to-transparent"></div>
          </div>
          <div className="relative z-10 px-12 max-w-screen-2xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-7xl font-headline italic leading-[1.1] text-[#00000] mb-6">
                For the Community, <br />by the Community.
              </h1>
              <p className="text-2xl text-[#000000] font-body mb-10 italic">
                Rooted in tradition, crafted for the modern palate. Experience the warmth of heritage in every aromatic sip.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Signature Blend */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-[4/5] bg-surface-container-low">
                <img className="w-full h-full object-cover" alt="Chai With Us Signature Blend product shot" src="/chaiwus-productshot.png" />
              </div>
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-primary font-label italic text-sm">Featured Blend</span>
                  <h2 className="text-5xl font-headline text-on-surface leading-tight italic">
                    The Signature Blend: <br />Bold. Spicy. Balanced.
                  </h2>
                </div>
                <p className="text-on-surface-variant text-xl leading-relaxed max-w-lg italic">
                  Our flagship recipe is a soulful orchestration of hand-picked Assam leaves and mountain-grown spices. A ritual that awakens the senses and grounds the spirit.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-2 bg-surface-variant/50 text-secondary rounded-full font-label italic text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Cardamom
                  </div>
                  <div className="px-6 py-2 bg-surface-variant/50 text-secondary rounded-full font-label italic text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Cinnamon
                  </div>
                  <div className="px-6 py-2 bg-surface-variant/50 text-secondary rounded-full font-label italic text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Black Tea
                  </div>
                </div>
                <button className="group flex items-center gap-4 text-primary font-label italic text-lg border-b border-primary/20 pb-2 hover:border-primary transition-all">
                  View Product Details
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Category Grid (Bento Style) */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6 h-[700px]">
              <a href="https://chai-withus.com/products/signature-chai-blend" className="relative group overflow-hidden block cursor-pointer bg-[#172119]">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Chai With Us Signature Shot" src="/chaiwus-signatureshot.png" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-4xl font-headline text-white mb-2 italic">Signature Chai</h3>
                  <p className="text-white/80 font-label text-base italic">Explore Blends</p>
                </div>
              </a>
              <a href="https://chai-withus.com/products/k2-tee" className="relative group overflow-hidden block cursor-pointer bg-[#172119]">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Chai With Us Tee Shirt" src="/chaiWithUsTeeShirt.png" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-4xl font-headline text-white mb-2 italic">Merch</h3>
                  <p className="text-white/80 font-label text-base italic">Shop Accessories</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Section 6: Social Proof */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="w-full">
            <img className="w-full h-auto object-cover" alt="Customer Testimonial" src="/chaiWithUsFrame.png" />
          </div>
        </section>

        {/* Section 5: Educational Hub */}
        <section className="py-24 bg-surface-container-highest/30">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-5xl font-headline text-on-surface mb-4 italic">Master the Pour</h2>
                <p className="text-on-surface-variant text-xl italic">The perfect chai is a delicate balance of heat, time, and intention. Learn the traditional methods of brewing that elevate a simple drink into a sanctuary.</p>
              </div>
              <button className="text-primary font-label italic text-lg border-b border-primary/40 pb-1 hover:border-primary transition-colors">View All Rituals</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6 group cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Close up of water boiling with loose tea leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-SGTMs7dFpJSOlTKNJsmeGU1solKT9_1WzNQ2rgzgtD3Pl6a3bIr24HW7WLNYz7LzgGjngDiUNM3bc8N-iQj3Slb37__1jkZLYIuNiUAWuQmGf7BJss7e1Tax-Q6Lhzrb1R4dschiH9eV5IGCrwa-i-kNamYhK451jDbV7CYGNMFPW3X_wyf3e7N7-M2jZY7MSH-nrYPZaiyiHbdXQGn_uGUilmeKDCmn_25bWKQmEikKsiuu4DMmOcrHyASmp235c6UXzw-RjoaQ" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-headline italic group-hover:text-primary transition-colors">The Temperature Secret</h4>
                  <p className="text-lg text-on-surface-variant leading-relaxed italic">Discover why boiling your milk and tea together creates a deeper, more robust flavor profile.</p>
                </div>
              </div>
              <div className="space-y-6 group cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Chai being aerated by pouring from a height" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPdBCACDoy-N_ZPzTjmKaDtWrfLW5LTQb-duPGuDHRNZHIQ69CCKjcRjIAmCPMYwpLVfzRNQKNOebmOWhWaIqRezaE8EIlKAdl21x4GvWC7E7YKwsWmlZoKgMnRZy8PVQoZ-XK1hiACHvXvXnSg9TW6yQqo_7ejOaUZPcMuBtsPz5okqKexSdRIogfhJ1SeviCtoNt1NVYkDdCv1T3be_qK2UgBlvuqYWBT07Zu0t__702EZQDzvghlf2o6UCcnFHZwobA-9CY9sUx" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-headline italic group-hover:text-primary transition-colors">Aeration &amp; Texture</h4>
                  <p className="text-lg text-on-surface-variant leading-relaxed italic">The art of &apos;pulling&apos; chai to create that signature frothy layer and cool the tea to the perfect temperature.</p>
                </div>
              </div>
              <div className="space-y-6 group cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Mortar and pestle with crushed cardamom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOPbi3FBGmxHcR3UOJ4jRtgBSXKQ0gyeIi6-3p9z05yoSpn3HDtoMUOz3irglDUXm3bKUMoubaLVPvrY7uzniZiwpDCBHlvHMWZ9X6o1aLRxUrsBdhwZIQFpudO8dxv02W2IYAuQGiZWOKcVc1d9ZKYaBnPs1u8ryPr_m3yMFyAgJCMgm6xj0PcEqwDNctT3ZSVB6iCwCjpCZ40q2fEOTiq_2TITZ9Tmp2f_Kwbdiijk3UKpd7qBjhejBSvLjrqhjgfPdw51Giks5D" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-headline italic group-hover:text-primary transition-colors">The Mortar &amp; Pestle</h4>
                  <p className="text-lg text-on-surface-variant leading-relaxed italic">Why hand-crushing spices right before brewing unlocks essential oils and aromatics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Brand Narrative */}
        <section className="py-32 bg-surface">
          <div className="max-w-4xl mx-auto px-12 text-center">
            <span className="text-primary font-label italic text-sm mb-8 block">Our Ethos</span>
            <h2 className="text-6xl font-headline italic text-on-surface mb-12">Beyond the Cup</h2>
            <div className="space-y-8 text-2xl leading-relaxed text-on-surface-variant font-body italic">
              <p>We believe that tea is more than a beverage; it is a moment of stillness in a frantic world. Every spice in our blend is sourced through direct-trade relationships with small-scale farmers who treat the earth with the same reverence we do.</p>
              <p>From the high-altitude gardens of Assam to the spice markets of Kerala, we track every leaf. This is craftsmanship you can taste, and transparency you can trust.</p>
            </div>
            <div className="mt-16 pt-16 border-t border-outline-variant/20 grid grid-cols-3 gap-8">
              <div>
                <div className="text-primary text-4xl font-headline mb-2 italic">100%</div>
                <div className="text-on-surface-variant font-label text-xs italic">Organic Sourcing</div>
              </div>
              <div>
                <div className="text-primary text-4xl font-headline mb-2 italic">Direct</div>
                <div className="text-on-surface-variant font-label text-xs italic">Trade Relationships</div>
              </div>
              <div>
                <div className="text-primary text-4xl font-headline mb-2 italic">Pure</div>
                <div className="text-on-surface-variant font-label text-xs italic">Whole Spices</div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 8: Instagram Community */}
        <section className="py-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-headline italic">Community Rituals</h2>
              <p className="font-label text-base italic text-on-surface-variant">Tag @ChaiWithUs to be featured</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              <div className="aspect-square relative group cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="User lifestyle photo with chai" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUO2YxlLYX3eMAY-Axko_J8iprjkrAXhhEuVAs9fD0C_q3fq1aU2TGfszjqQJ2ijlg4cYz-S5n5VNnagKBqHFjJHU4o02vts5tQcopXoGeuCbjEykU3YKqhBbcd4dEzFWNIGUHa-zB3pySYHhhA8fPfwyeac8Ut73jl63X1IK6NoRLsn1pzqfW4LF-6lu4XGGvOrYsF3cogWB1dM-zOhycyuqusPhTIJ1Kp4EuF16EwRMa6eGrgS92s1UZiGd4onO41mUAVFFseBQC" />
              </div>
              <div className="aspect-square relative group cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Aesthetic chai morning routine" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_UYZMc8PXEMmOT-i5dqYDO45j0yURn61IEh_6rAT3vgwUrMrRI2fR4yGHYP3PSf9HdmcayA-Pw4dv1I8XqiYIGUAERK1VhYpzXOwwgEXZxBKMo_IwZtPWbpVc38pyMCSuFsMTNvhx4Zkv7ANazMyM6Krc-57nMCjxmMC_M60kNkt6Sk3rNOkriQ_HB_myteAk8DjBJVJurnKl-0LqFOLfFo14qX3elyzDWqHnJG1TNVTgO9s_Ay-hBxrAjneaiZbbUq48sHVlNJK1" />
              </div>
              <div className="aspect-square relative group cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Chai and book aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVMEZQKPT4I8jNb60rdrVDYNv1EfM81e8PhGwN_OZxs7mySZ3LrJfASow4GCkx4172aCAHo_7iTOG_XEDmZsGEJBkyCsNDjswgLnvQ_5GhFwWjHjkAENX_40K4AwumDRl2PPJHq8RxIJAhXbDy4JLB-cjhKzciyXHm-pr34pGbB0vPllnLtI00Ys3YN4AgwbEFnfqZ0Uey7c_OsIjkqZQAMcAUK0Jdns1IazaqJrEa1y9jBwxAoHmf4zHz5nw9JlLIhshyD5n9rrlQ" />
              </div>
              <div className="aspect-square relative group cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Ingredients for chai" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlulPBVSSfzyYiYxc4DR6UuGPSla0Eg11Si73M5FMVCY-VP2hRP0a0UFojJ9ERRzfI2IPevZH6j33QgwwpUv1Opd6huP4qgEeqjnA-2jUYE_wrwUVglhkDq1e5bmiGYbHcGnkrKyLhw99l5K1qzNJUlQCvI4SWh5pOBsbAGjJ4IrkahhaQccK7YJeXLS_sWZYfkXMTTMpCVFqTioa5h83chDjR0nfe7J_qUa4FmD2hhkKj_EayXGILjPiKYgv9jtnjNJdFLW2ejO9T" />
              </div>
              <div className="aspect-square relative group cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Steaming mug of tea" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPzyHEGBwwbnHq-TP8RtmBmP-6iqaDb9yj4aOa2Vy-QlBNe-zq0JbGSpxT5ievLfLAHF4NbB1M8MXFkUe2H9_l4S4cxhaibaJJ960pwzI6AGjAyKR4K9URGRTitHZqWzOU1KL2ChvB0tph17o13_fHMy3Qcq5dL6omKLJC2TrvHs-LBLM6kfFHelSEsh37BqCmAmfX6MJUAuLOqUv1Qj9f_YYEwM7BosBYRvCnQi5aQeWfQUn9Rv8Oc_CWPGW-hYkal5VjhW93Z3uZ" />
              </div>
              <div className="aspect-square relative group cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Cozy chai drinking setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHEgADP6x_nXxiHt4blEtkH1Z2CaPff_JngYaEM9jrETfLAYcx78mXtaPlk6KBlGSNOBROIvBhmSBXkuNFNILlgmX7vPW_S34Vrj0wS19YugKQSB2Ry8DiKB9dl48gfQGUG28MzUop0uFhdPckcNpM9IIUEBm7eXwdgeFIh_4H-zJHukTcUHW1Mnqf5bHM3wmDr7Ew-LwJwVC3Zs-zx5S3g2OWl3_46PuPtx8-Fo8cMD4zgHeAHq0_u8igFzM0Uex84DOiYF_W8GG2" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
          <div className="space-y-6">
            <span className="text-2xl font-headline italic text-[#1A1A1A]">Chai With Us</span>
            <p className="text-[#1A1A1A]/60 font-body text-base leading-relaxed italic">Crafting intentional moments through the timeless ritual of tea. Join us in the slow movement.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer" data-icon="public">public</span>
              <span className="material-symbols-outlined text-primary cursor-pointer" data-icon="share">share</span>
              <span className="material-symbols-outlined text-primary cursor-pointer" data-icon="mail">mail</span>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="font-label text-base italic text-primary">Explore</h5>
            <ul className="space-y-3">
              <li><a className="text-[#1A1A1A]/60 font-label text-base italic hover:text-[#894d0d] transition-colors" href="#">Journal</a></li>
              <li><a className="text-[#1A1A1A]/60 font-label text-base italic hover:text-[#894d0d] transition-colors" href="#">Wholesale</a></li>
              <li><a className="text-[#1A1A1A]/60 font-label text-base italic hover:text-[#894d0d] transition-colors" href="#">Shipping &amp; Returns</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-label text-base italic text-primary">Support</h5>
            <ul className="space-y-3">
              <li><a className="text-[#1A1A1A]/60 font-label text-base italic hover:text-[#894d0d] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-[#1A1A1A]/60 font-label text-base italic hover:text-[#894d0d] transition-colors" href="#">Contact Us</a></li>
              <li><a className="text-[#1A1A1A]/60 font-label text-base italic hover:text-[#894d0d] transition-colors" href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-label text-base italic text-primary">Newsletter</h5>
            <p className="text-[#1A1A1A]/60 text-sm font-body italic">Join our circle for seasonal recipes and first access to new rituals.</p>
            <div className="flex">
              <input className="bg-transparent border-b border-outline-variant py-2 w-full focus:outline-none focus:border-primary transition-colors text-base font-body italic" placeholder="Email Address" type="email" />
              <button className="border-b border-outline-variant px-4 hover:text-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-outline-variant/10 pt-8">
          <span className="text-[#1A1A1A]/60 font-label text-xs italic">© 2024 Chai With Us. The Editorial Ritual. All rights reserved.</span>
          <div className="flex gap-8 text-xs italic text-[#1A1A1A]/40 font-label">
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
}
