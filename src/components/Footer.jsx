import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Anant Enterprises</h3>
          <p className="text-gray-400 text-sm mt-2">
            Leading Mayuri E-Rickshaw Showroom in Katihar
          </p>
        </div>

        {/* Facebook Link */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 hidden md:inline">Follow us:</span>
          <a
            href="https://www.facebook.com/profile.php?id=61552527054545"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition flex items-center justify-center"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 Anant Enterprises. All Rights Reserved.
      </div>
    </footer>
  );
}
