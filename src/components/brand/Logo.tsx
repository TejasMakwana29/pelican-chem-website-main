import Image from "next/image";
import Link from "next/link";

type LogoVariant = "full" | "mark";
type LogoTheme = "light" | "dark";

interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
  href?: string;
  priority?: boolean;
}

const sizes = {
  full: { width: 160, height: 112, className: "h-14 w-auto sm:h-16" },
  mark: { width: 56, height: 56, className: "h-11 w-11" },
};

export function Logo({
  variant = "full",
  theme = "light",
  className = "",
  href = "/",
  priority = false,
}: LogoProps) {
  const { width, height, className: sizeClass } = sizes[variant];
  const src =
    variant === "mark"
      ? "/images/pelican-mark.svg"
      : theme === "dark"
        ? "/images/pelican-logo-light.svg"
        : "/images/pelican-logo.svg";

  const image = (
    <Image
      src={src}
      alt="Pelican Chem"
      width={width}
      height={height}
      priority={priority}
      className={`${sizeClass} object-contain object-left ${className}`}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="group inline-flex shrink-0 items-center transition-opacity hover:opacity-90">
      {image}
    </Link>
  );
}
