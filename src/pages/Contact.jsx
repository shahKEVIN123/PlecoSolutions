import React, { useState } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  const validate = () => {
    const errors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid corporate email address.';
    }

    if (formData.subject && formData.subject.trim().length > 0 && formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    if (generalError) setGeneralError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setGeneralError('Please correct the highlighted errors before submitting.');
      return;
    }

    setSubmitted(true);
    setFieldErrors({});
    setGeneralError('');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
    setFieldErrors({});
    setGeneralError('');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get in Touch</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Get in Touch
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Reach out to our leadership team for project consultations, Oracle SCM Cloud roadmap planning,
              or 24/7 Managed Services support. We are prepared to assist your organization with senior, hands-on expertise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
          {/* Left Column: Corporate Headquarters Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
                  Global Headquarters
                </span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  PLECO SOLUTIONS
                </h2>
              </div>

              <div className="space-y-5 pt-4 border-t border-slate-100">
                {/* Physical Street Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pleco-ice text-pleco-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Office Address
                    </div>
                    <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                      3044 Old Denton Rd #111-163<br />
                      Carrollton, TX 75007, USA
                    </div>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pleco-ice text-pleco-blue flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Direct Telephone
                    </div>
                    <a
                      href="tel:+16505336649"
                      className="text-sm font-bold text-pleco-blue hover:text-blue-700 transition-colors"
                    >
                      +1 (650) 533-6649
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pleco-ice text-pleco-blue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Corporate Email
                    </div>
                    <a
                      href="mailto:Info@plecosolutions.com"
                      className="text-sm font-bold text-pleco-blue hover:text-blue-700 transition-colors"
                    >
                      Info@plecosolutions.com
                    </a>
                  </div>
                </div>

                {/* Hours / Managed Services */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Operational Availability
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      24/7 Managed Services &amp; Help Desk
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Continuous monitoring &amp; post-go-live care
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Oracle Partner Assurance Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-pleco-navy-dark to-navy-900 text-white border border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-bold">Confidential Enterprise Consultation</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All consultations are conducted under strict mutual NDA standards. We review your requirements with seasoned Oracle architects.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Interface */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 lg:p-10 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Direct Inquiries &amp; Project Consultations
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Please complete the form below. An Oracle planning lead will respond within one business day.
                </p>
              </div>

              {submitted ? (
                /* Affirmative Notification Card */
                <div
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-4"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950">
                    Thank You! Inquiry Received
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Your message has been received by Pleco Solutions. A senior Oracle Value Chain Planning consultant will review your project details and contact you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                    >
                      <span>Send another message</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Validated Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {generalError && (
                    <div
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2.5"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{generalError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-pleco-blue ${
                          fieldErrors.name
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-slate-300 focus:border-pleco-blue'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p id="name-error" className="text-xs text-red-600 font-medium mt-1">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                        placeholder="jane.doe@enterprise.com"
                        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-pleco-blue ${
                          fieldErrors.email
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-slate-300 focus:border-pleco-blue'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p id="email-error" className="text-xs text-red-600 font-medium mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject / Planning Focus
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.subject}
                      aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                      placeholder="e.g. Oracle Demantra Upgrade Assessment or SCM Cloud Roadmap"
                      className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-pleco-blue ${
                        fieldErrors.subject
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-300 focus:border-pleco-blue'
                      }`}
                    />
                    {fieldErrors.subject && (
                      <p id="subject-error" className="text-xs text-red-600 font-medium mt-1">
                        {fieldErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                      placeholder="Please outline your current planning landscape, modules in scope (e.g. Demantra, ASCP, GOP), and desired timeline..."
                      className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-pleco-blue ${
                        fieldErrors.message
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-300 focus:border-pleco-blue'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="text-xs text-red-600 font-medium mt-1">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Project Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
