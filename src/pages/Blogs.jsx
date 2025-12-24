import { motion } from "framer-motion";

// ✅ FIX: image imports
import evolvingImg from "../assets/evolving.jpg";
import demandImg from "../assets/demand.jpg";
import blogERikshawImg from "../assets/blog-e-rikshaw.jpg";

const blogPosts = [
  {
    title: "Evolving Trends in Battery-operated E-Rickshaw",
    img: evolvingImg, // ✅ FIX
    snippet:
      "Discover the latest developments in battery-operated e-rickshaws and what it means for the future of sustainable urban transport.",
    link: "https://www.saeraauto.com/blog/evolving-trends-in-battery-operated-e-rickshaw-technology/",
  },
  {
    title: "Reasons Behind the Surge in E-Loaders",
    img: demandImg, // ✅ FIX
    snippet:
      "A detailed look into why E-Loaders are gaining popularity and how they are transforming last-mile delivery services.",
    link: "https://www.saeraauto.com/blog/reasons-behind-the-surge-in-demand-for-e-loaders/",
  },
  {
    title: "How to Choose the Right E-Rickshaw for Your Business",
    img: blogERikshawImg, // ✅ FIX
    snippet:
      "Tips and tricks for selecting the perfect e-rickshaw model for your needs, considering performance, battery life, and cost.",
    link: "https://www.saeraauto.com/blog/the-role-of-landscape-in-maximizing-e-rickshaw-mileage/",
  },
];

export default function Blogs() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Insights & Updates
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert opinions, trends & stories shaping the future of
            electric mobility.
          </p>
        </motion.div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.img}   // ✅ FIX
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.snippet}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-primary text-emerald-800 font-semibold text-sm group-hover:underline">
                    Read Article →
                  </span>
                  <span className="text-xs text-gray-400">
                    5 min read
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="https://www.saeraauto.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-emerald-800 font-medium hover:bg-primary/90 transition shadow-lg"
          >
            View All Blogs
            <span className="text-lg">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
