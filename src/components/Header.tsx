import React, { useState, useEffect } from "react";
import { Menu, X, Landmark } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "어린이기획자란", href: "#about" },
    { name: "운영 사례", href: "#cases" },
    { name: "수업 프로세스", href: "#process" },
    { name: "대표 프로필", href: "#founder" },
    { name: "학부모 안내", href: "#parents" },
    { name: "협업 안내", href: "#partnership" },
    { name: "블로그·뉴스", href: "#blog" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-teal/10 py-3"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#")}
            className="flex items-center space-x-2.5 group focus:outline-none"
            id="header-logo-link"
          >
            <div className="w-12 h-12 rounded-full bg-brand-teal flex flex-col items-center justify-center text-brand-yellow font-display font-black shadow-lg shadow-brand-teal/35 group-hover:scale-105 transition-transform select-none">
              <div className="flex flex-col items-center justify-center -rotate-7 transform -translate-y-[1px]">
                <span className="text-[11px] leading-[0.9] tracking-tight font-black">Little</span>
                <span className="text-[10px] leading-[0.9] tracking-tight font-black -mt-0.5">Planners</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-gray-900 group-hover:text-brand-teal transition-colors">
                리틀플래너스
              </span>
              <span className="text-[10px] tracking-wider uppercase font-display font-semibold text-brand-teal-dark">
                Little Planners
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-teal after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center" id="desktop-cta-container">
            <a
              href="#partnership"
              onClick={(e) => handleScrollTo(e, "#partnership")}
              className="bg-brand-amber hover:bg-brand-amber-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-brand-amber/10 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 focus:outline-none"
              id="header-cta-button"
            >
              <Landmark className="w-4 h-4 text-brand-yellow" />
              기관 협업 문의
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center" id="mobile-menu-button-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-teal p-1 focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 border-b border-brand-teal/10 shadow-lg absolute top-full left-0 right-0 animate-in fade-in slide-in-from-top-5 duration-200" id="mobile-nav-panel">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-brand-teal-tint hover:text-brand-teal transition-all"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 px-3">
              <a
                href="#partnership"
                onClick={(e) => handleScrollTo(e, "#partnership")}
                className="w-full bg-brand-amber hover:bg-brand-amber-dark text-white text-center font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                id="mobile-header-cta"
              >
                <Landmark className="w-5 h-5 text-brand-yellow" />
                기관 협업 문의
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
