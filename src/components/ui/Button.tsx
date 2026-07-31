import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

type ButtonVariant = "primary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  magnetic?: boolean;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ children, variant = "primary", className = "", magnetic = true, href, ...props }: ButtonProps | AnchorProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-deep to-gold text-white shadow-[0_4px_14px_0_rgba(200,155,83,0.39)] hover:shadow-[0_6px_20px_rgba(200,155,83,0.5)] border border-gold-light/20",
    ghost: "bg-surface text-text-primary border border-hairline hover:border-gold hover:text-gold hover:bg-surface-hover shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(200,155,83,0.1)]"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const renderContent = () => {
    if (href) {
      return (
        <Link href={href} className={combinedStyles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </Link>
      );
    }
    return (
      <button className={combinedStyles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  };

  if (magnetic) {
    return <MagneticButton>{renderContent()}</MagneticButton>;
  }

  return renderContent();
}
