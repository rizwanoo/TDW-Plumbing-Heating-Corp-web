import React, {useState} from 'react';
import {AlertCircle, ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send} from 'lucide-react';
import {BUSINESS, SERVICE_OFFERINGS, SERVICE_TOWNS, type RoutePath} from '../data/business';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  town: string;
  service: string;
  urgency: 'standard' | 'urgent';
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  phone: '',
  email: '',
  town: 'Athol',
  service: SERVICE_OFFERINGS[0].title,
  urgency: 'standard',
  message: '',
};

export function ContactPage({onNavigate: _onNavigate}: ContactPageProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<{
    referenceId: string;
    name: string;
    town: string;
    service: string;
  } | null>(null);
  const [selectedTown, setSelectedTown] = useState<string>('Athol');

  const activeTownInfo =
    SERVICE_TOWNS.find((t) => t.name === selectedTown) ?? SERVICE_TOWNS[0];

  const validateClient = (values: FormState): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (values.name.trim().length < 2) {
      errors.name = 'Please enter your full name.';
    }
    if (values.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!values.town) {
      errors.town = 'Please select your Massachusetts town.';
    }
    if (!values.service) {
      errors.service = 'Please select a service.';
    }
    if (values.message.trim().length < 10) {
      errors.message = 'Please share a brief description of your plumbing or heating need (10+ characters).';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const clientErrors = validateClient(form);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }

    setFieldErrors({});
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.fieldErrors && typeof data.fieldErrors === 'object') {
          setFieldErrors(data.fieldErrors);
        }
        setSubmitError(data.error || 'Unable to submit your request. Please call us directly.');
        return;
      }

      setSubmittedRef({
        referenceId: data.referenceId,
        name: form.name.trim(),
        town: form.town,
        service: form.service,
      });
      setForm(INITIAL_FORM);
    } catch {
      setSubmitError(
        `Network issue sending form. For immediate assistance, please call ${BUSINESS.phoneDisplay}.`,
      );
    } finally {
      setSubmitting(false);
    }
  };

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({...prev, [key]: value}));
    if (fieldErrors[key]) {
      setFieldErrors((prev) => {
        const next = {...prev};
        delete next[key];
        return next;
      });
    }
  };

  return (
    <main>
      {/* Royal Blue Header */}
      <section className="bg-[#174EA6] text-[#FFFDF7] pt-36 pb-16 lg:pb-20">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm font-bold tracking-wide text-[#F4B942]">
                Contact &amp; Service Dispatch
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.06] tracking-tight">
                Call directly or request an estimate online.
              </h1>
              <p className="text-lg leading-relaxed text-[#FFFDF7]/85 max-w-2xl">
                For urgent leaks, no-heat calls, or water heater failures, calling is fastest. For
                planned installations, remodels, or quotes, send your project details below.
              </p>
            </div>

            <div className="lg:col-span-5 lg:text-right space-y-2 min-w-0">
              <p className="text-xs font-semibold tracking-wide text-[#F4B942]">
                Direct Line · Click to Call
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFDF7] hover:text-[#F4B942] transition-colors tabular-nums break-words"
              >
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-[#F4B942] shrink-0" strokeWidth={2.25} />
                <span>{BUSINESS.phoneInternational}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Split: Direct Info + Validated Form */}
      <section className="bg-[#FFFDF7] text-[#172B4D] py-14 sm:py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Direct Channels & Interactive Town Coverage */}
            <div className="lg:col-span-5 space-y-10 min-w-0">
              <div className="space-y-6 pb-8 border-b border-[#172B4D]/12">
                <h2 className="text-2xl font-extrabold tracking-tight">Direct Contact Details</h2>

                <div className="space-y-5">
                  <div className="space-y-1">
                    <p className="text-xs font-bold tracking-wide text-[#174EA6]">Phone</p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="inline-flex items-center gap-2.5 text-xl font-bold text-[#172B4D] hover:text-[#174EA6] transition-colors tabular-nums"
                    >
                      <Phone className="w-4 h-4 text-[#174EA6]" />
                      <span>{BUSINESS.phoneInternational}</span>
                    </a>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold tracking-wide text-[#174EA6]">Email</p>
                    <a
                      href={BUSINESS.emailHref}
                      className="inline-flex items-center gap-2.5 text-base font-semibold text-[#172B4D] hover:text-[#174EA6] transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-[#174EA6] shrink-0" />
                      <span>{BUSINESS.email}</span>
                    </a>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold tracking-wide text-[#174EA6]">Home Base</p>
                    <div className="flex items-start gap-2.5 text-base text-[#172B4D]/85">
                      <MapPin className="w-4 h-4 text-[#174EA6] shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#172B4D]">{BUSINESS.location}</p>
                        <p className="text-sm text-[#172B4D]/70">
                          Field-dispatched service across North Quabbin &amp; Pioneer Valley
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-5 text-sm font-bold">
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#174EA6] hover:underline"
                  >
                    <span>Instagram ({BUSINESS.instagramHandle})</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={BUSINESS.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#174EA6] hover:underline"
                  >
                    <span>Facebook</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Verified 10-Town Service Coverage Explorer (no unverified street-address map pin) */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold tracking-wide text-[#174EA6]">
                    Massachusetts Service Area
                  </p>
                  <h3 className="text-xl font-extrabold text-[#172B4D]">
                    Select your town to verify coverage
                  </h3>
                </div>

                <div
                  role="tablist"
                  aria-label="Massachusetts service towns"
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2"
                >
                  {SERVICE_TOWNS.map((town) => {
                    const active = selectedTown === town.name;
                    return (
                      <button
                        key={town.name}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => {
                          setSelectedTown(town.name);
                          updateField('town', town.name);
                        }}
                        className={`px-3.5 py-2.5 text-left text-sm font-semibold border transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#174EA6] text-[#FFFDF7] border-[#174EA6]'
                            : 'bg-[#F1F3F5] text-[#172B4D] border-[#172B4D]/10 hover:border-[#174EA6]'
                        }`}
                      >
                        {town.name}
                      </button>
                    );
                  })}
                </div>

                <div className="p-5 bg-[#F1F3F5] border border-[#172B4D]/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#174EA6]">
                    <span>{activeTownInfo.region}</span>
                    <span className="tabular-nums">ZIP {activeTownInfo.zip}</span>
                  </div>
                  <p className="text-base font-bold text-[#172B4D]">
                    {activeTownInfo.name}, {activeTownInfo.county}
                  </p>
                  <p className="text-sm text-[#172B4D]/75">{activeTownInfo.notes}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Service Request Form */}
            <div className="lg:col-span-7 bg-[#F1F3F5] p-6 sm:p-10 lg:p-12 border border-[#172B4D]/10">
              {submittedRef ? (
                <div className="space-y-6 py-6" role="status" aria-live="polite">
                  <div className="flex items-center gap-3 text-[#174EA6]">
                    <CheckCircle2 className="w-8 h-8 shrink-0" />
                    <div>
                      <p className="text-xs font-bold tracking-wide text-[#174EA6]">
                        Inquiry Confirmed · Ref #{submittedRef.referenceId}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
                        Thank you, {submittedRef.name}.
                      </h2>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-[#172B4D]/85">
                    Your request for <strong>{submittedRef.service}</strong> in{' '}
                    <strong>{submittedRef.town}, MA</strong> has been logged. TDW Plumbing &amp;
                    Heating Corp. will follow up promptly.
                  </p>
                  <div className="p-5 bg-[#FFFDF7] border border-[#172B4D]/10 space-y-2">
                    <p className="text-sm font-bold text-[#172B4D]">
                      Need faster attention for an active leak or heating outage?
                    </p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="inline-flex items-center gap-2 text-base font-extrabold text-[#174EA6] hover:underline tabular-nums"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {BUSINESS.phoneDisplay}</span>
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmittedRef(null)}
                    className="px-6 py-3 bg-[#172B4D] text-[#FFFDF7] text-sm font-bold hover:bg-[#174EA6] transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="space-y-2 pb-4 border-b border-[#172B4D]/12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#172B4D]">
                      Request Plumbing or Heating Service
                    </h2>
                    <p className="text-sm text-[#172B4D]/75">
                      Complete the fields below for estimates, installations, or scheduled repairs.
                    </p>
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="p-4 bg-[#FFFDF7] border border-red-600/40 text-red-800 flex items-start gap-3 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-sm font-bold text-[#172B4D]">
                        Full Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="Your name"
                        aria-invalid={Boolean(fieldErrors.name)}
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-[#172B4D]/20 text-[#172B4D] text-[15px] focus:border-[#174EA6]"
                      />
                      {fieldErrors.name && (
                        <p className="text-xs font-medium text-red-700">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="block text-sm font-bold text-[#172B4D]">
                        Phone Number <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="(978) 555-0142"
                        aria-invalid={Boolean(fieldErrors.phone)}
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-[#172B4D]/20 text-[#172B4D] text-[15px] focus:border-[#174EA6]"
                      />
                      {fieldErrors.phone && (
                        <p className="text-xs font-medium text-red-700">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-sm font-bold text-[#172B4D]">
                        Email Address <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(fieldErrors.email)}
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-[#172B4D]/20 text-[#172B4D] text-[15px] focus:border-[#174EA6]"
                      />
                      {fieldErrors.email && (
                        <p className="text-xs font-medium text-red-700">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-town" className="block text-sm font-bold text-[#172B4D]">
                        Massachusetts Town <span className="text-red-700">*</span>
                      </label>
                      <select
                        id="contact-town"
                        value={form.town}
                        onChange={(e) => updateField('town', e.target.value)}
                        aria-invalid={Boolean(fieldErrors.town)}
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-[#172B4D]/20 text-[#172B4D] text-[15px] focus:border-[#174EA6]"
                      >
                        {SERVICE_TOWNS.map((t) => (
                          <option key={t.name} value={t.name}>
                            {t.name}, MA ({t.zip})
                          </option>
                        ))}
                        <option value="Other Massachusetts Community">
                          Other Massachusetts Community
                        </option>
                      </select>
                      {fieldErrors.town && (
                        <p className="text-xs font-medium text-red-700">{fieldErrors.town}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-service" className="block text-sm font-bold text-[#172B4D]">
                        Service Needed <span className="text-red-700">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={form.service}
                        onChange={(e) => updateField('service', e.target.value)}
                        aria-invalid={Boolean(fieldErrors.service)}
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-[#172B4D]/20 text-[#172B4D] text-[15px] focus:border-[#174EA6]"
                      >
                        {SERVICE_OFFERINGS.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.service && (
                        <p className="text-xs font-medium text-red-700">{fieldErrors.service}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <span className="block text-sm font-bold text-[#172B4D]">Urgency</span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => updateField('urgency', 'standard')}
                          className={`py-3 px-3 text-sm font-semibold border transition-colors cursor-pointer ${
                            form.urgency === 'standard'
                              ? 'bg-[#174EA6] text-[#FFFDF7] border-[#174EA6]'
                              : 'bg-[#FFFDF7] text-[#172B4D] border-[#172B4D]/20'
                          }`}
                        >
                          Standard Quote
                        </button>
                        <button
                          type="button"
                          onClick={() => updateField('urgency', 'urgent')}
                          className={`py-3 px-3 text-sm font-semibold border transition-colors cursor-pointer ${
                            form.urgency === 'urgent'
                              ? 'bg-[#F4B942] text-[#172B4D] border-[#172B4D]'
                              : 'bg-[#FFFDF7] text-[#172B4D] border-[#172B4D]/20'
                          }`}
                        >
                          Urgent Issue
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-sm font-bold text-[#172B4D]">
                      Project or Issue Details <span className="text-red-700">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Tell us about your boiler, water heater, leak, fixture installation, or drain issue..."
                      aria-invalid={Boolean(fieldErrors.message)}
                      className="w-full px-4 py-3 bg-[#FFFDF7] border border-[#172B4D]/20 text-[#172B4D] text-[15px] focus:border-[#174EA6]"
                    />
                    {fieldErrors.message && (
                      <p className="text-xs font-medium text-red-700">{fieldErrors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#174EA6] text-[#FFFDF7] font-extrabold text-[15px] hover:bg-[#2678E8] disabled:opacity-60 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Sending Request...' : 'Send Service Request'}</span>
                    </button>
                    <p className="text-xs text-[#172B4D]/65">
                      MA Master Plumber License #{BUSINESS.licenseNumber}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
