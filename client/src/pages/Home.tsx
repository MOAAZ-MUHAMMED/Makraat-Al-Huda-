import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, BookOpen, ChevronLeft } from "lucide-react";
import { usePrograms } from "@/hooks/use-programs";

export default function Home() {
  const { data: programs, isLoading } = usePrograms();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full bg-primary/5 min-h-[85vh] flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-secondary/10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 text-center lg:text-right"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 mb-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span className="font-bold text-foreground">تعلم كتاب الله</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground leading-[1.2]">
                طريقك <span className="text-gradient">لإتقان</span> تلاوة القرآن الكريم
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                نقدم برامج متخصصة في تعليم القراءة الصحيحة والتجويد وتحفيظ القرآن الكريم لجميع الأعمار والناطقين بغير العربية.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="#programs"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  اكتشف البرامج
                  <ChevronLeft className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-square border-8 border-white dark:border-card">
                {/* Landing page hero open Quran */}
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" 
                  alt="Quran" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border animate-bounce-slow">
                <div className="text-3xl font-black text-secondary mb-1">+1000</div>
                <div className="text-foreground font-bold">طالب وطالبة</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbdf26ce6c3f?w=600&q=80" 
                  alt="عن مقرأة الهدى والنور" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 text-right"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                  عن <span className="text-primary">مقرأة الهدى والنور</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                مقرأة الهدى والنور هي مؤسسة تعليمية متخصصة في تعليم القرآن الكريم وتحفيظه بكل احترافية واهتمام.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">برامج متخصصة</h3>
                    <p className="text-muted-foreground">نقدم برامج متكاملة تناسب جميع الأعمار والمستويات</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">معلمون متدربون</h3>
                    <p className="text-muted-foreground">كادر تعليمي متميز وذو خبرة عالية في تدريس القرآن</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">مناهج حديثة</h3>
                    <p className="text-muted-foreground">استخدام أحدث الطرق والمناهج التعليمية المثبتة</p>
                  </div>
                </div>
              </div>

              <a 
                href="#programs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                استكشف البرامج
                <ChevronLeft className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">البرامج <span className="text-primary">التعليمية</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              اختر البرنامج المناسب لك وانضم إلى قوافل حفظة كتاب الله
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse bg-card rounded-3xl h-[450px] border border-border/50">
                  <div className="h-48 bg-muted rounded-t-3xl"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {programs?.map((program) => (
                <motion.div key={program.id} variants={item}>
                  <Link 
                    href={`/program/${program.id}`}
                    className="block group h-full bg-card rounded-3xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 border border-border/50 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="relative h-56 overflow-hidden bg-muted">
                      {/* Program thumbnail Islamic education */}
                      <img 
                        src={program.imageUrl || "https://images.unsplash.com/photo-1609599006353-e629aaab31f5?w=800&q=80"} 
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                      <div className="absolute bottom-4 right-4 left-4">
                        <h3 className="text-xl font-bold text-white leading-snug drop-shadow-md">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col justify-between h-[calc(100%-14rem)]">
                      <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6 font-medium">
                        {program.description}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between text-primary font-bold group-hover:text-secondary transition-colors">
                        <span>التفاصيل والتسجيل</span>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                          <ArrowLeft className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              {programs?.length === 0 && (
                <div className="col-span-full text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-border">
                  <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">لا توجد برامج حالياً</h3>
                  <p className="text-muted-foreground mt-2">سيتم إضافة البرامج قريباً إن شاء الله</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
