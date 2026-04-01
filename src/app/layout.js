import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  title: "Career Mitra: Careermitra: Get Personalized Govt Job Alerts | Latest Sarkari Jobs India 2026",
  description: "Find the latest government job alerts in India including central and state jobs, SSC, UPSC, banking, railway, and defense jobs. Get real-time personalized notifications 2026 with Careermitra.",
  keywords: "Career Mitra, government job alerts, free job alert India, latest govt jobs 2026, sarkari naukri, govt job notifications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col pt-">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
