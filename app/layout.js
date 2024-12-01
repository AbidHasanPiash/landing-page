import { Inter, Satisfy } from 'next/font/google'
import "./globals.css";
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import appConfig from '@/configs/app.config';
import images from '@/configs/img.config';

const inter = Inter({ subsets: ['latin'] });
const satisfy = Satisfy({
  weight: '400',  // or specify other weights you need
  subsets: ['latin'],  // Make sure to use 'bengali' subset
  variable: '--font-satisfy',
});

export const metadata = {
  title: appConfig.title,
  description: appConfig.description,
  openGraph: {
    title: `About Developer - ${appConfig.author.name}`,
    description: `Learn more about ${appConfig.author.name} and how we help manage global remote teams.`,
    // url: appConfig.author.website,
    // images: [
    //   {
    //     url: images.logo,
    //     width: 1200,
    //     height: 630,
    //     alt: 'About page preview image',
    //   },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${satisfy.variable} antialiased bg-background text-foreground`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
