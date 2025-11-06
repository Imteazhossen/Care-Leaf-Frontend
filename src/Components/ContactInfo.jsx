// src/components/ContactInfo.jsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  const info = [
    {
      id: 1,
      icon: <MapPin className="h-6 w-6 text-green-400" />,
      title: "Office Address",
      details: "Shopnodanga House, Jhawchar, Hazaribagh, Dhaka, Bangladesh",
    },
    {
      id: 2,
      icon: <Mail className="h-6 w-6 text-green-400" />,
      title: "Email",
      details: "imteaz.hossen.cse@ulab.edu.bd",
    },
    {
      id: 3,
      icon: <Phone className="h-6 w-6 text-green-400" />,
      title: "Phone",
      details: "+880 1621-189202",
    },
    {
      id: 4,
      icon: <Clock className="h-6 w-6 text-green-400" />,
      title: "Working Hours",
      details: "Sun - Thu: 9:00 AM - 9:00 PM",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-white text-white">
      <div className="max-w-6xl mx-auto px-5 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {info.map((item) => (
          <div
            key={item.id}
            className="group bg-green-100 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-green-400 transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-green-400">{item.title}</h3>
            <p className="text-sm  text-green-400">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
