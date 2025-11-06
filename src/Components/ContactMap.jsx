// src/components/ContactMap.jsx
export default function ContactMap() {
  return (
    <section className="relative w-full bg-white text-white py-20">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl text-green-700 font-semibold mb-4">Visit Our Office</h2>
          <p className="text-green-700 text-sm leading-relaxed mb-6">
            We’d love to meet you! Visit our workspace to discuss your next big project.
            Whether you have an idea or a collaboration in mind, our doors are always open.
          </p>
          <ul className="text-green-700 text-sm space-y-2">
            <li>🏢 Shopnodanga House, Jhawchar, Hazaribagh, Dhaka, Bangladesh</li>
            <li>📞 +880 162-189202</li>
            <li>📧 imteaz.hossen.cse@ulab.edu.bd</li>
          </ul>
        </div>

        {/* Right Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.903708496254!2d90.37326667466828!3d23.78656798746047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfae64d2e8b7%3A0x4c39f5022b2b0a8a!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1693243284201!5m2!1sen!2sbd"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
