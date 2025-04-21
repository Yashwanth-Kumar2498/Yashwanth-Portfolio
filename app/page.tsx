"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Yashwanth Kumar Mummana</h1>
        <p className="text-xl text-gray-600">Mechanical Engineer | CAD Trainer | ANSYS Analyst</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">
          Results-driven Mechanical Engineer with experience in CAD, CAE, and technical training under ATC Project (Telangana Govt. & TCS).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card><CardContent className="p-4"><h4 className="text-lg font-bold">CATIA Projects</h4><ul className="list-disc list-inside text-gray-700">
            <li><strong>Assembly:</strong> Engine block, gear box</li>
            <li><strong>Surfaces:</strong> Car body, mouse model</li></ul></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="text-lg font-bold">ANSYS Projects</h4><ul className="list-disc list-inside text-gray-700">
            <li>Thermal and Structural simulations</li></ul></CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full p-2 border rounded" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 border rounded h-24" required></textarea>
          <Button type="submit" className="flex gap-2 items-center"><Mail size={16} /> Send Message</Button>
          {submitted && <p className="text-green-600">Message sent successfully!</p>}
        </form>
      </section>

      <section className="text-center">
        <Button variant="outline" className="flex gap-2 items-center mx-auto">
          <Download size={16} />
          <a href="/Yashwanth-Kumar-Mummana-Resume.pdf" download>Download My Resume</a>
        </Button>
      </section>
    </div>
  );
}
