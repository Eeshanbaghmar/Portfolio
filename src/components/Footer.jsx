export default function Footer() {
    return (
        <footer className="bg-[#211e11] border-t border-white/5 full-width mt-auto no-shadows text-[#e6c419]">
            <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto w-full">
                <div className="text-[#e6c419] font-bold font-manrope mb-6 md:mb-0">
                    © 2024 Eshan Baghmar. Technical Auteur.
                </div>
                <div className="flex gap-8">
                    <a className="font-manrope text-sm tracking-widest uppercase text-slate-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="https://www.instagram.com/eshanbaghmar/" target="_blank" rel="noopener noreferrer">Instagram</a>

                    <a className="font-manrope text-sm tracking-widest uppercase text-slate-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/eshan-baghmar-a9a7332b8" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
