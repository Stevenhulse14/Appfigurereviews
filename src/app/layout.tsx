import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import { Providers } from "./providers";

export const metadata = {
  title: "Appfigures Reviews",
  description: "view and analyze app reviews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-xs min-h-screen bg-gradient-to-r from-gradient-start to-gradient-end">
        <Providers>
          <NavigationBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
