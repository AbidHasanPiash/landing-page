import { cn } from '@/lib/utils'
import React from 'react'

export default function Button({ className, children, ...props }) {
    return (
      <button
        {...props}
        className={cn(
          "relative group rounded-full text-secondary bg-primary",
          "hover:scale-90 transition-all duration-200",
          className
        )}
      >
        {children}
      </button>
    );
  }