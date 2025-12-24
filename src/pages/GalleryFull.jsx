// src/pages/GalleryFull.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../context/galleryData";

export default function GalleryFull() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our <span className="text-primary">Happy Customers</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              className="overflow-hidden rounded-xl shadow cursor-pointer bg-white"
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelectedImage(item.img)}
            >
              <img
                src={item.img}
                alt={`Customer ${item.id}`}
                className="w-full aspect-[9/16] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal Preview */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* ❌ Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-4 -right-4 w-9 h-9 bg-white rounded-full
                             text-black text-xl font-bold shadow-md
                             hover:bg-gray-200 transition"
                >
                  ×
                </button>

                <img
                  src={selectedImage}
                  alt="Preview"
                  className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
