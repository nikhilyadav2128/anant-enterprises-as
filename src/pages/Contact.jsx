import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import ownerImg from "../assets/ankur.jpg"; // ✅ FIX

export default function OwnerContact() {
  const contactData = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      label: "Phone",
      value: "+91 82925-25904",
      link: "tel:+918292525904",
      button: "Call Now",
      color: "bg-emerald-600",
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: "Email",
      value: "anantenterprises2626@gmail.com",
      link: "mailto:anantenterprises2626@gmail.com",
      button: "Email Now",
      color: "bg-blue-600",
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      label: "Address",
      value: "Purnea Katihar Road NH-131A, Katihar, Bihar",
      link: "https://www.google.com/maps/dir//Anant+Enterprises,+Bheria+Rahika,+Purnea-Katihar+Rd,+Mojheli,+Katihar,+Bihar+854106/@25.5740997,87.5539404,17z/data=!4m16!1m7!3m6!1s0x39faabf6d03bcb5f:0x495eabe66843848f!2sAnant+Enterprises!8m2!3d25.5740997!4d87.5565153!16s%2Fg%2F11v40bd_w8!4m7!1m0!1m5!1m1!1s0x39faabf6d03bcb5f:0x495eabe66843848f!2m2!1d87.5565153!2d25.5740997?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
      button: "Get Directions",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Owner Image */}
          <div className="w-full md:w-1/3 relative h-64 md:h-auto">
            <img
              src={ownerImg}   // ✅ FIX
              alt="Owner"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-gradient-to-t from-black/70 via-black/50 to-transparent px-5 py-3 rounded-xl transition-all duration-300 group-hover:translate-y-[-2px]">
              <p className="text-gray-200 text-sm uppercase tracking-wider">
                Proprietor
              </p>
              <h3 className="text-white text-lg font-semibold tracking-wide">
                Ankur Simant
              </h3>
            </div>
          </div>

          {/* Right: Contact Cards */}
          <div className="w-full md:w-2/3 p-4 sm:p-6 flex flex-col gap-4">
            {contactData.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className={`${item.color} p-3 rounded-full flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col mt-2 sm:mt-0">
                    <span className="font-semibold text-gray-800">{item.label}</span>
                    <span className="text-gray-600 text-sm">{item.value}</span>
                  </div>
                </div>
                <span className="mt-3 sm:mt-0 text-white font-semibold text-sm px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-900 transition">
                  {item.button}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
