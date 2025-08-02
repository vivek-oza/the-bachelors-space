"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { ComponentProps } from "react";

const Toaster = ({ ...props }: ComponentProps<typeof Sonner>) => {
  const { theme = "light" } = useTheme();

  return (
    <Sonner
      theme={theme as ComponentProps<typeof Sonner>["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
