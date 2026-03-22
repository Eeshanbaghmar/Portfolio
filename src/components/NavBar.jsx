import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();

    const getLinkClasses = (path) => {
        if (location.pathname === path) {
            return "text-[#e6c419] font-black border-b-2 border-[#e6c419] pb-1 font-manrope transition-all duration-300";
        }
        return "text-slate-400 font-medium hover:text-white transition-colors hover:text-[#e6c419] font-manrope transition-all duration-300";
    };

    return (
        <nav className="bg-[#211e11]/80 backdrop-blur-md border-b border-white/10 shadow-2xl docked full-width top-0 sticky z-50">
            <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
                <Link to="/" className="text-2xl font-black text-[#e6c419] tracking-tighter uppercase font-manrope">
                    ESHAN BAGHMAR
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <Link className={getLinkClasses('/')} to="/">Home</Link>
                    <Link className={getLinkClasses('/portfolio')} to="/portfolio">Portfolio</Link>
                    <Link className={getLinkClasses('/contact')} to="/contact">Contact</Link>
                </div>
                <div className="flex items-center md:hidden">
                    <button className="text-[#e6c419] scale-95 active:scale-90 transition-transform">
                        <span className="material-symbols-outlined" data-icon="menu">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
