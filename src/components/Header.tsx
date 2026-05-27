export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="flex justify-center gap-8 md:gap-12">
        {[
          { label: "Главная", href: "#" },
          { label: "Страницы", href: "#pages" },
          { label: "Короткие ссылки", href: "#links" },
          { label: "Обо мне", href: "#about" },
          { label: "Контакты", href: "#contact" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide hover:drop-shadow-[0_0_8px_rgba(180,100,255,0.8)]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
