export default function Portfolio() {
    return (
        <main className="flex-grow">
            {/* Hero Header */}
            <header className="max-w-7xl mx-auto px-8 py-16 md:py-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-label text-sm uppercase tracking-widest mb-4 block">Visual Archive</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                            TECHNICAL <span className="text-primary">AUTEUR.</span>
                        </h1>
                        <p className="text-lg text-on-surface-variant max-w-lg">
                            Exploring the intersection of cinematic atmosphere and engineering precision. A curated collection of moments captured across the globe.
                        </p>
                    </div>

                </div>
            </header>

            {/* Portfolio Bento Grid */}
            <section className="max-w-7xl mx-auto px-8 pb-24">
                <div className="gallery-grid gap-4">
                    {/* Portrait Item */}
                    <div className="item-tall relative overflow-hidden rounded-xl image-reveal group">
                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Person standing in a field in front of a building" src="/portfolio-1.jpg" alt="Portrait" />


                    </div>
                    {/* Street Item */}
                    <div className="item-wide relative overflow-hidden rounded-xl image-reveal group">
                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Person standing with a motorcycle at night" src="/portfolio-2.jpg" alt="Street" />


                    </div>
                    {/* Travel Item */}
                    <div className="item-standard relative overflow-hidden rounded-xl image-reveal group">
                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Looking up a building shaft" src="/portfolio-3.jpg" alt="Travel" />


                    </div>
                    {/* Portrait Item 2 */}
                    <div className="item-standard relative overflow-hidden rounded-xl image-reveal group">
                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Orange cat sitting" src="/portfolio-4.jpg" alt="Cat" />


                    </div>
                    {/* Street Item 2 */}
                    <div className="item-tall relative overflow-hidden rounded-xl image-reveal group">
                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Ornate ceiling design" src="/portfolio-5.jpg" alt="Architecture" />


                    </div>
                    {/* Travel Item 2 */}
                    <div className="item-standard relative overflow-hidden rounded-xl image-reveal group">
                        <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Person standing in a field in front of a building" src="/portfolio-6.jpg" alt="Portrait" />


                    </div>
                </div>

            </section>

            {/* Simplified Modal / Lightbox Mockup (Hidden) */}
            <div className="fixed inset-0 bg-background/95 z-[100] hidden items-center justify-center p-8">
                <div className="relative max-w-5xl w-full aspect-video bg-surface-container rounded-2xl overflow-hidden shadow-2xl">
                    <button className="absolute top-6 right-6 z-10 p-2 bg-black/50 text-white rounded-full backdrop-blur-md">
                        <span className="material-symbols-outlined" data-icon="close">close</span>
                    </button>
                    <img className="w-full h-full object-contain" data-alt="Full screen lightbox preview of city night lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtZjIDwR3hvC1Cxzom9uRUAueUeatq9nG3vk2X3VnOnwHpG4ey1g16ID2z86aTTnP0WkmZqvrNCRnA75tNwcTrUQQg0GEcGSGfxOs1TleX1Jx0DVc7AJA_0491qyPKydk3Lj3voS--lXhubQupLMcAiQILJ1qPs3T4r9-YGDrAYIDiN29xU_R-amCpqoOd48fWzXTw6LqxHvv3ah1HCI3UhhkXerqo_3vHsAPbaDgUmhfBZndo-sFGSWuS0ecauam0mLk501ugtV0" alt="Full screen" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <h4 className="text-2xl font-black text-white">Neon Obsidian</h4>
                        <p className="text-primary text-sm font-bold tracking-widest uppercase">Shibuya, Tokyo — 2023</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
