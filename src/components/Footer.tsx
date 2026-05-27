export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #0f0a1e 0%, #1a0a2e 50%, #0a0f2e 100%)" }}
          >
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-400 text-xs sm:text-sm tracking-widest">Навигация</h3>
                {["Главная", "Страницы", "Короткие ссылки"].map((l) => (
                  <a key={l} href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">{l}</a>
                ))}
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-blue-400 text-xs sm:text-sm tracking-widest">Связь</h3>
                {["Telegram", "VK", "Email"].map((l) => (
                  <a key={l} href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">{l}</a>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-black tracking-tight rainbow-text">
                ЮТЕР
              </h1>
              <p className="text-white/40 text-sm sm:text-base">{new Date().getFullYear()} — Ютер здесь</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
