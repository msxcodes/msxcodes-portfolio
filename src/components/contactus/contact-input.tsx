import { Button } from "@/components/ui/moving-border-btn";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { HiPaperAirplane, HiUser, HiEnvelope, HiChatBubbleLeftRight, HiCheckCircle } from "react-icons/hi2";
import { slideInFromLeft, slideInFromRight } from "@/utils/motions/montion";

export default function ContactInput() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const msg = msgRef.current?.value;

    // Validate inputs with more developer-friendly messages
    if (!name || !email || !msg) {
      toast.error("All fields are required. Check your inputs.", {
        icon: "⚠️",
        style: {
          borderRadius: '10px',
          background: '#1e1e2e',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        },
      });
      setLoading(false);
      return;
    }

    const formData = {
      name,
      email,
      message: msg,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );

      toast.success("Message sent successfully!", {
        icon: "🚀",
        style: {
          borderRadius: '10px',
          background: '#1e1e2e',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        },
        duration: 5000,
      });

      // Clear form with animation
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (msgRef.current) msgRef.current.value = "";

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Request failed. Check console for details.", {
        icon: "❌",
        style: {
          borderRadius: '10px',
          background: '#1e1e2e',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const inputVariants = {
    focused: { scale: 1.02, borderColor: "rgba(168, 85, 247, 0.8)", boxShadow: "0 0 8px rgba(168, 85, 247, 0.3)" },
    unfocused: { scale: 1, borderColor: "rgba(168, 85, 247, 0.3)", boxShadow: "none" }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-20 flex w-full flex-col z-50 rounded-xl text-white md:flex-row md:shadow-lg "
    >
      <motion.form
        className="mx-auto w-full py-8 px-4 relative overflow-hidden rounded-xl"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Code comment pattern like in IDE */}
        <motion.div
          className="mb-4 font-mono text-xs text-purple-400/70 border-l-2 border-purple-500/30 pl-3"
          variants={slideInFromLeft(0.1)}
          initial="hidden"
          animate="visible"
        >
          {/* Form submission handler */}
          <code>// POST /api/contact</code>
        </motion.div>

        <motion.div
          className="mb-6"
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          animate="visible"
        >
          <label
            className="text-white/80 mb-2  font-semibold flex items-center gap-2"
            htmlFor="email"
          >
            <HiEnvelope className="text-purple-400" />
            <span className="flex items-center">
              <span>email</span>
              <span className="text-purple-400 ml-1">: string</span>
              <span className="text-red-400 ml-1">*</span>
            </span>
          </label>
          <motion.div
            variants={inputVariants}
            animate={focused === "email" ? "focused" : "unfocused"}
            className="relative"
          >
            <motion.input
              ref={emailRef}
              className="w-full rounded-lg border border-purple-800/30 bg-transparent px-4 py-3 outline-none ring-purple-500/30 focus:ring transition-all duration-300"
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              whileFocus={{ scale: 1.02 }}
              disabled={loading}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: focused === "email" ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-6"
          variants={slideInFromRight(0.3)}
          initial="hidden"
          animate="visible"
        >
          <label
            className="text-white/80 font-semibold mb-2  flex items-center gap-2"
            htmlFor="subject"
          >
            <HiUser className="text-purple-400" />
            <span className="flex items-center">
              <span>name</span>
              <span className="text-purple-400 ml-1">: string</span>
              <span className="text-red-400 ml-1">*</span>
            </span>
          </label>
          <motion.div
            variants={inputVariants}
            animate={focused === "name" ? "focused" : "unfocused"}
            className="relative"
          >
            <motion.input
              ref={nameRef}
              className="w-full rounded-lg border  bg-transparent border-purple-800/30 px-4 py-3 outline-none ring-purple-500/30 focus:ring transition-all duration-300"
              id="subject"
              type="text"
              required
              placeholder="John Doe"
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              disabled={loading}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: focused === "name" ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-6"
          variants={slideInFromLeft(0.4)}
          initial="hidden"
          animate="visible"
        >
          <label
            className="text-white/80 mb-2  font-medium flex items-center gap-2"
            htmlFor="message"
          >
            <HiChatBubbleLeftRight className="text-purple-400" />
            <span className="flex items-center">
              <span>message</span>
              <span className="text-purple-400 ml-1">: string</span>
              <span className="text-red-400 ml-1">*</span>
            </span>
          </label>
          <motion.div
            variants={inputVariants}
            animate={focused === "message" ? "focused" : "unfocused"}
            className="relative"
          >
            <motion.textarea
              ref={msgRef}
              className="h-52 w-full rounded-lg border bg-transparent placeholder:text-white/50 border-purple-800/30 px-4 py-3 outline-none ring-purple-500/30 focus:ring transition-all duration-300 font-mono text-sm"
              placeholder="// Type your message here..."
              id="message"
              required
              disabled={loading}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            ></motion.textarea>
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: focused === "message" ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-between"
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-xs text-purple-300/70 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <code>{`// ${new Date().toISOString().split('T')[0]}`}</code>
          </motion.div>

          <Button
            borderRadius="1.5rem"
            disabled={loading}
            className="bg-transparent text-white text-[0.9rem] border-[#7042f88b] gradient-text group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="size-5 border-[2px] border-current border-t-transparent text-purple-600 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <span className="ml-2 font-medium gradient-text">
                    await send()
                  </span>
                </motion.div>
              ) : submitted ? (
                <motion.div
                  key="success"
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <HiCheckCircle className="h-5 w-5 text-green-400" />
                  <span className="font-medium text-green-400">
                    Sent!
                  </span>
                </motion.div>
              ) : (
                <motion.span
                  key="default"
                  className="size-full flex items-center justify-center gap-2 font-medium transition-all duration-300"
                  whileHover={{ gap: 4 }}
                >
                  <code className="font-mono">submit()</code>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                  >
                    <HiPaperAirplane className="h-4 w-4 text-purple-400" />
                  </motion.div>
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
