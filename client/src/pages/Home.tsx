import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, BookOpen, ChevronLeft } from "lucide-react";
import { usePrograms } from "@/hooks/use-programs";
import aboutImage from "@assets/image_1773154454353.png";
import heroImage from "@assets/image_1773154442884.png";

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
      <section className="relative overflow-hidden w-full bg-primary/5 min-h-screen sm:min-h-[85vh] flex items-center py-12 sm:py-16">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] rounded-full bg-secondary/10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-primary/10 blur-3xl -z-10"></div>
        
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-right order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 mb-2 text-sm sm:text-base">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="font-bold text-foreground">تعلم كتاب الله</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
                طريقك <span className="text-gradient">لإتقان</span> تلاوة القرآن الكريم
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                نقدم برامج متخصصة في تعليم القراءة الصحيحة والتجويد وتحفيظ القرآن الكريم لجميع الأعمار والناطقين بغير العربية.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
                <a 
                  href="#programs"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2"
                >
                  اكتشف البرامج
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-secondary/10 to-primary/5 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
                <img 
                  src={aboutImage}
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
              className="space-y-4 sm:space-y-6 text-center lg:text-right order-1 lg:order-2"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4">
                  عن <span className="text-primary">مقرأة الهدى والنور</span>
                </h2>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                مقرأة الهدى والنور هي مؤسسة تعليمية متخصصة في تعليم القرآن الكريم وتحفيظه بكل احترافية واهتمام.
              </p>
              
              <div className="space-y-2 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm sm:text-base">✓</div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm sm:text-lg mb-0.5 sm:mb-1">برامج متخصصة</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base">نقدم برامج متكاملة تناسب جميع الأعمار والمستويات</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm sm:text-base">✓</div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm sm:text-lg mb-0.5 sm:mb-1">معلمون متدربون</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base">كادر تعليمي متميز وذو خبرة عالية في تدريس القرآن</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm sm:text-base">✓</div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm sm:text-lg mb-0.5 sm:mb-1">مناهج حديثة</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base">استخدام أحدث الطرق والمناهج التعليمية المثبتة</p>
                  </div>
                </div>
              </div>

              <a 
                href="#programs"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
              >
                استكشف البرامج
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 sm:py-20 lg:py-24 bg-background px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground">البرامج <span className="text-primary">التعليمية</span></h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium px-2">
              اختر البرنامج المناسب لك وانضم إلى قوافل حفظة كتاب الله
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse bg-card rounded-2xl sm:rounded-3xl h-80 sm:h-96 lg:h-[450px] border border-border/50">
                  <div className="h-40 sm:h-48 bg-muted rounded-t-2xl sm:rounded-t-3xl"></div>
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="h-5 sm:h-6 bg-muted rounded w-3/4"></div>
                    <div className="h-3 sm:h-4 bg-muted rounded w-full"></div>
                    <div className="h-3 sm:h-4 bg-muted rounded w-5/6"></div>
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            >
              {programs?.map((program) => (
                <motion.div key={program.id} variants={item}>
                  <Link 
                    href={`/program/${program.id}`}
                    className="block group h-full bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 border border-border/50 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                      {/* Program thumbnail */}
                      <img 
                        src={program.imageUrl} 
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 left-3 sm:left-4">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug drop-shadow-md line-clamp-2">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6 flex flex-col justify-between h-[calc(100%-10rem)] sm:h-[calc(100%-12rem)]">
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3 mb-4 sm:mb-6 font-medium">
                        {program.description}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between text-primary font-bold group-hover:text-secondary transition-colors text-sm sm:text-base">
                        <span>التفاصيل والتسجيل</span>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
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
