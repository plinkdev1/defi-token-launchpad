import Image from "next/image"

interface TreezuresLogoProps {
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: { container: "h-6 w-6", image: 24 },
  md: { container: "h-8 w-8", image: 32 },
  lg: { container: "h-10 w-10", image: 40 },
}

export function TreezuresLogo({ size = "md" }: TreezuresLogoProps) {
  const { container, image } = sizeMap[size]

  return (
    <div className={`${container} flex items-center justify-center rounded-lg bg-primary p-1`}>
      <Image
        src="/logos/treezures-logo.png"
        alt="Treezures Logo"
        width={image}
        height={image}
        priority
        className="h-full w-full object-contain"
      />
    </div>
  )
}
