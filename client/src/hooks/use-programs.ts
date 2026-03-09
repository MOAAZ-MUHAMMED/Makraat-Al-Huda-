import { useQuery } from "@tanstack/react-query";

const PROGRAMS = [
  {
    id: 1,
    title: "تعليم القراءة الصحيحة والتجويد",
    description: "برنامج تعليم القراءة الصحيحة والتجويد للناطقين باللغة العربية وغير الناطقين.",
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaab31f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "يهدف هذا البرنامج إلى تعليم أساسيات القراءة الصحيحة للقرآن الكريم مع تطبيق أحكام التجويد بشكل عملي ونظري، مناسب للناطقين بالعربية ولغير الناطقين بها من خلال مناهج متخصصة."
  },
  {
    id: 2,
    title: "تحفيظ القرآن الكريم",
    description: "برنامج تحفيظ القرآن الكريم لكل الأعمار (نساء ورجال).",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "برنامج متكامل لحفظ القرآن الكريم والمراجعة المستمرة، متاح لجميع الأعمار من الرجال والنساء بمستويات مختلفة تناسب قدرة كل مشارك."
  },
  {
    id: 3,
    title: "تعليم القراءة والكتابة للأطفال",
    description: "برنامج مخصص لتعليم الأطفال القراءة والكتابة بأسلوب شيق وممتع.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "تأسيس الأطفال في القراءة والكتابة باللغة العربية بطريقة القاعدة النورانية أو البغدادية لتأهيلهم لقراءة القرآن الكريم بشكل صحيح وسهل."
  },
  {
    id: 4,
    title: "مقرر رياض الأطفال والابتدائي",
    description: "برنامج شامل لمقرر رياض الأطفال والصف الأول والثاني الابتدائي.",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: "دعم تعليمي وتأسيس شامل لمقررات رياض الأطفال والصفوف الأولى من المرحلة الابتدائية لضمان تفوق الطالب في دراسته."
  }
];

export function usePrograms() {
  return useQuery({
    queryKey: ['programs'],
    queryFn: async () => PROGRAMS,
  });
}

export function useProgram(id: number) {
  return useQuery({
    queryKey: ['programs', id],
    queryFn: async () => PROGRAMS.find(p => p.id === id) || null,
    enabled: !!id && !isNaN(id),
  });
}
