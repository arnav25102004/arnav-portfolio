"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function ProfileAvatar({ className = "", size = "lg" }: ProfileAvatarProps) {
  const [imgError, setImgError] = useState(false);

  const sizeClass = size === "lg" ? "w-full" : size === "md" ? "w-64" : "w-40";

  if (!imgError) {
    return (
      <div className={`${sizeClass} aspect-[4/5] rounded-2xl overflow-hidden relative ${className}`}>
        <Image
          src="/images/profile.jpg"
          alt="Arnav Narula"
          fill
          className="object-cover"
          onError={() => setImgError(true)}
          priority
        />
      </div>
    );
  }

  /* Placeholder when no photo available */
  return (
    <div
      className={`${sizeClass} aspect-[4/5] rounded-2xl overflow-hidden relative ${className}`}
      aria-label="Arnav Narula profile placeholder"
    >
      {/* Gradient base */}
      <div className="absolute inset-0 bg-linear-to-br from-accent/20 via-navy-600 to-navy-700" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Corner accent lines */}
      <div className="absolute top-4 left-4 w-8 h-px bg-accent/50" />
      <div className="absolute top-4 left-4 w-px h-8 bg-accent/50" />
      <div className="absolute bottom-4 right-4 w-8 h-px bg-accent/50" />
      <div className="absolute bottom-4 right-4 w-px h-8 bg-accent/50" />

      {/* Initials */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="font-display font-black text-6xl text-white/15 select-none tracking-tight">
          AN
        </span>
        <span className="font-mono text-xs text-accent/60 tracking-[0.25em] uppercase">
          Add photo
        </span>
      </div>

      {/* Subtle inner border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/8 pointer-events-none" />
    </div>
  );
}
