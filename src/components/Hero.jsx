import { motion } from "framer-motion";
import anantImg from "../assets/anant.jpg"; // ✅ FIX

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${anantImg})` }} // ✅ FIX
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-white">
        
        {/* LEFT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 text-sm font-semibold tracking-wide text-emerald-400"
          >
            Authorized Mayuri Dealer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Anant Enterprises
            <span className="block mt-4 text-2xl md:text-3xl font-medium text-slate-300">
              Leading E-Rickshaw Showroom in Katihar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-slate-300 max-w-xl leading-relaxed"
          >
            We provide reliable, eco-friendly Mayuri E-Rickshaws with complete
            sales, service and support. Trusted by individuals and businesses
            across the region.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-7 py-3 text-sm font-semibold rounded-md bg-emerald-500 text-black hover:bg-emerald-400 transition shadow-lg"
            >
              Get in Touch
            </a>

            <a
              href="#rickshaw"
              className="px-7 py-3 text-sm font-semibold rounded-md border border-white/30 hover:bg-white/10 transition"
            >
              View Models
            </a>
          </motion.div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={anantImg} // ✅ FIX
              alt="Anant Enterprises Showroom"
              className="w-full h-[460px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 bg-slate-900/90 backdrop-blur border border-white/10 rounded-xl px-6 py-4">
            <p className="text-sm font-semibold text-white">
              📍Bheriya Rhika, Katihar, Bihar
            </p>
            <p className="text-xs text-slate-400">
              E-Rickshaw Showroom
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
