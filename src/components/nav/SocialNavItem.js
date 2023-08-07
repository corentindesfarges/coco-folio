export default function SocialNavItem({ label, icon, href }) {
  return (
    <a className="group block text-center" aria-label={label} href={href}>
      {icon}
    </a>
  )
}
