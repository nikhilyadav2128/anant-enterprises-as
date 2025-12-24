import { motion } from "framer-motion";

export default function AboutAnant() {
  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT – STORY */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
          >
            कटिहार का सबसे भरोसेमंद  
            <span className="block mt-2 text-emerald-800">
              Mayuri ई-रिक्शा शोरूम – अनंत एंटरप्राइजेज
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-gray-600 leading-relaxed"
          >
            अनंत एंटरप्राइजेज कटिहार का पहला और सबसे लोकप्रिय Mayuri ई-रिक्शा
            शोरूम है, जहाँ ग्राहकों को पूरी तरह से तैयार ई-रिक्शा — कागज़ी
            कार्रवाई, फाइनेंस सुविधा और उसी दिन डिलीवरी के साथ उपलब्ध कराए जाते हैं।
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-gray-600 leading-relaxed"
          >
            हमारा मिशन है — हर व्यक्ति को आत्मनिर्भर बनाना, बिना किसी झंझट के।
            हम सिर्फ गाड़ियाँ नहीं बेचते, हम कमाई, आत्मनिर्भरता और अपने बिज़नेस
            की शुरुआत का अवसर देते हैं।
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 border-l-4 border-emerald-600 pl-5 text-gray-700 italic"
          >
            “हम सिर्फ गाड़ी नहीं बेचते, हम आत्मनिर्भरता की चाबी देते हैं —
            पूरी ईमानदारी और सेवा के साथ।”
          </motion.blockquote>

          {/* CONTACT */}
          <div className="mt-10 space-y-2 text-sm text-gray-700">
            <p>📍 भेरिया रहिका, प्रेम गैस एजेंसी के पास, कटिहार</p>
            <p>
              📞{" "}
              <a
                href="tel:+918292525904"
                className="hover:text-emerald-700 font-medium"
              >
                +91-82925-25904
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:anantenterprises2626@gmail.com"
                className="hover:text-emerald-700 font-medium"
              >
                anantenterprises2626@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT – FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "500+ संतुष्ट ग्राहक",
            "सभी लोकप्रिय Mayuri मॉडल उपलब्ध",
            "₹40,000 से डाउन पेमेंट शुरू",
            "आसान फाइनेंस सुविधा",
            "Lifetime Service Charge – बिल्कुल Free",
            "उसी दिन रजिस्ट्रेशन, इंश्योरेंस, डिलीवरी",
            "1500W मोटर, 130–145 KM रेंज",
            "Lithium बैटरी – 3 साल वारंटी",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <p className="text-sm font-medium text-gray-800">
                ✔ {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
