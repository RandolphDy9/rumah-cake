import React, { useEffect, useState } from "react";
import {
  Star,
  ArrowRight,
  Quote,
  CheckCircle2,
  MessageCircle,
  Facebook,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS, REVIEWS } from "./constants";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.slice(1);
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Custom Cakes", id: "custom-cakes" },
    { name: "Our Story", id: "our-story" },
    { name: "Occasions", id: "occasions" },
    { name: "Contact", id: "contact" },
  ];

  const FB_URL = "https://www.facebook.com/rumahtorontocakery";
  const WA_URL = "https://wa.me/16478363810";

  return (
    <div className="min-h-screen selection:bg-rose-200 overflow-x-hidden text-[#412B2B]">
      {/* Top Banner */}
      <div className="bg-[#412B2B] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-12 text-xs font-bold tracking-widest uppercase">
          <span className="flex items-center gap-2">
            🍰 Custom Designs Available <span className="text-rose-300">•</span>
          </span>
          <span className="flex items-center gap-2">
            📍 Handcrafted in Toronto <span className="text-rose-300">•</span>
          </span>
          <span className="flex items-center gap-2">
            🍰 Custom Designs Available <span className="text-rose-300">•</span>
          </span>
          <span className="flex items-center gap-2">
            📍 Handcrafted in Toronto <span className="text-rose-300">•</span>
          </span>
          <span className="flex items-center gap-2">
            🍰 Custom Designs Available <span className="text-rose-300">•</span>
          </span>
          <span className="flex items-center gap-2">
            📍 Handcrafted in Toronto <span className="text-rose-300">•</span>
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-rose-100 ${isScrolled ? "py-2 shadow-sm" : "py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          {/* Left nav (desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-6 lg:gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-semibold text-[#412B2B]/80 hover:text-[#412B2B] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center logo */}
          <a
            href="#home"
            aria-label="Rumah Toronto Cakery – Home"
            className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#412B2B] focus-visible:ring-offset-2 rounded-2xl shrink-0"
          >
            <div className="relative rounded-full p-1.5 bg-gradient-to-b from-rose-100 to-rose-50 shadow-[0_4px_20px_rgba(65,43,43,0.08)] border-2 border-[#412B2B] ring-1 ring-rose-200/60 transition-shadow duration-300 group-hover:shadow-[0_8px_28px_rgba(65,43,43,0.12)]">
              <img
                src="/rumah-logo.jpg"
                alt=""
                className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
              />
            </div>
          </a>

          {/* Right nav (desktop) + Mobile menu button */}
          <div className="flex flex-1 items-center justify-start gap-6 lg:gap-8">
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm font-semibold text-[#412B2B]/80 hover:text-[#412B2B] transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-2 rounded-lg text-[#412B2B] hover:bg-rose-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#412B2B] focus-visible:ring-offset-2 ml-auto"
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden />
              ) : (
                <Menu size={24} aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <motion.div
          initial={false}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden border-t border-rose-100 bg-white/95 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            <a
              href="#home"
              onClick={handleMobileNavClick}
              className="py-3 px-2 text-base font-semibold text-[#412B2B]/80 hover:text-[#412B2B] transition-colors uppercase tracking-widest border-b border-rose-50"
            >
              Home
            </a>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleMobileNavClick}
                className="py-3 px-2 text-base font-semibold text-[#412B2B]/80 hover:text-[#412B2B] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-32 px-6 bg-gradient-to-b from-rose-50/50 via-white to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-serif font-black text-[#412B2B] leading-[1.1] mb-6">
              Say goodbye to <br />
              <span className="relative">
                boring parties.
                <motion.span
                  className="absolute -right-20 top-0"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  ✨
                </motion.span>
              </span>
            </h2>
            <div className="flex flex-col items-center justify-center gap-6">
              <p className="text-xl text-[#412B2B]/70 max-w-lg">
                Toronto's most <b>whimsical</b> custom cakes. 🎂
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={WA_URL}
                  target="_blank"
                  className="flex items-center gap-3 bg-[#412B2B] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  Order via WhatsApp <ArrowRight size={18} />
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  className="flex items-center gap-3 bg-white border-2 border-[#412B2B] text-[#412B2B] px-8 py-4 rounded-full font-bold hover:bg-[#412B2B] hover:text-white transition-all shadow-sm"
                >
                  Order via Facebook <Facebook size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Side Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-rose-100/50 border border-rose-50 relative">
                <Quote
                  className="text-rose-400 absolute -top-4 -left-4 bg-white rounded-full p-2"
                  size={32}
                />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FACC15" color="#FACC15" />
                  ))}
                </div>
                <p className="text-[#412B2B] font-medium leading-relaxed mb-6 italic">
                  "The cake you need this celebration"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?u=${i}`}
                        className="w-10 h-10 rounded-full border-2 border-white"
                        alt="Avatar"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#412B2B]/60 uppercase tracking-wider">
                    Join 1k+ Happy Eaters
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-end justify-center gap-4 h-[400px]">
                {PRODUCTS.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ height: 0 }}
                    animate={{ height: i === 1 ? "100%" : "80%" }}
                    transition={{ delay: 0.2 * i, duration: 1 }}
                    className="flex-1 rounded-t-full relative overflow-hidden group shadow-2xl border-4 border-white"
                    style={{ backgroundColor: p.color }}
                  >
                    <img
                      src={p.image}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700"
                      alt={p.name}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="flex flex-wrap gap-2">
                {["NATURAL", "CUSTOM", "FARM FRESH", "PREMIUM"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white border border-rose-100 rounded-full text-[10px] font-black text-[#412B2B]/70 tracking-widest uppercase shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid: Taste the Sweet Sensation */}
      <section
        id="flavors"
        className="relative py-48 bg-[#FDF2F2] scroll-mt-20"
      >
        {/* Top Curve - Smooth Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[100px] fill-white"
          >
            <path d="M 0 200 L 0 0 C 300 50 900 50 1200 0 L 1200 200 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-5xl font-serif font-black text-[#412B2B] mb-4">
                Taste the flavor sensation 🍭
              </h3>
              <p className="text-[#412B2B]/60 font-medium">
                Toronto's most loved treats, hand-delivered fresh.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div
                  className="aspect-square rounded-3xl overflow-hidden mb-6 relative p-8 transition-colors duration-500 shadow-xl border-4 border-white"
                  style={{ backgroundColor: product.color }}
                >
                  <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border border-rose-50">
                    <Star
                      size={12}
                      className="text-yellow-500 fill-yellow-500"
                    />
                    <span className="text-xs font-black text-[#412B2B]">
                      {product.rating}
                    </span>
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 shadow-2xl"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#412B2B] mb-1">
                  {product.name}
                </h4>
                <p className="text-sm text-[#412B2B]/50 font-bold uppercase tracking-wider">
                  {product.price} - {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Curve - Smooth Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[100px] fill-white"
          >
            <path d="M 0 200 L 0 0 C 300 50 900 50 1200 0 L 1200 200 Z" />
          </svg>
        </div>
      </section>

      {/* Features: Custom Cakes */}
      <section id="custom-cakes" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=400"
                  className="w-full h-64 object-cover rounded-[40px] shadow-lg"
                  alt="Cake prep"
                />
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400"
                  className="w-full h-48 object-cover rounded-[40px] shadow-lg"
                  alt="Finished cake"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=400"
                  className="w-full h-48 object-cover rounded-[40px] shadow-lg"
                  alt="Ingredients"
                />
                <img
                  src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=400"
                  className="w-full h-64 object-cover rounded-[40px] shadow-lg"
                  alt="Cookies"
                />
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-3xl">🌸</span>
                <span className="text-xs font-black tracking-widest uppercase text-rose-500">
                  Pure Joy
                </span>
              </div>
              <h3 className="text-6xl font-serif font-black text-[#412B2B] mb-8 leading-tight">
                Eat your way to happiness 🍓
              </h3>
              <p className="text-xl text-[#412B2B]/70 mb-12 leading-relaxed">
                We believe a cake is more than just sugar and flour. It's the
                centerpiece of your most cherished memories. Our gentle flavors
                activate joy without the sugar crash. 💖
              </p>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#FDF2F2] rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="text-[#412B2B]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-[#412B2B]">
                      Customized Creations
                    </h5>
                    <p className="text-[#412B2B]/60">
                      Every cake is a unique masterpiece tailored to your story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section: Turning Fantasies into Reality */}
      <section
        id="occasions"
        className="relative py-32 px-6 scroll-mt-20 bg-white"
      >
        <div className="max-w-7xl mx-auto bg-[#412B2B] rounded-[60px] overflow-hidden relative min-h-[500px] flex items-center shadow-2xl">
          <div className="absolute top-10 right-10 opacity-20 transform rotate-12 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400"
              className="w-64 rounded-2xl shadow-2xl"
              alt="Decorated cake"
            />
          </div>
          <div className="w-full text-center px-6 relative z-10 py-20">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-black uppercase tracking-widest mb-6">
              ✨ BOOST HAPPINESS
            </span>
            <h3 className="text-5xl md:text-7xl font-serif font-black text-white mb-8">
              Turning fantasies <br /> into reality. 🎂
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <a
                href={WA_URL}
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white text-[#412B2B] px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-lg"
              >
                Order via WhatsApp <ArrowRight size={16} />
              </a>
              <a
                href={FB_URL}
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-[#412B2B] transition-all"
              >
                Order via Facebook <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section: Our Story */}
      <section id="our-story" className="py-32 overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 bg-white p-12 rounded-[50px] shadow-2xl border border-rose-50">
                <div className="text-6xl mb-8 opacity-20 font-serif">❝</div>
                <h4 className="text-3xl font-serif font-black text-[#412B2B] mb-8 leading-tight">
                  Handcrafted cakes for today's world. We bake memories, one
                  slice at a time. 🍰
                </h4>
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/150?u=nikki"
                    className="w-16 h-16 rounded-2xl object-cover shadow-md"
                    alt="Founder"
                  />
                  <div>
                    <h6 className="font-bold text-[#412B2B]">Maria Dolorosa</h6>
                    <p className="text-sm text-[#412B2B]/60 font-medium">
                      Founder of Rumah Toronto
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=400"
                className="w-full aspect-[4/5] object-cover rounded-[50px] shadow-lg border-4 border-white"
                alt="Cupcakes"
              />
              <div className="pt-12">
                <img
                  src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=400"
                  className="w-full aspect-[4/5] object-cover rounded-[50px] shadow-lg border-4 border-white"
                  alt="Baking process"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="flex items-center gap-8 text-[#412B2B]/40 font-black uppercase text-xs tracking-widest">
              <a
                href={FB_URL}
                target="_blank"
                className="flex items-center gap-2 hover:text-[#412B2B] transition-colors"
              >
                <Facebook size={16} /> FACEBOOK
              </a>
              <span className="flex items-center gap-2 hover:text-[#412B2B] transition-colors">
                <Instagram size={16} /> @RUMAHTORONTO
              </span>
            </div>
            <div className="bg-rose-50 px-6 py-3 rounded-full border border-rose-100 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FACC15" color="#FACC15" />
                ))}
              </div>
              <span className="text-xs font-black text-[#412B2B]">
                4.9/5 RATING
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[40px] shadow-xl shadow-rose-100/30 border border-rose-50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} fill="#FACC15" color="#FACC15" />
                    ))}
                  </div>
                  <p className="text-[#412B2B] font-medium leading-relaxed mb-8 italic text-sm">
                    "{review.content}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-rose-50">
                  <img
                    src={review.avatar}
                    className="w-10 h-10 rounded-xl object-cover shadow-sm"
                    alt={review.author}
                  />
                  <div>
                    <h6 className="font-bold text-[#412B2B] text-sm">
                      {review.author}
                    </h6>
                    <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#412B2B] border-t border-rose-100 pt-32 pb-12 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-6">
              <h2 className="text-6xl font-serif font-black text-white tracking-tighter mb-8">
                Rumah Toronto Cakery
              </h2>
              <p className="text-xl text-white/60 font-medium mb-12 max-w-sm">
                Each cake is carefully crafted with love. 🍰
              </p>
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-8 text-white/80">
              <div>
                <h6 className="font-black text-white uppercase text-xs tracking-widest mb-6">
                  Shop
                </h6>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <a href="#flavors">Flavors</a>
                  </li>
                  <li>
                    <a href="#custom-cakes">Custom Cakes</a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-black text-white uppercase text-xs tracking-widest mb-6">
                  Social
                </h6>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <a href={FB_URL} target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center pt-12 border-t border-white/10">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
              © 2024 Rumah Toronto Cakery. Handcrafted with ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
