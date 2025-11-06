import { useState } from 'react';
import emailjs from '@emailjs/browser';
import con from '../assets/contact-2.jpg';

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      setLoading(true);
      setSuccessMessage('');
      setErrorMessage('');

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone || '',
          message: formData.message,
          subject: 'New message from Dotech contact form',
        },
        publicKey
      );

      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        relative w-full overflow-hidden rounded-lg
        h-[740px] sm:h-[740px] lg:h-[820px]
        text-white
      "
      aria-label="Contact Section"
    >
      {/* ===== Background Image as COVER ===== */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${con})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ===== Dark Overlay for readability ===== */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ===== Foreground Content ===== */}
      <div className="relative z-10 grid h-full w-full grid-cols-1 lg:grid-cols-12">
        {/* Left Side — Heading */}
        <div className="flex items-end mb-12 px-5 sm:px-8 lg:px-12 lg:col-span-6">
          <h1
            className="
              font-light leading-[0.95]
              text-5xl sm:text-7xl lg:text-[112px]
              tracking-tight -mb-10 sm:mb-0
            "
          >
            LET’S
            <br />
            GET IN
            <br />
            TOUCH
          </h1>
        </div>

        {/* Right Side — Contact Form */}
        <div className="flex items-start mt-12 justify-end px-5 sm:px-8 lg:px-12 lg:col-span-6">
          <div
            className="
              w-full max-w-md rounded-xl
              bg-black/30 backdrop-blur-sm
              ring-1 ring-white/25
              p-5 sm:p-7
            "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-white/70 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full bg-transparent
                    border-b border-white/25
                    px-0 py-2 text-sm text-white placeholder:text-white/50
                    outline-none focus:border-white transition-colors
                  "
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full bg-transparent
                    border-b border-white/25
                    px-0 py-2 text-sm text-white placeholder:text-white/50
                    outline-none focus:border-white transition-colors
                  "
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-white/70 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
                    w-full bg-transparent
                    border-b border-white/25
                    px-0 py-2 text-sm text-white placeholder:text-white/50
                    outline-none focus:border-white transition-colors
                  "
                  placeholder="+8801XXXXXXXXX"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white/70 mb-1">
                  What we can do for you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="
                    w-full resize-none bg-transparent
                    border-b border-white/25
                    px-0 py-2 text-sm text-white placeholder:text-white/50
                    outline-none focus:border-white transition-colors
                  "
                  placeholder="Tell us a bit about your needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`
                  group relative inline-flex items-center overflow-hidden
                  rounded-full border-2 border-green-300 bg-white
                  pl-4 pr-[6px] py-[6px] text-sm font-semibold text-[#222]
                  transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed
                `}
              >
                <span
                  className="absolute inset-0 rounded-full bg-green-700
                             origin-left scale-x-0
                             transition-transform duration-[500ms] ease-out
                             group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {loading ? 'Sending…' : 'Send Message'}
                </span>
                <span
                  className="relative z-10 ml-3 inline-flex h-8 w-8 items-center justify-center
                             rounded-full bg-green-700 text-white -rotate-[45deg]
                             transition-all duration-[500ms] ease-out
                             group-hover:bg-orange-300 group-hover:translate-x-1 group-hover:rotate-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L6.75 17.25M17.25 6.75H9.75m7.5 0v7.5" />
                  </svg>
                </span>
              </button>

              {/* Messages */}
              {successMessage && <p className="text-sm text-green-300">{successMessage}</p>}
              {errorMessage && <p className="text-sm text-red-300">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
