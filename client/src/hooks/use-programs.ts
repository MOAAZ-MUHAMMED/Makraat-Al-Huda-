import { useQuery } from "@tanstack/react-query";
import tajweedImage from "@assets/image_1773154400348.png";
import quranTeachingImage from "@assets/image_1773154687691.png";
import childrenImage from "@assets/image_1773154414478.png";
import kidsImage from "@assets/image_1773154464123.png";

const PROGRAMS = [
  {
    id: 1,
    title: "تعليم القراءة الصحيحة والتجويد",
    description: "برنامج تعليم القراءة الصحيحة والتجويد للناطقين باللغة العربية وغير الناطقين.",
    imageUrl: tajweedImage,
    details: "يهدف هذا البرنامج إلى تعليم أساسيات القراءة الصحيحة للقرآن الكريم مع تطبيق أحكام التجويد بشكل عملي ونظري، مناسب للناطقين بالعربية ولغير الناطقين بها من خلال مناهج متخصصة."
  },
  {
    id: 2,
    title: "تحفيظ القرآن الكريم",
    description: "برنامج تحفيظ القرآن الكريم لكل الأعمار (نساء ورجال).",
    imageUrl: quranTeachingImage,
    details: "برنامج متكامل لحفظ القرآن الكريم والمراجعة المستمرة، متاح لجميع الأعمار من الرجال والنساء بمستويات مختلفة تناسب قدرة كل مشارك."
  },
  {
    id: 3,
    title: "تعليم القراءة والكتابة للأطفال",
    description: "برنامج مخصص لتعليم الأطفال القراءة والكتابة بأسلوب شيق وممتع.",
    imageUrl: childrenImage,
    details: "تأسيس الأطفال في القراءة والكتابة باللغة العربية بطريقة القاعدة النورانية أو البغدادية لتأهيلهم لقراءة القرآن الكريم بشكل صحيح وسهل."
  },
  {
    id: 4,
    title: "مقرر رياض الأطفال والابتدائي",
    description: "برنامج شامل لمقرر رياض الأطفال والصف الأول والثاني الابتدائي.",
    imageUrl: kidsImage,
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
