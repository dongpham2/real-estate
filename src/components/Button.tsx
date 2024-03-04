import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../__generated__/utils";

const buttonVariants = cva(
  "text-base text-black hover:bg-gray-primary rounded-sm font-semibold",
  {
    variants: {
      variant: {
        default: "text-black",
        primary: "border",
      },
      size: {
        default: "rounded-md",
        sm: "px-4 py-3",
        lg: "rounded py-5 px-8",
        xl: "py-6 px-24",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
