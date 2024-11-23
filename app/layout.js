

import "./globals.css";
export const metadata = {
  title: "Booking App",
  description: "created by group 29",
}; 


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-gray-500">{children}</body>
    </html>
  );
}

