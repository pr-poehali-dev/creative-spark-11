import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [notif, setNotif] = useState(false);

  const handleButtonClick = () => {
    setNotif(true);
    setTimeout(() => setNotif(false), 3000);
  };

  return (
    <div className="relative min-h-screen flex pt-20">
      {/* Main content left */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="rainbow-text text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Ютер здесь
          </h1>
          <p className="rainbow-text text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-semibold">
            докс на заказ 3 пиццы
          </p>
          <p className="rainbow-text text-lg md:text-xl font-bold blink-text">
            чипс рукоблудик
          </p>

        </motion.div>
      </div>

      {/* Right panel */}
      <div className="w-24 md:w-36 flex flex-col items-center justify-center z-10 pr-6 md:pr-10">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <button
            onClick={handleButtonClick}
            className="red-btn writing-mode-vertical text-white font-bold text-sm py-6 px-4 rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:shadow-[0_0_50px_rgba(239,68,68,0.9)] active:scale-95 transition-all duration-200 cursor-pointer"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Нажми, нажми!
          </button>

          {/* Notification */}
          {notif && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white text-sm whitespace-nowrap shadow-lg"
            >
              ИДИ НАХУЙ
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}