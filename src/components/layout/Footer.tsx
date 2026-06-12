export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/50">
      <div className="px-8 py-8 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-semibold text-primary mb-2">DocuMind AI</span>
          <p className="text-on-surface-variant text-sm">&copy; 2024 DocuMind AI. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
          {['Privacy Policy', 'Terms of Service', 'API Docs', 'Contact Support'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors text-xs font-semibold tracking-[0.05em]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
