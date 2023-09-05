import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialLinks } from "../constants";
import contants from "../contants";
import { emailValidation, errorHelperText } from "../utils/validation";

const Contact = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({
    name: { error: false, message: "" },
    email: { error: false, message: "" },
    message: { error: false, message: "" },
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    setFormError({
      ...formError,
      [name]: {
        error: false,
        message: "",
      },
    });
  };

  const handleCheck = ({ value, name }) => {
    console.log(value, name, formError);
    if (!value) {
      setFormError({
        ...formError,
        [name]: {
          error: true,
          message: errorHelperText.emptyField,
        },
      });
    } else if (name === "email") {
      const { showHelperText, helperText } = emailValidation(value, true);
      setFormError({
        ...formError,
        [name]: {
          error: showHelperText,
          message: helperText,
        },
      });
    }
  };

  const getErrorObj = (prev, key, msg) => {
    return {
      ...prev,
      [key]: {
        error: true,
        message: msg ?? errorHelperText.emptyField,
      },
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    let isError = false;
    let createError = {
      name: { error: false, message: "" },
      email: { error: false, message: "" },
      message: { error: false, message: "" },
    };
    const arrVariables = [nameRef, emailRef, messageRef];

    for (let refVar of arrVariables) {
      if (refVar.current.name === "email") {
        const { showHelperText, helperText } = emailValidation(
          refVar.current.value,
          true
        );
        if (showHelperText) {
          createError = getErrorObj(
            createError,
            refVar.current.name,
            helperText
          );
          isError = true;
        }
      } else if (!refVar.current.value) {
        createError = getErrorObj(createError, refVar.current.name);
        isError = true;
      }
    }

    if (isError) {
      setFormError({ ...createError });
      return;
    }
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
              href="mailto:vaibhav.yeole159@gmail.com"
              className="underline font-montserrat"
            >
              vaibhav.yeole159@gmail.com
            </a>
          </p>
          <div
            className={`text-[#bbb] text-[16px] pl-1 tracking-wider font-montserrat`}
          >
            Find me on:{" "}
            {socialLinks.map((socialLink, idx) => {
              return (
                <div key={`social-${idx}`} className="inline">
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
                </div>
              );
            })}
          </div>

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
        <form ref={formRef} className="mt-8 mb-4 w-full flex flex-col gap-3">
          <label className="flex flex-col">
            {/* <span className="text-headcoloroncard font-medium mb-4">Your Name</span> */}
            <input
              ref={nameRef}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={(e) => handleCheck(e.target)}
              placeholder="Name"
              // required
              className={`py-4 px-6 placeholder:text-txtcoloroncard text-headcoloroncard font-normal rounded-lg font-medium border ${
                formError.name.error ? "border-red-500" : "border-slate-400"
              }`}
            />
            {formError.name.error && (
              <span className="text-red-500 font-light text-sm mb-2 mt-1">
                {formError.name.message}
              </span>
            )}
          </label>
          <label className="flex flex-col">
            {/* <span className="text-headcoloroncard font-medium mb-4">Your email</span> */}
            <input
              ref={emailRef}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={(e) => handleCheck(e.target)}
              placeholder="Email"
              // required
              className={`py-4 px-6 placeholder:text-txtcoloroncard text-headcoloroncard font-normal rounded-lg font-medium border ${
                formError.email.error ? "border-red-500" : "border-slate-400"
              }`}
            />
            {formError.email.error && (
              <span className="text-red-500 font-light text-sm mb-2 mt-1">
                {formError.email.message}
              </span>
            )}
          </label>
          <label className="flex flex-col">
            {/* <span className="text-headcoloroncard font-medium mb-4">Your Message</span> */}
            <textarea
              ref={messageRef}
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={(e) => handleCheck(e.target)}
              placeholder="Your Message"
              // required
              className={`py-4 px-6 placeholder:text-txtcoloroncard text-headcoloroncard font-normal rounded-lg font-medium border ${
                formError.message.error ? "border-red-500" : "border-slate-400"
              }`}
            />
            {formError.message.error && (
              <span className="text-red-500 font-light text-sm mb-2 mt-1">
                {formError.message.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            onClick={handleSubmit}
            className="animated-btn flex justify-center items-center m-0 h-10 w-full text-[#eee] bg-[#5e1483] font-black text-[16px] font-semibold rounded
            hover:bg-[#915EFF] hover:border-[#915EFF] hover:tracking-wider"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
