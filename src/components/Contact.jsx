import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify"; // Import toast
import { useLocation } from "react-router-dom";

const ContactSection = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const location = useLocation();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to observe when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when elements are in view
            if (entry.target === formRef.current) {
              entry.target.classList.add("animate-fade-in-left");
            } else if (entry.target === infoRef.current) {
              entry.target.classList.add("animate-fade-in-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const formElement = formRef.current;
    const infoElement = infoRef.current;

    // Observe the form and info elements
    if (formElement) observer.observe(formElement);
    if (infoElement) observer.observe(infoElement);

    return () => {
      // Clean up the observer when the component unmounts
      if (formElement) observer.unobserve(formElement);
      if (infoElement) observer.unobserve(infoElement);
    };
  }, []);

  useEffect(() => {
    // Pre-fill products of interest if query param exists
    const params = new URLSearchParams(location.search);
    const products = params.get("products");
    if (products && formRef.current) {
      const input = formRef.current.querySelector("input[name='products']");
      if (input) input.value = products;
    }
  }, [location.search]);

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.get("name")) errors.name = "Name is required";
    if (!formData.get("email")) errors.email = "Email is required";
    if (!formData.get("subject")) errors.subject = "Subject is required";
    if (!formData.get("message")) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(e.target);
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        "service_e3u1m9y", // Replace with your EmailJS service ID
        "template_imhwvhl", // Replace with your EmailJS template ID
        formRef.current,
        "n2azYNJpXqz55Fjvi" // Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!"); // Success toast
      formRef.current.reset();
      setFormErrors({});
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Something went wrong. Please try again later."); // Error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f8f8f8] py-12">
      <div className="section-container">
        <div className="mb-8 text-center">
          <h2 className="section-title font-serif text-[#0D0D0D] font-medium text-4xl mb-3">
            Contact Us
          </h2>
          <p className="section-description text-[#737373] max-w-xl mx-auto text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Form on top, info section below */}
        <div className="max-w-3xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl bg-white text-black p-6 shadow-sm mb-8"
          >
            {/* Align form fields in two columns on desktop, one column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Name"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-black"
                  placeholder="Your name"
                  required
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  aria-label="Company Name"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-black"
                  placeholder="Your company name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-black"
                  placeholder="Your email"
                  required
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  aria-label="Phone Number"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-black"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  aria-label="Country"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-black"
                  placeholder="Your country"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="businessType"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  aria-label="Business Type"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-black"
                  required
                >
                  <option value="">Select business type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="food-manufacturer">Food Manufacturer</option>
                  <option value="retailer">Retailer</option>
                  <option value="distributor">Distributor</option>
                  <option value="exporter">Exporter</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="products"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Products of Interest
                </label>
                <input
                  type="text"
                  id="products"
                  name="products"
                  aria-label="Products of Interest"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-black"
                  placeholder="e.g., Turmeric powder, Red chili powder"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Expected Quantity
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  aria-label="Expected Quantity"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-black"
                  required
                >
                  <option value="">Select quantity range</option>
                  <option value="1-10kg">1-10 kg</option>
                  <option value="10-50kg">10-50 kg</option>
                  <option value="50-100kg">50-100 kg</option>
                  <option value="100-500kg">100-500 kg</option>
                  <option value="500kg-1ton">500 kg - 1 ton</option>
                  <option value="1ton+">1 ton+</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="mb-1 block text-14px font-medium text-[#0D0D0D] text-start"
              >
                Detailed Requirements
              </label>
              <textarea
                id="message"
                name="message"
                aria-label="Message"
                rows={5}
                className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-black"
                placeholder="Your message"
                required
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-2.5 text-center text-14px font-medium bg-black text-white transition-colors hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          <div ref={infoRef} className="space-y-6 bg-white/80 rounded-2xl p-6 shadow border border-[#ffe5c2]">
            <div>
              <h3 className="mb-1 block text-20px font-medium text-[#0D0D0D] text-start">
                Get in Touch
              </h3>
              <p className="text-[#737373] text-16px text-start text-muted-foreground">
                We're here to answer your questions and provide assistance. Feel
                free to reach out to us through any of the following methods.
              </p>
            </div>

            <div className="text-start space-y-4">
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[#0D0D0D] bg-[#E1E1E1] opacity 10.0% text-20px">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    Our Location
                  </h4>
                  <p className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    H.No. 8 1ST Flr, Pvt 101, 102, Blk-C, Ranjit Nagar, Patel
                    Nagar West, Delhi
                    <br />
                    New Delhi, Central Delhi- 110008
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[#0D0D0D] bg-[#E1E1E1] opacity 10.0% text-20px">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    Email Us
                  </h4>
                  <p className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    info@Skynxglobals.com
                    <br />
                    support@Skynxglobals.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[#0D0D0D] bg-[#E1E1E1] opacity 10.0% text-20px">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    Call Us
                  </h4>
                  <p className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    +91 9540192363
                    <br />+ 011-45053864
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-1 block text-20px font-medium text-[#0D0D0D] text-start">
                Business Hours
              </h3>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between">
                  <span className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    Monday - Friday
                  </span>
                  <span className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    Saturday
                  </span>
                  <span className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    Sunday
                  </span>
                  <span className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
