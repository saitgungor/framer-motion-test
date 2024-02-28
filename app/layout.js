import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-gradient-to-br from-blue-900 to blue-500 flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
