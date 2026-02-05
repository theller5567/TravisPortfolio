import { useState } from 'react';
import Alert from '../components/Alert';

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        showAlertMessage('success', 'Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        showAlertMessage('danger', data.error || 'Failed to send email');
      }
    } catch {
      showAlertMessage('danger', 'Failed to send email');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
        {/* <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      /> */}
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Talk</h2>
            <p className="font-normal text-neutral-400">Wether you're looking to build a new website, improve your existing platform, or bring a unique project to life I'm here to help.</p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="field-label">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="field-input field-input-focus" 
                placeholder="John Doe" 
                autoComplete="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                disabled={isLoading} />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="field-label">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="field-input field-input-focus" 
                placeholder="john.doe@example.com" 
                autoComplete="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                disabled={isLoading} />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="field-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="field-input field-input-focus" 
                placeholder="Share your thoughts..." 
                rows={4} 
                autoComplete="message" 
                value={formData.message} 
                onChange={handleChange} 
                required disabled={isLoading} />
            </div>
            <button 
                type="submit" 
                disabled={isLoading}
                className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-teal-500 hover:bg-teal-600 hover-animation">
                {!isLoading ? 'Send' : 'Sending...'}
            </button>
          </form>
        </div>
    </section>
  )
}

export default Contact