"use client";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// 1. Define the data structure
interface TestimonialData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

// 2. Define validation rules
const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    subject: yup.string().required("Subject is required"),
    phone: yup.string().required("Phone number is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const TestimonialForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TestimonialData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: TestimonialData) => {
    try {
      // Use your Formspark ID here (ruz8ohsAI or a new one)
      const response = await fetch("https://submit-form.com/ZbPAd8f8o", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
        });
        reset();
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="name">Your name*</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Robot fox"
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="col-sm-6">
          <label htmlFor="email">Your Email*</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="info@example.com"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="col-sm-6">
          <label htmlFor="subject">Subject*</label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            placeholder="Subject"
          />
          {errors.subject && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="col-sm-6">
          <label htmlFor="number">Your Phone*</label>
          <input
            type="text"
            id="number"
            {...register("phone")}
            placeholder="+1253 457 7840"
          />
          {errors.phone && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="massage">Message*</label>
          <textarea
            id="massage"
            {...register("message")}
            placeholder="Write Message"
          ></textarea>
          {errors.message && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className="btn-one" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default TestimonialForm;
