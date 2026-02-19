"use client";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    message: yup.string().required("Message is required"),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://submit-form.com/ZbPAd8f8o", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", { position: "top-center" });
        reset(); // Clears the form fields
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to send message. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    // FIX: Removed 'action' and added 'onSubmit'
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-6">
          <label htmlFor="name">Your Name*</label>
          <input
            id="name"
            {...register("name")}
            className="bg-transparent bor"
            type="text"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="form_error" style={{ color: "red" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="col-6">
          <label htmlFor="email">Your Email*</label>
          <input
            id="email"
            {...register("email")}
            className="bg-transparent bor"
            type="email"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="form_error" style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="text-area">
        <label htmlFor="message">Write Message*</label>
        <textarea
          id="message"
          {...register("message")}
          className="bg-transparent bor"
          placeholder="Write Message"
        ></textarea>
        {errors.message && (
          <p className="form_error" style={{ color: "red" }}>
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="btn-two">
        <button type="submit" className="btn-one" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
          <i className="fa-regular fa-arrow-right-long"></i>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
