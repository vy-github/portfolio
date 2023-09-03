import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialLinks } from "../constants";
import contants from "../contants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        contants.EMAILJS_SERVICE_ID,
        contants.EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vaibhav yeole",
          from_email: form.email,
          to_email: "jametem795@xgh6.com",
          message: form.message,
        },
        contants.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`relative lg:mt-[-15px] flex lg:flex-row flex-col lg:gap-10 gap-4 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col lg:h-auto lg:p-8 p-0 pb-10 lg:w-1/2 w-full"
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <h3 className={`${styles.sectionHeadText} text-txtcoloroncard`}>
          Contact Me!
        </h3>
        <div className="relative flex flex-col flex-1 md:pt-10 pt-4 gap-3">
          <p
            className={`text-[#bbb] text-[16px] pl-1 tracking-wider font-montserrat`}
          >
            Email:{" "}
            <a
              href="mailto:support@newtonschool.co"
              className="underline font-montserrat"
            >
              vaibhav.yeole159@gmail.com
            </a>
          </p>
          <p
            className={`text-[#bbb] text-[16px] pl-1 tracking-wider font-montserrat`}
          >
            Find me on:{" "}
            {socialLinks.map((socialLink, idx) => {
              return (
                <>
                  <a
                    href={socialLink.link}
                    target="_blank"
                    className={"underline font-montserrat cursor-pointer"}
                  >
                    {socialLink.name}
                  </a>
                  {idx !== socialLinks?.length - 1 && (
                    <span className="font-montserrat mx-1 text-[#aaa]">/</span>
                  )}
                </>
              );
            })}
          </p>

          <p className="mt-auto lg:block hidden">© 2022 by Vaibhav Yeole </p>
        </div>
      </motion.div>

      {/* <div className="absolute lg:top-0 top-[-192px] lg:left-1/2 left-[0px] w-[2px] lg:h-[88%] h-[100%] lg:rotate-0 rotate-90 lg:my-9 my-0 bg-[#666]"></div> */}
      <div className="lg:flex hidden absolute top-0 left-1/2 w-[2px] h-full bg-[#666]"></div>
      <div className="lg:hidden flex absolute md:top-[210px] sm:top-[185px] top-[155px] left-0 w-full h-[2px] bg-[#666]"></div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-1 lg:w-1/2 w-full"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 w-full flex flex-col gap-3"
        >
          <label className="flex flex-col">
            {/* <span className="text-headcoloroncard font-medium mb-4">Your Name</span> */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-txtcoloroncard text-headcoloroncard rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-headcoloroncard font-medium mb-4">Your email</span> */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 placeholder:text-txtcoloroncard text-headcoloroncard rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-headcoloroncard font-medium mb-4">Your Message</span> */}
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-tertiary py-4 px-6 placeholder:text-txtcoloroncard text-headcoloroncard rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="animated-btn flex justify-center items-center m-0 h-10 w-full text-[#eee] bg-[#5e1483] font-black text-[16px] font-semibold rounded
            hover:bg-[#915EFF] hover:border hover:border-[#915EFF] hover:tracking-wider"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
