import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-white overflow-x-hidden">
        <div className="w-screen h-16 bg-slate-100 fixed top-0 border-b border-b-slate-300"></div>
        {children}
      </body>
    </html>
  );
}
