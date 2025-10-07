"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-primary font-mono text-xl">04.</span> Get In
            Touch
          </h2>
          <div className="h-px w-64 bg-border" />
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              My inbox is always open. Whether you have an opportunity, a
              question, or just want to say hi, I’ll try my best to get back to
              you as soon as possible!
            </p>
            <div className="space-y-4">
              <Card className="flex items-center gap-4 p-4 hover:border-primary/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:andresgarciapedreros@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    andresgarciapedreros@gmail.com
                  </a>
                </div>
              </Card>

              <Card className="flex items-center gap-4 p-4 hover:border-primary/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+573058797720"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +57 305 879 7720
                  </a>
                </div>
              </Card>

              <Card className="flex items-center gap-4 p-4 hover:border-primary/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Bogotá, Colombia</p>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-8 hover:border-primary/50 transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="your.email@gmail.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-green-600 text-center text-sm animate-fade-in">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center text-sm animate-fade-in">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>

      <footer className="mt-24 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Built with Next.js & Tailwind CSS. Deployed on Vercel.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          © 2025 Andrés García. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
