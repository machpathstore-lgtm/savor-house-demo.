import "./globals.css";

export const metadata = {
  title: "Savor House | Good Food. Great Company.",
  description:
    "Thoughtfully sourced ingredients, inspired cooking, and the kind of evenings that stay with you. Discover Savor House.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}