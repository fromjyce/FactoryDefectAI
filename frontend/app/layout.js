import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const space_grotesk_init = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "FactoryDefectAI",
  description: "An interactive prototype showcasing real-time factory defect detection using Intel® AI PC and OpenVINO™ Toolkit for Industry 4.0.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins_init.variable} ${space_grotesk_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
