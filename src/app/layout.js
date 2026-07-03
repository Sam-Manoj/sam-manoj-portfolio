import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat_Alternates({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'] 
});

export const metadata = {
  title: "Sam Manoj | Portfolio",
  description: "Full-Stack Developer & UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#0b001a] text-white`}>
        {children}
      </body>
    </html>
  );
}