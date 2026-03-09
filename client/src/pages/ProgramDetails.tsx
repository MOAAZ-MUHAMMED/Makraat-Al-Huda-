import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useProgram } from "@/hooks/use-programs";

export default function ProgramDetails() {
  const [, params] = useRoute("/program/:id");
  const programId = Number(params?.id);
  
  const { data: program, isLoading, isError } = useProgram(programId);

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

  const imageSrc = program.imageUrl || "https://images.unsplash.com/photo-1590076215667-87ebff3b3e2b?w=1600&q=80";

  return (
    <div className="w-full bg-background pb-24">
      {/* Program Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <img 
          src={imageSrc} 
          alt={program.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/40"></div>
        
        {/* Back Button */}
        <div className="absolute top-8 right-4 sm:right-8 z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-foreground font-bold hover:bg-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
            عودة
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-card rounded-[2.5rem] shadow-2xl shadow-black/10 border border-border p-8 md:p-12"
        >
          {/* Header */}
          <div className="border-b border-border/60 pb-8 mb-8">
            <h1 className="text-3xl md:text-5xl font-black text-foreground leading-[1.3] mb-6">
              {program.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Details Content */}
          <div className="prose prose-lg md:prose-xl prose-emerald rtl:prose-reverse max-w-none text-foreground/90">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-7 h-7 text-secondary" />
              تفاصيل البرنامج
            </h3>
            
            <div className="whitespace-pre-wrap font-medium leading-loose bg-muted/30 p-6 md:p-8 rounded-2xl border border-border/50">
              {program.details}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-border/60">
            <div className="flex-1 text-center sm:text-right">
              <h4 className="text-2xl font-bold text-foreground mb-2">هل ترغب في الانضمام؟</h4>
              <p className="text-muted-foreground font-medium">تواصل معنا عبر الواتساب لإتمام عملية التسجيل.</p>
            </div>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black bg-gradient-to-l from-primary to-primary/80 text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 text-xl"
            >
              <MessageCircle className="w-8 h-8" />
              اضغط للتسجيل
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
