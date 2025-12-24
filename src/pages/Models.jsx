import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ✅ IMPORT IMAGES (Vercel safe) */
import autoShape from "../assets/autoshape.jpg";
import eCart from "../assets/e-cart.jpg";
import mayuri1000 from "../assets/mayuri-1000.jpeg";
import proAuto from "../assets/proauto.jpg";

export default function Models() {
  const [openProAuto, setOpenProAuto] = useState(true);

  const items = [
    {
      name: "Mayuri AutoShape",
      img: autoShape,
      alt: "Mayuri AutoShape E-Rickshaw",
      link: "https://www.saeraauto.com/product/mayuri-autoshape/",
    },
    {
      name: "Mayuri E-Cart Loader",
      img: eCart,
      alt: "Mayuri E-Cart Loader",
      link: "https://www.saeraauto.com/product/mayuri-e-cart-loader/",
    },
    {
      name: "Mayuri Grand-1000",
      img: mayuri1000,
      alt: "Mayuri Grand 1000 E-Rickshaw",
      link: "https://www.saeraauto.com/product/mayuri-pro-1000/",
    },
    {
      name: "Mayuri Pro Auto",
      img: proAuto,
      alt: "Mayuri Pro Auto E-Rickshaw",
      isDropdown: true,
    },
  ];

  return (
    <section id="rickshaw" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Available Mayuri Models
          </h2>
          <p className="mt-4 text-gray-600">
            Trusted performance, strong body & best earning potential
          </p>
        </div>

        {/* MODELS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden"
            >

              {/* IMAGE */}
              {item.isDropdown ? (
                <div
                  onClick={() => setOpenProAuto(!openProAuto)}
                  className="relative w-full overflow-hidden cursor-pointer"
                  style={{ paddingTop: "148.3%" }}
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-between p-4">
                    <div>
                      <h3 className="text-white text-lg font-semibold">
                        Mayuri Pro Auto
                      </h3>
                      <p className="text-xs text-gray-200">
                        Heavy Duty • High Earnings
                      </p>
                    </div>

                    <span className="text-white text-xs font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                      {openProAuto ? "Hide ↑" : "Details ↓"}
                    </span>
                  </div>
                </div>
              ) : (
                <a href={item.link} target="_blank">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ paddingTop: "148.3%" }}
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        View Details →
                      </span>
                    </div>
                  </div>
                </a>
              )}

              {/* CONTENT */}
              {!item.isDropdown && (
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Powerful motor • Heavy body • Best mileage
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    className="inline-block mt-5 text-sm font-medium text-white bg-emerald-800 px-5 py-2 rounded-full hover:bg-emerald-900 transition"
                  >
                    Enquire Now
                  </a>
                </div>
              )}

              {/* DROPDOWN */}
              {item.isDropdown && (
                <AnimatePresence>
                  {openProAuto && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                      className="bg-gray-50 border-t border-gray-200 px-5 py-6 text-sm"
                    >
                      <div className="space-y-3">
                        <Spec label="Motor" value="1500 Watt Powerful Motor" />
                        <Spec label="Battery" value="5 Battery Setup" />
                        <Spec label="Body" value="Wide Heavy Duty Body" />
                      </div>

                      <a
                        href="/contact"
                        className="block mt-6 text-center text-sm font-medium text-white bg-emerald-800 py-2.5 rounded-full hover:bg-emerald-900 transition"
                      >
                        Enquire Now
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SPEC ROW */
function Spec({ label, value }) {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg px-4 py-2 shadow-sm">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-gray-900 font-semibold">{value}</span>
    </div>
  );
}
