"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-emerald-900">
          Inquiry Successfully Transmitted
        </h3>
        <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
          Thank you. Your technical requirements have been forwarded to our engineering and clinical team in Richmond, British Columbia. An engineering associate will review and respond within 1 business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold text-emerald-800 underline mt-2 inline-block cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="firstName" className="text-xs font-semibold text-slate-700">
            First Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            required
            placeholder="Dr. / Eng. Jane"
            className="w-full text-xs px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent bg-slate-50/50 text-slate-900"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lastName" className="text-xs font-semibold text-slate-700">
            Last Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            required
            placeholder="Doe"
            className="w-full text-xs px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent bg-slate-50/50 text-slate-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-slate-700">
            Corporate / Institutional Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="jane.doe@hospital.org"
            className="w-full text-xs px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent bg-slate-50/50 text-slate-900"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+1 (xxx) xxx-xxxx"
            className="w-full text-xs px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent bg-slate-50/50 text-slate-900"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="organization" className="text-xs font-semibold text-slate-700">
          Institution / Healthcare Organization
        </label>
        <input
          type="text"
          id="organization"
          placeholder="Hospital, Surgical Center, or University"
          className="w-full text-xs px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent bg-slate-50/50 text-slate-900"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="category" className="text-xs font-semibold text-slate-700">
          Inquiry Domain
        </label>
        <select
          id="category"
          className="w-full text-xs px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent bg-slate-50/50 text-slate-700"
        >
          <option>Biometric Telemetry Systems (LAT-X100)</option>
          <option>Surgical Visualization (LAV-4000)</option>
          <option>Cold-Plasma Sterilization (PlazmaX-70)</option>
          <option>Research Collaboration / Clinical Trials</option>
          <option>General Corporate Inquiry</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-slate-700">
          Message & Technical Requirements <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Please describe your facility's requirements or integration questions..."
          className="w-full text-xs px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent bg-slate-50/50 resize-y text-slate-900"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        isLoading={loading}
        className="w-full bg-[#0066CC] hover:bg-[#0052A3] font-semibold"
      >
        <Send className="w-4 h-4 mr-2" />
        Transmit Inquiry to Engineering
      </Button>
    </form>
  );
}
