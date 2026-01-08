import type { Metadata } from "next";
import { clash, satoshi, fraunces } from '@/styles/fonts';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Navigation } from '@/components/Navigation';
import { NavigationProvider } from '@/context/NavigationContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuroraBackground } from '@/components/AuroraBackground';
import "./globals.css";


export const metadata: Metadata = {
  title: 'Ben Price | AI-Focused Web Developer & Solutions Engineer',
  description: 'Portfolio showcasing my software engineering projects and technical capabilities.',
  keywords: ['web developer', 'AI solutions', 'full-stack developer', 'portfolio', 'projects', 'react', 'typescript', 'AI integration', 'web development'],
  authors: [{ name: 'Ben Price' }],
  openGraph: {
    title: 'Ben Price | AI-Focused Web Developer & Solutions Engineer',
    description: 'Portfolio showcasing my software engineering projects and technical capabilities.',
    url: 'https://benprice.dev',
    siteName: 'Ben Price Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Price | AI-Focused Web Developer & Solutions Engineer',
    description: 'Portfolio showcasing my software engineering projects and technical capabilities.',
    creator: '@benprice',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://benprice.dev'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clash.variable} ${satoshi.variable} ${fraunces.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-accent-purple-200 selection:text-accent-purple-900`}
      >
        <ThemeProvider>
          <AuroraBackground />
          <NavigationProvider>
            <div className="flex min-h-screen h-screen overflow-x-hidden">
              <Navigation />
              <main className="flex-1 relative w-full transition-all duration-300 ease-in-out overflow-x-hidden">
                <div className="w-full">
                  {children}
                </div>
                <ThemeToggle />
              </main>
            </div>
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
