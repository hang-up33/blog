import "./globals.css";

export const metadata = {
  title: "ブログ",
  description: "個人ブログ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
