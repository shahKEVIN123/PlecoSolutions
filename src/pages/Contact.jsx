import React, { useState } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * Milestone 1 Placeholder: Contact Us Page (Route: `/contact`)
 * Features verbatim contact information and client-side inquiry form interface.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please provide a valid corporate email address.');
      return;
    }

    setSubmitted(true);
    setError('');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Contact Pleco Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out to our leadership team for project consultations, Oracle SCM Cloud roadmap planning,
            or 24/7 Managed Services support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Corporate Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Corporate Headquarters</h2>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-primary-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Office Address
                    </div>
                    <div className="text-sm font-medium text-slate-800">
                      3044 Old Denton Rd #111-163<br />
                      Carrollton, TX 75007, USA
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-primary-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Direct Telephone
                    </div>
                    <a
                      href="tel:+16505336649"
                      className="text-sm font-semibold text-brand-primary-600 hover:text-brand-primary-800"
                    >
                      +1 (650) 533-6649
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-primary-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Inquiries &amp; Careers
                    </div>
                    <a
                      href="mailto:Info@plecosolutions.com"
                      className="text-sm font-semibold text-brand-primary-600 hover:text-brand-primary-800"
                    >
                      Info@plecosolutions.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-primary-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Support Availability
                    </div>
                    <div className="text-sm font-medium text-slate-800">
                      24/7 Managed Services &amp; Technical Help Desk
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send an Inquiry</h2>
              <p className="text-sm text-slate-600 mb-8">
                Complete the form below to connect directly with our specialized consulting architects.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-lg font-bold">Inquiry Transmitted Successfully</h3>
                  </div>
                  <p className="text-sm text-emerald-700 mb-4">
                    Thank you, {formData.name}. Your message regarding "{formData.subject}" has been received
                    by the Pleco Solutions executive team. We will respond within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {error && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane.doe@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject / Planning Focus *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Oracle Demantra Upgrade Assessment"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your current ERP/VCP landscape, timeline, or consultation objectives..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-semibold text-sm transition-all shadow hover:shadow-brand-primary-600/20 w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
