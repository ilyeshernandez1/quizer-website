import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar, NavbarProps } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizer - The quiz builder powered by AI",
  description:
    "Quizer is an innovative quiz builder that harnesses the power of artificial intelligence to create engaging and personalized quizzes. Tailor-made for educators, businesses, and quiz enthusiasts, Quizer streamlines the quiz creation process, making it easy to generate dynamic and challenging questions. With AI-driven insights, Quizer ensures a unique and adaptive quiz-taking experience. Revolutionize your quizzes with Quizer - where intelligence meets interactivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: NavbarProps["links"] = [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Plugins",
      href: "/plugins",
    },
    {
      label: "Documentation",
      href: "/docs",
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar links={links} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
