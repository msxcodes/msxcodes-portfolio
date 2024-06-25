import { Button } from "@/components/ui/moving-border-btn";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function ContactInput() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setloading] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setloading(true);
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const msg = msgRef.current?.value;

    const fromData = {
      name,
      email,
      message: msg,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        fromData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then((res) => {
        toast.success("Message Sent Successfully.");
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (msgRef.current) msgRef.current.value = "";
        setloading(false);
      })
      .catch((e) => {
        toast.error("Something went wrong. Please try again.");
        setloading(false);
      });
  };

  return (
    <div className="mx-auto mb-20 flex w-full flex-col z-50 rounded-xl text-white md:flex-row md:shadow-lg">
      <form className="mx-auto w-full py-8 px-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="text-white/80 mb-2 block font-semibold"
            htmlFor="email"
          >
            Your e-mail:
          </label>
          <input
            ref={emailRef}
            className="w-full rounded border border-purple-800/30 bg-transparent px-3 py-2 outline-none ring-purple-500/30 focus:ring"
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="text-white/80 font-semibold mb-2 block "
            htmlFor="subject"
          >
            Name:
          </label>
          <input
            ref={nameRef}
            className="w-full rounded border bg-transparent border-purple-800/30 px-3 py-2 outline-none ring-purple-500/30 focus:ring"
            id="subject"
            type="text"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="text-white/80 mb-2 block font-medium"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            ref={msgRef}
            className="h-52 w-full rounded border bg-transparent placeholder:text-white/80 border-purple-800/30 px-3 py-2 outline-none ring-purple-500/30 focus:ring"
            placeholder="Enter your message"
            id="message"
            //   required
            disabled={false}
          ></textarea>
        </div>
        <div className="flex items-center">
          <div className="flex-1"></div>
          <Button
            borderRadius="1rem"
            disabled={loading && true}
            className="bg-transparent text-white text-[0.9rem]  border-[#7042f88b] hover:scale-110 transition-all duration-300 gradient-text"
          >
            {loading ? (
              <>
                <div
                  className="animate-spin size-4 border-[2px] border-current border-t-transparent text-purple-600 rounded-full "
                  role="status"
                  aria-label="loading"
                ></div>
                <span className="ml-2 font-medium gradient-text">
                  Sending...
                </span>
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
