import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/201091044501"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse effect ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
    </motion.a>
  );
}
