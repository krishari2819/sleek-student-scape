
import { useState } from "react";
import { Mail, Download, Send, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "ebb154f1-e8cd-4388-b9c5-fe4a80311468");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("subject", `New Contact Form Message from ${formData.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success(
          "Message sent successfully! Krishna will get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume file
    toast.info("Resume download will be available soon!");
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-purple-500" />
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full glass p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 cursor-hover"
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full glass p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 cursor-hover"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full glass p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 cursor-hover resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 cursor-hover bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span className="gradient-text font-semibold">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info & Actions */}
          <div className="space-y-8">
            {/* Resume Download */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Download className="w-6 h-6 mr-3 text-cyan-500" />
                Get My Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                Download my resume to learn more about my experience, skills,
                and achievements.
              </p>
              <button
                onClick={handleDownloadResume}
                className="glass px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 cursor-hover bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span className="gradient-text font-semibold">
                  <a
                    href="/RS-Krishna-resume.pdf"
                    download="RS-Krishna-Resume.pdf"
                  >
                    Download Resume
                  </a>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/rs-krishna-0711a924a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 cursor-hover group"
                >
                  <div className="p-3 glass rounded-full bg-blue-500/10">
                    <Linkedin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:gradient-text transition-all duration-300">
                      LinkedIn
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Connect professionally
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/KRI5HNA-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 cursor-hover group"
                >
                  <div className="p-3 glass rounded-full bg-purple-500/10">
                    <Github className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:gradient-text transition-all duration-300">
                      GitHub
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Check out my code
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:krishna61223@gmail.com"
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 cursor-hover group"
                >
                  <div className="p-3 glass rounded-full bg-green-500/10">
                    <Mail className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:gradient-text transition-all duration-300">
                      Email
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      krishna61223@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
