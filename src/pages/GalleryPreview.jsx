// src/pages/GalleryPreview.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../context/galleryData";

export default function GalleryPreview({ onSeeMore }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const previewImages = galleryImages.slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Happy Customers
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Real customers • Real deliveries • Real smiles
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {previewImages.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition"
              onClick={() => setSelectedImage(item.img)}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={`Customer ${item.id}`}
                className="
                  w-full aspect-[9/16] object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/0 group-hover:bg-black/30
                  transition duration-300
                "
              />

              {/* View hint */}
              <span
                className="
                  absolute bottom-3 left-1/2 -translate-x-1/2
                  text-xs text-white font-medium
                  bg-black/60 px-3 py-1 rounded-full
                  opacity-0 group-hover:opacity-100
                  transition
                "
              >
                View
              </span>
            </motion.div>
          ))}
        </div>

        {/* See More CTA */}
        <div className="flex justify-center mt-14">
          <button
            onClick={onSeeMore}
            className="
              group relative inline-flex items-center gap-3
              px-12 py-4 rounded-full
              bg-gradient-to-r from-emerald-800 to-emerald-900
              text-white font-semibold tracking-wide
              shadow-lg shadow-emerald-600/30
              hover:shadow-xl hover:shadow-emerald-600/40
              transition-all duration-300
              hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:ring-offset-2
            "
          >
            <span className="relative z-10">See All Customers</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition" />
          </button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ duration: 0.35 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="
                    absolute -top-4 -right-4
                    w-10 h-10 rounded-full
                    bg-white text-black
                    flex items-center justify-center
                    shadow-lg hover:scale-105 transition
                  "
                >
                  ✕
                </button>

                <img
                  src={selectedImage}
                  alt="Customer"
                  className="max-h-[85vh] rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
