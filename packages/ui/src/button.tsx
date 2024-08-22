"use client";

import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (    
    <button 
    className={clsx('flex w-full text-base font-semibold items-center',
    'justify-center gap-2 bg-linear text-secondary-500 rounded-3xl p-3', className)}>
      {children}
    </button>
  );
};

