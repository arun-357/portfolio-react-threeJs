import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import confetti from "canvas-confetti";

import {
  RegExpMatcher, englishDataset, englishRecommendedTransformers,
} from 'obscenity';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const validateMessage = (value) => {
    const englishAndNumericOnly = /^[a-zA-Z0-9\s.,!?]*$/;
    if (!englishAndNumericOnly.test(value)) {
      return "Please enter only English letters and numbers.";
    }
    return "";
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === "message") {
      const errorMessage = validateMessage(value);
      if (errorMessage) alert("Keep it simple – just A-Z, a-z, and 0-9!");
      else setForm({ ...form, [name]: value });
      return;
    }
    setForm({ ...form, [name]: value });
  };
      
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const matcher = new RegExpMatcher({...englishDataset.build(), ...englishRecommendedTransformers});
      // Whoa, did someone forget their manners? Try again with a smile!
      if (matcher.hasMatch(`${form.name} ${form.email} ${form.message}`)) {
        alert('Whoa, did someone forget their manners? Try again with a smile!');
      } else {
        await emailjs
          .send(
            import.meta.env.SERVICE_ID,
            import.meta.env.TEMPLATE_ID,
            {
              from_name: form.name,
              to_name: 'Arun',
              from_email: form.email,
              to_email: import.meta.env.TO_EMAIL,
              message: form.message,
            },
            import.meta.env.EMAIL_KEY
          );
        confetti({
          shapes: [confetti.shapeFromText({ text: '🚀', scalar: 2 })],
          scalar: 2,
          particleCount: 30,
          angle: 90,
          spread: 100,
          origin: { y: 1 },
          flat: true,
          gravity: -1
        });
        setTimeout(() => {
          alert('Email sent 😀!');
        }, 2500);
      }

      setLoading(false);
      setTimeout(() => {
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, [3000]);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">

        <div className="contact-container">
          <h3 className="head-text">Connect with me</h3>
          <p className="text-lg text-white-600 mt-3">
            Hope you enjoyed exploring my portfolio! If you’re interested in collaborating, let’s connect
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Donald Trump"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="trump@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Drop me a message!"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};