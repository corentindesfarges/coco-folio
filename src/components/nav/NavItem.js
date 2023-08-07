export default function NavItem({ label, icon, href, photo }) {
  return (
    <a
      className="h-16 md:h-auto relative z-20 flex flex-col items-center justify-center md:py-4 bg-gradient-to-tr transition-all duration-300 text-white group cursor-pointer"
      aria-label={label}
      href={href}
    >
      <div className="absolute right-full top-0 h-full min-w-max px-4 hidden items-center bg-black/50 rounded-l-xl text-sm text-white md:flex invisible translate-x-10 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
        {label}
      </div>
      <span className="absolute top-0 right-0 hidden h-full w-1 bg-white/60 opacity-0 transition-opacity group-hover:opacity-100 md:block"></span>
      {icon}
      {photo && <span className="hidden mt-1 text-center text-xs md:hidden">{label}</span>}
      {!photo && <span className="mt-1 text-center text-xs md:hidden">{label}</span>}
    </a>
  )
}
