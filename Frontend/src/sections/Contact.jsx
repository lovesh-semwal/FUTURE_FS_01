import { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully! ✓");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6! py-24! lg:px-8!">
      <div className="mx-auto! max-w-7xl">
        <div className="mb-12!">
          <p className="mb-3! text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's work together.
          </h2>

          <p className="mt-4! max-w-2xl text-gray-400">
            Have a project, opportunity, or idea? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=loveshsemwal289@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5! transition hover:border-cyan-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FiMail size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-200">
                  loveshsemwal289@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/lovesh-semwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5! transition hover:border-cyan-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FiGithub size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="text-gray-200">
                  github.com/lovesh-semwal
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/lovesh-semwal-702724373/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5! transition hover:border-cyan-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FiLinkedin size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="text-gray-200">
                  Connect with me on LinkedIn
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6! sm:p-8!"
          >
            <div className="mb-5!">
              <label className="mb-2! block text-sm text-gray-400">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4! py-3! text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50"
              />
            </div>

            <div className="mb-5!">
              <label className="mb-2! block text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4! py-3! text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50"
              />
            </div>

            <div className="mb-5!">
              <label className="mb-2! block text-sm text-gray-400">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4! py-3! text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5! py-3! font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FiSend size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="mt-4! text-center text-sm text-gray-300">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;