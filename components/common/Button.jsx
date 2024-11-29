import { cn } from '@/lib/utils'
import React from 'react'

export default function Button({ className, children, ...props }) {
    return (
      <button
        {...props}
        className={cn(
          "relative group rounded-full text-secondary bg-primary",
          className
        )}
      >
        {children}
      </button>
    );
  }