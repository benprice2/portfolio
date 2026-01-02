import localFont from 'next/font/local';
import { Fraunces } from 'next/font/google';

export const clash = localFont({
  src: [
    {
      path: '../fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Variable.woff2',
      style: 'normal',
    }
  ],
  variable: '--font-clash'
});

export const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2',
      style: 'normal',
    }
  ],
  variable: '--font-satoshi'
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces'
});
