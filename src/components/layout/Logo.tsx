import { Sparkles } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  href?: string;
}

const sizeClasses = {
  sm: {
    container: "gap-1",
    en: "text-lg",
    ar: "text-xs",
    icon: 18,
  },
  md: {
    container: "gap-1.5",
    en: "text-2xl",
    ar: "text-sm",
    icon: 24,
  },
  lg: {
    container: "gap-2",
    en: "text-3xl",
    ar: "text-base",
    icon: 32,
  },
};

export function Logo({ size = "md", href = "/" }: LogoProps) {
  const classes = sizeClasses[size];

  const content = (
    <div className={`flex flex-col items-center ${classes.container}`}>
      <div className="flex items-center gap-1.5">
        <Sparkles
          className="text-gradient-purple-blue"
          size={classes.icon}
          aria-hidden="true"
        />
        <span className={`font-bold text-gradient-purple-blue ${classes.en}`}>
          ContentKit
        </span>
      </div>
      <span className={`text-muted-foreground ${classes.ar} tracking-wide`}>
        كونتنت كيت
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
