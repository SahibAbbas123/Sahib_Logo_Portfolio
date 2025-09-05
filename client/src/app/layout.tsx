import type { Metadata } from "next";
import "./globals.css"; // <-- required

export const metadata: Metadata = {
  title: "Sahib's Logo Portfolio",
  description: "Selected logo marks & wordmarks by Sahib.",
  openGraph: { title: "YourName — Logo Portfolio", description: "Selected logo marks & wordmarks.", images: ["/social-preview.png"] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-white to-zinc-50 text-zinc-900 selection:bg-indigo-200/60 opacity-0 animate-fade-in">
  {children}
</body>
    </html>
  );
}