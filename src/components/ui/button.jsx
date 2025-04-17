import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow hover:bg-blue-700 focus-visible:ring-blue-400",

        destructive:
          "bg-red-600 text-white shadow hover:bg-red-700 focus-visible:ring-red-400",

        outline:
          "border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 focus-visible:ring-gray-300",

        secondary:
          "bg-gray-100 text-gray-800 hover:bg-gray-200 focus-visible:ring-gray-300",

        ghost:
          "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-200",

        link:
          "text-blue-600 hover:text-blue-800 underline underline-offset-4 focus-visible:ring-blue-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
