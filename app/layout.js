import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";


export const metadata = {
  title: "Visit Venice",
  description: "A quick showcase of venice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-serif antialiased"
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
