import './ui/global.css';
import Navbar from './ui/components/navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-poppins bg-gray-50 text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}