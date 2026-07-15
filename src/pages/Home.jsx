import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700" data-alt="Moody cinematic street photography background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG9rd715FMEWyAnZcnRt2eyfRaHsjumKBFDSMrYzZCnQ0WD-33Qtle40VjQrBULjXfQqvAFZrL5dVOq1m3-w9tFjRHTPNzSugenx5_wP5Q2HD1eT7dU0FvsiydTKF2ThHYnvt3VV3ctUbzIAFXk2ed4aImeH7RrSBmindWhhyqC-X0S8oSboXl9zAL5RQB4-1IvsjmNPD6id3RgJiFGR5FcWwDxcC9Jv8VkcX_4AC3dlKhlruDAq_Q5Yj48OoyKC8W493kG6a_e6I" alt="Hero background" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
                </div>
                <div className="relative z-10 max-w-5xl text-center">
                    <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-primary/30">
                        Technical Auteur
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight mb-8">
                        Capturing Stories <br /> <span className="text-primary">Through My Lens</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-10 font-light">
                        Where the precision of IoT engineering meets the emotive power of cinematic photography.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/portfolio" className="inline-flex justify-center items-center bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                            View My Work
                        </Link>
                        <Link to="/contact" className="inline-flex justify-center items-center bg-white/5 backdrop-blur-md border border-white/10 text-on-surface px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                            Hire Me
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technical Background Highlight (Bento-ish Layout) */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 bg-surface-container-low p-10 rounded-xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-9xl" data-icon="memory">memory</span>
                        </div>
                        <h2 className="text-3xl font-black mb-6 tracking-tight">The Engineer's Perspective</h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                            With a foundation in Computer Science and IoT, I approach photography as a system of light and data. Every frame is a calculated balance of technical constraints and creative storytelling.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-lg border border-white/10">
                                <span className="material-symbols-outlined text-primary text-sm" data-icon="code">code</span>
                                <span className="text-xs font-bold uppercase tracking-widest">CS Core</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-lg border border-white/10">
                                <span className="material-symbols-outlined text-primary text-sm" data-icon="settings_input_component">settings_input_component</span>
                                <span className="text-xs font-bold uppercase tracking-widest">IoT Stack</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 bg-primary p-10 rounded-xl flex flex-col justify-end group">
                        <span className="material-symbols-outlined text-on-primary text-5xl mb-6 group-hover:rotate-12 transition-transform" data-icon="photo_camera">photo_camera</span>
                        <h3 className="text-on-primary text-2xl font-black leading-tight">Visualizing the invisible through hardware and optics.</h3>
                    </div>
                </div>
            </section>

            {/* About Me Summary (Asymmetric Layout) */}
            <section className="py-24 bg-surface-container-lowest">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                            <img className="w-full h-full object-cover" data-alt="Professional portrait of Eshan Baghmar" src="/profile.jpg" alt="Portrait" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-surface-container border border-white/10 p-6 rounded-xl shadow-xl hidden lg:block">
                            <div className="text-primary font-black text-4xl mb-1">1+</div>
                            <div className="text-xs uppercase tracking-widest font-bold">Years Experience</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-primary font-black uppercase tracking-widest text-sm mb-4">About Me</h4>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Eshan Baghmar. <br /> Programmer. Artist.</h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                            I am a digital artisan based in the intersection of logic and beauty. My work explores the raw textures of urban life and the surgical precision of modern technology.
                        </p>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                            When I'm not behind a camera, I'm architecting smart systems that bridge the physical and digital worlds. My portfolio is a testament to this dual identity.
                        </p>

                    </div>
                </div>
            </section>

            {/* Featured Work Teaser */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Featured Work</h2>
                        <p className="text-on-surface-variant mt-4 text-lg">Select frames from recent cinematic expeditions.</p>
                    </div>
                    <Link className="text-slate-400 font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2 hover:text-primary hover:border-primary transition-all" to="/portfolio">View All Portfolio</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Cyberpunk style city lights at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCskqeMD1DA2yo3O5A6N92Nw078tukg0rflrV658at5a42lM79JytILLvLYdhUKPWn77LpU21kWNylCVooO9cIEkrIhdLNdSxq0Ml8AhJz9JoeRuzwKpGBv2pJ72RFodSsmmWCgPexcvoZjCfim4l6GMSD1k-XQCScVttC5Bc20R0cQCOQOIQx_Iyb6HD2yXrfySFAng1kRXBiO936n1vqJMpGxhc0NtM4BDbE9D4Ajk5b5U7dbFq_EaIEftc4Rr8s6QSeWIJWwItQ" alt="Neon Veins" />

                    </div>
                    {/* Project 2 */}
                    <div className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl mt-0 md:mt-12">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Close up of high tech computer hardware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk-B4yQfWh7FuvOYs52_Mol4NlBQsYmLuJYMDAiWGDdZJ9T9iyruN1U3B-NgNN6WfN1SdKzDc0EMK6ASf-pUrLdJa-RYojm_frWN0C3PVraaNsvbrA6DxTJ0OuiUPgrVrbwDV0Qe_snIaXen4Wm_LMUZEoZwkzhmFcJSBUGnLTU0GpIyxQQzrrCNtY8kRAYI6MBCimaLW98PoH2GbVdiYRvZAtV9bm-Y_Hw_d9ZaRyGYXJb3ynAsbVS76uoaZMgrw7-9kONdX1RHI" alt="Silicon Soul" />

                    </div>
                    {/* Project 3 */}
                    <div className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Black and white minimalist landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoWcJnrJ1o9wa8gyMsrqiQL3s5EH7MCiyMGQXPpKVrAfkY7-xB3tvgtCOZN28a4MspPlzvkn80O2qybyAyRvuNgh1C1IxUNXIx4gpsVzlLbSnwXQA22CI67x5BXbcHM9ZffhuDVysWx_837cY2mSS6G75N9c0Doaadw-U4L6MQdyreK24GtZaSDjzPtdvJbnu6u0mRCKeO9A2O8zi-rnmfwTpcSynnD_SzKGF3iCqvc3SMuTAQVLENAFJGkjo0o7GzjN5ZqWEUodI" alt="The Void" />

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8">
                <div className="max-w-5xl mx-auto bg-primary rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-on-primary text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready to start a <br /> creative journey?</h2>
                        <Link to="/contact" className="inline-flex justify-center items-center bg-background text-primary px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            Let's Connect
                        </Link>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined text-[30rem]" data-icon="alternate_email" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
