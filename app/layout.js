// app/layout.js
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "Keep Track of Your Todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
