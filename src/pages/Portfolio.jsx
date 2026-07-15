import { useState, useEffect } from 'react';

const IMAGES = [
    {
        src: "/portfolio-1.jpg",
        alt: "Portrait",
        title: "Field Serenity",
        caption: "Person standing in a field in front of a building",
        sizeClass: "item-tall"
    },
    {
        src: "/portfolio-2.jpg",
        alt: "Street",
        title: "Night Rider",
        caption: "Person standing with a motorcycle at night",
        sizeClass: "item-wide"
    },
    {
        src: "/portfolio-3.jpg",
        alt: "Travel",
        title: "Vertigo",
        caption: "Looking up a building shaft",
        sizeClass: "item-standard"
    },
    {
        src: "/portfolio-4.jpg",
        alt: "Cat",
        title: "Cozy Corner",
        caption: "Orange cat sitting",
        sizeClass: "item-standard"
    },
    {
        src: "/portfolio-5.jpg",
        alt: "Architecture",
        title: "Symmetry",
        caption: "Ornate ceiling design",
        sizeClass: "item-tall"
    },
    {
        src: "/portfolio-6.jpg",
        alt: "Portrait",
        title: "Golden Hour",
        caption: "Person standing in a field in front of a building",
        sizeClass: "item-standard"
    },
    {
        src: "/portfolio-7.jpg",
        alt: "Cat on Scooter",
        title: "Fascino Companion",
        caption: "Cat sitting on a red scooter seat against a grey wall",
        sizeClass: "item-tall"
    },
    {
        src: "/portfolio-8.jpg",
        alt: "Duck in Pond",
        title: "Drifting Reflection",
        caption: "White duck swimming in a calm pond reflecting sunset colors",
        sizeClass: "item-standard"
    },
    {
        src: "/portfolio-9.jpg",
        alt: "Person in Green T-shirt",
        title: "Saigon Vibe",
        caption: "Person from behind wearing a green t-shirt",
        sizeClass: "item-standard"
    }
];

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Disable background scrolling when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

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
                    {IMAGES.map((img, index) => (
                        <div
                            key={index}
                            className={`${img.sizeClass} relative overflow-hidden rounded-xl image-reveal group cursor-pointer`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                data-alt={img.caption}
                                src={img.src}
                                alt={img.alt}
                            />
                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="p-3 bg-black/50 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-white text-3xl block" style={{ fontVariationSettings: "'FILL' 0, 'wght' 500" }}>
                                        zoom_in
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-background/95 z-[100] flex items-center justify-center p-4 md:p-8 cursor-zoom-out animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[85vh] bg-surface-container rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 z-10 p-2 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-black/75 transition-colors cursor-pointer"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close preview"
                        >
                            <span className="material-symbols-outlined block" style={{ fontVariationSettings: "'FILL' 0, 'wght' 600" }}>
                                close
                            </span>
                        </button>

                        {/* Image */}
                        <img
                            className="w-full h-full max-h-[75vh] object-contain"
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                        />

                        {/* Text Caption Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                            <h4 className="text-2xl font-black">{selectedImage.title}</h4>
                            <p className="text-primary text-sm font-bold tracking-widest uppercase mt-1">
                                {selectedImage.caption}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
