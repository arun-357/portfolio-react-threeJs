import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
      
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
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
          import.meta.env.KEY,
        );
      alert('Email sent 😀!');
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
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
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