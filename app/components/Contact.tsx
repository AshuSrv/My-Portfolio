import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaPaperPlane, FaCoffee } from "react-icons/fa";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"success" | "error" | null>(
    null
  );

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      formRef.current?.reset();
      setSendStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="relative group">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </motion.button>

                {sendStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-3 rounded-lg ${
                      sendStatus === "success"
                        ? "bg-green-900/30 text-green-400"
                        : "bg-red-900/30 text-red-400"
                    }`}
                  >
                    {sendStatus === "success"
                      ? "Message sent successfully!"
                      : "Failed to send message. Please try again."}
                  </motion.div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Direct Contacts
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-blue-400">📧</span>
                  <a
                    href="mailto:ashutoshmishra422@gmail.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    ashutoshmishra422@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-blue-400 text-xl" />
                  <a
                    href="https://www.linkedin.com/in/ashutosh-shrivastava-62a93b159/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/ashutosh-shrivastava
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FaGithub className="text-blue-400 text-xl" />
                  <a
                    href="https://github.com/AshuSrv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    github/Ashusrv
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaCoffee className="text-blue-400 text-xl" />
                  <a
                    href="https://buymeacoffee.com/ashusrv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Buy Me A Coffee
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 mb-4">
                Open for opportunities and interesting collaborations. Whether
                you have a question or just want to say hi, I&apos;ll try my
                best to get back to you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
