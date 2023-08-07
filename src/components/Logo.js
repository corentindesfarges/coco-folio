import Image from "next/image"

export default function Logo({ large = false }) {
  return (
    <div className="flex items-center justify-center">
      <div className={large ? `relative w-32 h-32 lg:w-52 lg:h-52` : `relative w-32 h-32 lg:w-32 lg:h-32`}>
        <Image key={Math.random()} className="rounded-full border-4" src="/me.jpeg" alt="Me" fill={true} priority />
      </div>
    </div>
  )
}
