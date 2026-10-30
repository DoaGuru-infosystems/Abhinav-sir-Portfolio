import React, { useState } from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton';
import { resumeData } from '../../data/resumeData';

// OPTION: Paste your free Web3Forms Access Key from https://web3forms.com below:
// Example: const WEB3FORMS_ACCESS_KEY = "a1b2c3d4-e5f6-7890-abcd-1234567890ab";
const WEB3FORMS_ACCESS_KEY = "baac4d43-3581-4763-bbe3-91012fca6ff5";

const Form = () => {
  const contactInfo = {
    title: 'Let’s connect and build scalable data solutions',
    description: 'Whether you have a Big Data pipeline challenge, Cloudera CDP migration, or consulting opportunity, feel free to reach out to me directly!',
    phone: resumeData.personalInfo.phone,
    email: resumeData.personalInfo.email,
    address: resumeData.personalInfo.location,
  };

  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    interest: 'Spark ETL & Pipelines',
    timeline: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    const fieldKey = id || name;
    setFormData((prevData) => ({
      ...prevData,
      [fieldKey]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      e.preventDefault();
      setStatus('error');
      setStatusMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (WEB3FORMS_ACCESS_KEY) {
      e.preventDefault();
      setStatus('loading');
      setStatusMessage(`Sending your details to ${resumeData.personalInfo.name}...`);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            company: formData.companyName || 'Not provided',
            website: formData.website || 'Not provided',
            interest: formData.interest || 'Big Data Architecture',
            timeline: formData.timeline || 'Flexible',
            message: formData.message,
            subject: `Portfolio Contact from ${formData.name}`,
            from_name: formData.name,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus('success');
          setStatusMessage(`Thank you! Your details have been sent successfully to ${resumeData.personalInfo.email}.`);
          setFormData(initialFormState);
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Submission error:', err);
        setStatus('error');
        setStatusMessage('Error sending details. You can also use the "Send via Gmail" button below.');
      }
    } else {
      // If Web3Forms key is not provided yet, fallback to FormSubmit
      setStatus('loading');
      setStatusMessage('Submitting details. If FormSubmit is down, please use the "Send via Gmail" button.');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Hello ${resumeData.personalInfo.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nInterested in: ${formData.interest}\nTimeline: ${formData.timeline || 'N/A'}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section className="contact-area primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4 order-last order-md-first">
            <div className="contact-info">
              <h3>{contactInfo.title}</h3>
              <p>{contactInfo.description}</p>

              <div className="content contact-form p-4">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="icon icon-phone"></i>
                    <a className="content" href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-envelope-open"></i>
                    <a className="content" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-location-pin"></i>
                    <a className="content" href="/#">{contactInfo.address}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 order-first order-md-last mt-sm-4 mt-lg-0">
            <form
              id="contact-form"
              className="contact-form"
              action={`https://formsubmit.co/${resumeData.personalInfo.email}`}
              method="POST"
              target={WEB3FORMS_ACCESS_KEY ? "_self" : "_blank"}
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value={`New Portfolio Message from ${formData.name || 'Visitor'}`} />

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="Name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name">Name *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="Email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email address *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="Phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <label htmlFor="phone">Phone</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="Company"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <label htmlFor="companyName">Company / Organization</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="website"
                  name="Website"
                  placeholder="Company Website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
                <label htmlFor="website">Website (Optional)</label>
              </div>

              <div className="form-group mb-3">
                <div className="form-label">I'm interested in:</div>
                <div className="form-input-group">
                  {[
                    'Spark ETL & Pipelines',
                    'Cloudera CDP Migration',
                    'Big Data Architecture',
                    'Cloud & Consulting'
                  ].map((option) => (
                    <div className="form-input" key={option}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="Interest"
                        id={`option-${option.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        value={option}
                        checked={formData.interest === option}
                        onChange={(e) => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                      />
                      <label
                        className="btn magnetic-button btn-outline"
                        htmlFor={`option-${option.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="timeline"
                  name="Timeline"
                  placeholder="Timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                />
                <label htmlFor="timeline">What is your project timeline?</label>
              </div>

              <div className="form-floating mb-4">
                <textarea
                  className="form-control"
                  id="message"
                  name="Message"
                  placeholder="Your Message"
                  required
                  style={{ height: '120px' }}
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <label htmlFor="message">Your Message *</label>
              </div>

              {statusMessage && (
                <div
                  className={`alert ${status === 'success'
                    ? 'alert-success'
                    : status === 'error'
                      ? 'alert-danger'
                      : 'alert-info'
                    } mb-4`}
                  role="alert"
                >
                  {statusMessage}
                </div>
              )}

              <div className="d-flex flex-wrap align-items-center gap-3">
                <MagneticButton
                  type="submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                </MagneticButton>

                <a
                  className="btn btn-outline content-btn"
                  href={mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderRadius: '50px', padding: '12px 24px' }}
                >
                  <i className="bi bi-envelope-fill me-2"></i>Send via Gmail App
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
