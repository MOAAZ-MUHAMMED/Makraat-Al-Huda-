import { useEffect } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useProgram } from "@/hooks/use-programs";

export default function ProgramDetails() {
  const [, params] = useRoute("/program/:id");
  const programId = Number(params?.id);
  
  const { data: program, isLoading, isError } = useProgram(programId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError || !program) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <AlertCircle className="w-20 h-20 text-destructive mb-6" />
        <h2 className="text-3xl font-bold text-foreground mb-4">عذراً، لم نتمكن من العثور على البرنامج</h2>
        <p className="text-muted-foreground mb-8 text-lg">قد يكون الرابط غير صحيح أو تم إزالة البرنامج.</p>
        <Link 
          href="/" 
          className="px-6 py-3 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  // Pre-fill WhatsApp message
  const whatsappMessage = encodeURIComponent(`السلام عليكم، أرغب في التسجيل أو الاستفسار عن: ${program.title}`);
  const whatsappUrl = `https://wa.me/201091044501?text=${whatsappMessage}`;

  const imageSrc = program.imageUrl;

  return (
    <div className="w-full bg-background pb-16 sm:pb-24">
      {/* Program Hero Image */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
        <img 
          src={imageSrc} 
          alt={program.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/40"></div>
        
        {/* Back Button */}
        <div className="absolute top-4 sm:top-6 lg:top-8 right-3 sm:right-4 lg:right-8 z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass text-foreground font-bold hover:bg-white/50 transition-colors text-sm sm:text-base"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            عودة
          </Link>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 -mt-20 sm:-mt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-card rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/10 border border-border p-4 sm:p-8 md:p-12"
        >
          {/* Header */}
          <div className="border-b border-border/60 pb-4 sm:pb-8 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-3 sm:mb-6">
              {program.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Details Content */}
          <div className="max-w-none text-foreground/90 space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-secondary flex-shrink-0" />
              تفاصيل البرنامج
            </h3>
            
            <div className="whitespace-pre-wrap font-medium leading-loose bg-muted/30 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl border border-border/50 text-xs sm:text-sm md:text-base">
              {program.details}
            </div>
          </div>

          {/* Details Image */}
          <div className="my-8 sm:my-12">
            <img 
              src={imageSrc}
              alt={program.title}
              className="w-full rounded-lg sm:rounded-2xl shadow-lg shadow-black/10 object-cover max-h-64 sm:max-h-80 md:max-h-96"
            />
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border/60">
            <div className="flex-1 text-center sm:text-right">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">هل ترغب في الانضمام؟</h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">تواصل معنا عبر الواتساب لإتمام عملية التسجيل.</p>
            </div>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 rounded-lg sm:rounded-2xl font-black bg-gradient-to-l from-primary to-primary/80 text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 text-base sm:text-lg md:text-xl"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              اضغط للتسجيل
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
