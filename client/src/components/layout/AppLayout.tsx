import { ReactNode } from "react";
import { Link } from "wouter";
import { BookOpen } from "lucide-react";
import { FloatingWhatsApp } from "../FloatingWhatsApp";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-2xl font-black text-gradient tracking-wide">
                مقرأة الهدى والنور
              </h1>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-semibold text-foreground/80 hover:text-primary transition-colors text-lg">
                الرئيسية
              </Link>
              <a 
                href="#programs" 
                className="font-semibold text-foreground/80 hover:text-primary transition-colors text-lg"
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
            </nav>
          </div>
        </div>
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
