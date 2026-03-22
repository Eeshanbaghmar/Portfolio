export default function Contact() {
    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative py-20 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Let's Collaborate</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
                            BRING YOUR <br /> <span className="text-primary">VISION TO LIGHT</span>
                        </h1>
                        <p className="text-on-surface-variant text-lg max-w-lg mb-8">
                            From technical IoT precision to cinematic visual storytelling. I’m currently accepting bookings for premium photography and creative strategy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:brightness-110 transition-all scale-100 active:scale-95 shadow-xl">
                                <span className="material-symbols-outlined" data-icon="chat">chat</span>
                                WhatsApp Me
                            </button>
                            <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-surface-container border border-white/10">
                                <span className="material-symbols-outlined text-primary" data-icon="alternate_email">alternate_email</span>
                                <span className="font-medium">hello@eshan.studio</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 border border-white/10">
                            <img alt="Camera lens close up" className="w-full h-full object-cover" data-alt="Close up of a professional camera lens with gold reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Gat3t-c3h9CA-axpTjQZY_Trm9OcG4nAvMLY7uaxeSefL0aUlLZGr5TPn3qGaCdD77lhupUM6F4GMALrzWBWWooAmd_eyoAXmaOv646KnvT-ja9rbps7weCN0WmAPA_2LkYpZjrf-Ls6SgsPlUbK87azR8l4LyHM0sTO32LAvqFdoYbKexP6JC31ZsfhFwwRlCbJKx2eXZ1MetCluYuVQqqsTvbQ5a3cvoSpMkQ2ts6cVZY11mdcDnU5pw5L2IFmtHVz_IRxi5c" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                        </div>
                        {/* Offset Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-6 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md">
                            <p className="text-xs tracking-widest uppercase text-primary font-bold mb-1">Current Location</p>
                            <p className="font-bold text-lg">Bhilai, India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Bento Grid */}
            <section className="py-24 px-8 bg-surface-container-lowest">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-black mb-12 tracking-tight uppercase">Specialized <span className="text-primary">Services</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Portrait */}
                        <div className="group bg-surface-container border border-white/5 p-8 rounded-xl hover:bg-surface-container-high transition-all duration-300">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined" data-icon="person">person</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Portrait Shoots</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Cinematic character studies focusing on natural lighting and high-contrast technical precision.</p>
                            <ul className="space-y-2 text-xs uppercase tracking-widest font-bold text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 2 Hour Sessions</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 15 Retouched Images</li>
                            </ul>
                        </div>
                        {/* Event */}
                        <div className="group bg-surface-container-highest border border-primary/20 p-8 rounded-xl scale-105 shadow-2xl z-10">
                            <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined" data-icon="event">event</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Event Photography</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Full coverage for corporate events, tech launches, and intimate celebrations with a documentary style.</p>
                            <ul className="space-y-2 text-xs uppercase tracking-widest font-bold text-primary">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Same-Day Previews</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 4K Video Snippets</li>
                            </ul>
                        </div>
                        {/* Content */}
                        <div className="group bg-surface-container border border-white/5 p-8 rounded-xl hover:bg-surface-container-high transition-all duration-300">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined" data-icon="video_library">video_library</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Instagram Content</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Tailored short-form vertical content for creators and brands looking for an editorial aesthetic.</p>
                            <ul className="space-y-2 text-xs uppercase tracking-widest font-bold text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Reels Editing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Grid Curation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form & Details Section */}
            <section className="py-24 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-surface-container p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl">
                            <h2 className="text-3xl font-black mb-8 tracking-tight uppercase">Inquiry <span className="text-primary">Form</span></h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Full Name</label>
                                        <input className="w-full bg-surface border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary transition-all" placeholder="John Doe" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Email Address</label>
                                        <input className="w-full bg-surface border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary transition-all" placeholder="john@example.com" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Service Type</label>
                                    <select className="w-full bg-surface border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary transition-all appearance-none">
                                        <option>Portrait Shoot</option>
                                        <option>Event Photography</option>
                                        <option>Instagram Content</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Your Message</label>
                                    <textarea className="w-full bg-surface border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary transition-all" placeholder="Tell me about your project..." rows="5"></textarea>
                                </div>
                                <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3" type="button">
                                    Send Message
                                    <span className="material-symbols-outlined" data-icon="send">send</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Equipment & Links */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Tech Stack */}
                        <div>
                            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-6">Technical Arsenal</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-white/5">
                                    <span className="font-bold">Sony ZV E10</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-widest">Main Body</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-white/5">
                                    <span className="font-bold">16-50mm kit lens</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-widest">Zoom Lens</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-white/5">
                                    <span className="font-bold">DaVinci Resolve Studio</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-widest">Grading</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-white/5">
                                    <span className="font-bold">Adobe Lightroom</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-widest">Workflow</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Handles */}
                        <div>
                            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-6">Direct Channels</h4>
                            <div className="grid grid-cols-1 gap-4">
                                <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/10 group" href="#">
                                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                                        <span className="material-symbols-outlined" data-icon="photo_camera">photo_camera</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold">Instagram</p>
                                        <p className="font-bold">@eshan.baghmar</p>
                                    </div>
                                </a>
                                <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/10 group" href="#">
                                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                                        <span className="material-symbols-outlined" data-icon="work">work</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold">LinkedIn</p>
                                        <p className="font-bold">eshan-baghmar</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
