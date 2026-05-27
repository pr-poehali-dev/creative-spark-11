import { motion } from "framer-motion";

export default function Promo() {
  return (
    <div
      id="about"
      className="relative min-h-screen flex items-center justify-center px-8 md:px-16 z-10 py-24"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Glow orbs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600/30 rounded-full blur-3xl" />

          <p className="text-purple-300 uppercase text-sm tracking-widest mb-6 relative z-10">Обо мне</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight relative z-10">
            Привет, я Ютер
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed relative z-10 max-w-2xl mx-auto">
            Это мой личный уголок в интернете. Здесь я собираю всё важное — ссылки,
            страницы, проекты. Если ты здесь, значит, ты нашёл правильное место.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4 relative z-10">
            {["Дизайн", "Разработка", "Идеи", "Проекты"].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 text-sm hover:bg-purple-500/20 hover:text-white hover:border-purple-400/50 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
