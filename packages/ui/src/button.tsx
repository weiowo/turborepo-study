"use client";

import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={clsx('flex w-full items-center justify-center bg-primary-500 text-secondary-500 gap-2 rounded-full p-3', className)}>
      {children}
    </button>
  );
};