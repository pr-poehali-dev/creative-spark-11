import { motion } from "framer-motion";

const features = [
  { icon: "🚀", title: "Быстро", desc: "Всё работает мгновенно, без лагов и задержек" },
  { icon: "🎨", title: "Красиво", desc: "Дизайн с душой, который не оставит равнодушным" },
  { icon: "🔗", title: "Удобно", desc: "Короткие ссылки и страницы всегда под рукой" },
  { icon: "🌙", title: "Ночью тоже", desc: "Тёмный режим, приятный для глаз в любое время" },
];

export default function Featured() {
  return (
    <div id="pages" className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-purple-300 uppercase text-sm tracking-widest mb-4">Что тут есть</p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight">
          Всё,<br />что нужно
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(167,139,250,0.2)] transition-all duration-400 group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
