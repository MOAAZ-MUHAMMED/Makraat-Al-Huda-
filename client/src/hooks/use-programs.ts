import { useQuery } from "@tanstack/react-query";
import tajweedImage from "@assets/image_1773154400348.png";
import quranTeachingImage from "@assets/image_1773154687691.png";
import childrenImage from "@assets/image_1773154414478.png";
import kidsImage from "@assets/image_1773154464123.png";
import mosqueImage from "@assets/image_1773190973462.png";
import quranMosqueImage from "@assets/image_1773327118660.png";
import kImage from "@assets/k.jpg";

const PROGRAMS = [
  {
    id: 1,
    title: "تعليم القراءة الصحيحة والتجويد",
    description: "برنامج تعليم القراءة الصحيحة والتجويد للناطقين باللغة العربية وغير الناطقين.",
    imageUrl: tajweedImage,
    detailsImage: quranTeachingImage,
    details: "يهدف هذا البرنامج إلى تعليم أساسيات القراءة الصحيحة للقرآن الكريم مع تطبيق أحكام التجويد بشكل عملي ونظري، مناسب للناطقين بالعربية ولغير الناطقين بها من خلال مناهج متخصصة.",
    featureBoxes: [
      {
        title: "تعليم التجويد",
        description: "شرح مفصل لأحكام التجويد وتطبيقها عملياً"
      },
      {
        title: "أحكام القراءة",
        description: "تصحيح الأخطاء الشائعة في تلاوة القرآن"
      },
      {
        title: "تصحيح النطق",
        description: "مخارج الحروف والنطق الصحيح لكل حرف"
      }
    ]
  },
  {
    id: 2,
    title: "تحفيظ القرآن الكريم",
    description: "برنامج تحفيظ القرآن الكريم لكل الأعمار (نساء ورجال).",
    imageUrl: quranMosqueImage,
    detailsImage: quranTeachingImage,
    details: "برنامج متكامل لحفظ القرآن الكريم والمراجعة المستمرة، متاح لجميع الأعمار من الرجال والنساء بمستويات مختلفة تناسب قدرة كل مشارك.",
    featureBoxes: [
      {
        title: "حفظ القرآن",
        description: "برنامج منظم لحفظ القرآن الكريم كاملاً"
      },
      {
        title: "المراجعة المستمرة",
        description: "جلسات مراجعة دورية للحفاظ على الحفظ"
      },
      {
        title: "التقييم المنتظم",
        description: "تقييم مستمر لتقدم الطالب والمتابعة الدقيقة"
      }
    ]
  },
  {
    id: 3,
    title: "تعليم القراءة والكتابة للأطفال",
    description: "برنامج مخصص لتعليم الأطفال القراءة والكتابة بأسلوب شيق وممتع.",
    imageUrl: childrenImage,
    detailsImage: kImage,
    details: "تأسيس الأطفال في القراءة والكتابة باللغة العربية بطريقة القاعدة النورانية أو البغدادية لتأهيلهم لقراءة القرآن الكريم بشكل صحيح وسهل.",
    featureBoxes: [
      {
        title: "القاعدة النورانية",
        description: "طريقة تعليمية فعالة لتعلم قراءة القرآن بسهولة"
      },
      {
        title: "كتابة الحروف",
        description: "تعلم كتابة الحروف العربية بشكل صحيح"
      },
      {
        title: "التفاعل والمشاركة",
        description: "أنشطة تفاعلية وممتعة تشجع التعلم"
      }
    ]
  },
  {
    id: 4,
    title: "مقرر رياض الأطفال والابتدائي",
    description: "برنامج شامل لمقرر رياض الأطفال والصف الأول والثاني الابتدائي.",
    imageUrl: kidsImage,
    detailsImage: quranTeachingImage,
    details: "دعم تعليمي وتأسيس شامل لمقررات رياض الأطفال والصفوف الأولى من المرحلة الابتدائية لضمان تفوق الطالب في دراسته.",
    featureBoxes: [
      {
        title: "اللغة العربية",
        description: "تعليم القراءة والكتابة والقواعد النحوية"
      },
      {
        title: "الرياضيات",
        description: "أساسيات العمليات الحسابية والأرقام"
      },
      {
        title: "العلوم",
        description: "مقدمة شاملة للعلوم الطبيعية والاجتماعية"
      }
    ]
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
