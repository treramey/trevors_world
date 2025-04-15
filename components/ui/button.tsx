import type * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex overflow-hidden items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border border-blue-600 bg-gradient-to-t from-cyan-200 to-blue-500 shadow-sm hover:from-blue-600 hover:to-blue-800 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/60 before:to-transparent before:opacity-80 before:h-[45%] before:content-[''] ",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        aquaBlue: cn(
          "bg-gradient-to-b from-[#0342b9] to-[#83dffd] disabled:opacity-70! font-sm rounded-[20px]! border border-neutral-900/50 shadow-xs ",
          "after:absolute after:top-0 after:left-0 after:w-full after:h-3/6 after:rounded-tl-[60px] after:rounded-tr-[60px] after:rounded-bl-[160px] after:rounded-br-[160px] after:bg-gradient-to-b after:from-white/90 after:to-white/30 after:opacity-80 after:mix-blend-color-dodge after:z-1 after:overflow-hidden",
        ),
        aquaGrey: cn(
          "bg-gradient-to-b from-[#c5c5c5] to-[white_80%] disabled:opacity-70! font-sm rounded-[20px]! border border-neutral-900/50 shadow-xs ",
          "after:absolute after:top-0 after:left-0 after:w-full after:h-3/6 after:rounded-tl-[60px] after:rounded-tr-[60px] after:rounded-bl-[160px] after:rounded-br-[160px] after:bg-gradient-to-b after:from-white/90 after:to-white/30 after:opacity-80 after:mix-blend-color-dodge after:z-1 after:overflow-hidden",
        ),
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-6 my-2 rounded-md gap-1.5 px-4 py-[0.2rem] has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }), "relative")} {...props}>
      {props.children}
    </Comp>
  );
}

export { Button, buttonVariants };
