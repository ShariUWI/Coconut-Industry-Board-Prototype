import { Link } from "react-router";
import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export function Card({ className = "", children, hover = false, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#E5E0D3] bg-white shadow-sm ${
        hover ? "transition hover:shadow-md" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "green" | "gold" | "cream" | "outline" | "brown" | "whatsapp";
  href?: string;
};

export function Btn({
  className = "",
  children,
  variant = "green",
  href,
  ...props
}: BtnProps) {
  const variants: Record<string, string> = {
    green: "bg-[#2A7C3F] text-white hover:bg-[#1F5D2F]",
    gold: "bg-[#F4C430] text-[#2D2416] hover:bg-[#D4A420]",
    cream: "bg-[#F5F3ED] text-[#2A7C3F] hover:bg-[#E8F5EC]",
    outline:
      "bg-transparent border border-[#2A7C3F] text-[#2A7C3F] hover:bg-[#E8F5EC]",
    brown: "bg-[#8B6F47] text-white hover:bg-[#6F5638]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1DA851]",
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: string;
  text?: string;
};

export function Badge({
  className = "",
  children,
  color,
  text,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        color ? "" : "bg-[#F4C430] text-[#2D2416]"
      } ${className}`}
      style={{
        backgroundColor: color,
        color: text,
        ...(props.style || {}),
      }}
      {...props}
    >
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  sub?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  sub,
  center = false,
}: SectionHeadingProps) {
  const text = subtitle || sub;

  return (
    <div className={`mb-6 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#2A7C3F]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-bold text-[#2D2416]">{title}</h2>

      {text && (
        <p className={`mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground ${center ? "mx-auto" : ""}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function CoconutDivider() {
  return (
    <div className="my-6 flex items-center justify-center gap-2 text-[#8B6F47]">
      <div className="h-px w-16 bg-[#E5E0D3]" />
      <span>🌴</span>
      <div className="h-px w-16 bg-[#E5E0D3]" />
    </div>
  );
}
