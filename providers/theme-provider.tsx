"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export type CustomThemeProviderProps = {
  children: React.ReactNode;
} & ThemeProviderProps;

export function ThemeProvider({
  children,
  ...props
}: CustomThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
