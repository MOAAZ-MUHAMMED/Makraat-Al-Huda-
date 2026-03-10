import { ReactNode, useState } from "react";
import { Link } from "wouter";
import { BookOpen, Moon, Sun, Menu, X } from "lucide-react";
import { FloatingWhatsApp } from "../FloatingWhatsApp";

interface AppLayoutProps {
  children: ReactNode;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function AppLayout({ children, theme, onToggleTheme }: AppLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass border-b border-border/50 will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-2xl font-black text-gradient tracking-wide hidden sm:block">
                مقرأة الهدى والنور
              </h1>
              <h1 className="text-lg font-black text-gradient tracking-wide sm:hidden">
                الهدى والنور
              </h1>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-semibold text-foreground/80 hover:text-primary transition-colors text-lg">
                الرئيسية
              </Link>
              <a 
                href="#programs" 
                className="font-semibold text-foreground/80 hover:text-primary transition-colors text-lg smooth-scroll"
              >
                البرامج
              </a>
              <a 
                href="https://wa.me/201091044501" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                تواصل معنا
              </a>
              <button 
                onClick={onToggleTheme}
                className="p-2.5 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
                aria-label="تبديل المظهر"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={onToggleTheme}
                className="p-2.5 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
                aria-label="تبديل المظهر"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
                aria-label="القائمة"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-2">
              <Link 
                href="/"
                onClick={handleMobileNavClick}
                className="block px-4 py-3 rounded-lg font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all text-lg"
              >
                الرئيسية
              </Link>
              <a 
                href="#programs"
                onClick={handleMobileNavClick}
                className="block px-4 py-3 rounded-lg font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all text-lg smooth-scroll"
              >
                البرامج
              </a>
              <a 
                href="https://wa.me/201091044501"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMobileNavClick}
                className="block px-4 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-lg text-center"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-16 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-secondary" />
            <span className="text-2xl font-bold text-white">مقرأة الهدى والنور</span>
          </div>
          <p className="text-background/70 font-medium text-lg">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
