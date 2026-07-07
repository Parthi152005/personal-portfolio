import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        'service_82ivj39',
        'template_09susqt',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Parthiban S',
        },
        'Ob47unQS20B-o7Gu8'
      );

      if (result.status === 200) {
        toast.success("✅ Message sent successfully! I'll get back to you soon!");
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("❌ Failed to send message. Please try again or contact directly via email.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative bg-[#0B1220] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-[#F9FAFB] tracking-tighter"
          >
            Get in Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-20 h-1 bg-[#2563EB] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-8"
          >
            <Card className="glass-card p-10 rounded-2xl border-[#374151] hover:border-[#2563EB]/50 transition-colors">
              <h3 className="text-2xl font-space font-bold text-[#F9FAFB] mb-8 tracking-tight">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-[#111827] border border-[#374151] rounded-xl group-hover:border-[#2563EB] transition-colors shadow-inner">
                    <Mail className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-[#D1D5DB] text-sm font-inter font-semibold mb-1 uppercase tracking-wider">Email</p>
                    <a href="mailto:parthi15august@gmail.com" className="text-lg font-inter font-medium text-[#F9FAFB] hover:text-[#2563EB] transition-colors">
                      parthi15august@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-[#111827] border border-[#374151] rounded-xl group-hover:border-[#10B981] transition-colors shadow-inner">
                    <Phone className="w-6 h-6 text-[#10B981]" />
                  </div>
                  <div>
                    <p className="text-[#D1D5DB] text-sm font-inter font-semibold mb-1 uppercase tracking-wider">Phone</p>
                    <a href="tel:+917418484430" className="text-lg font-inter font-medium text-[#F9FAFB] hover:text-[#10B981] transition-colors">
                      +91 7418484430
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-[#111827] border border-[#374151] rounded-xl group-hover:border-[#F59E0B] transition-colors shadow-inner">
                    <MapPin className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-[#D1D5DB] text-sm font-inter font-semibold mb-1 uppercase tracking-wider">Location</p>
                    <p className="text-lg font-inter font-medium text-[#F9FAFB]">Cuddalore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass-card p-8 rounded-2xl border-[#374151]">
              <div className="flex justify-around">
                <a href="https://linkedin.com/in/parthi-ban-0910152a5" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#111827] border border-[#374151] hover:border-[#2563EB] rounded-xl transition-all hover:-translate-y-1 group">
                  <Linkedin className="w-6 h-6 text-[#D1D5DB] group-hover:text-[#2563EB]" />
                </a>
                <a href="https://github.com/Parthi152005" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#111827] border border-[#374151] hover:border-[#F9FAFB] rounded-xl transition-all hover:-translate-y-1 group">
                  <Github className="w-6 h-6 text-[#D1D5DB] group-hover:text-[#F9FAFB]" />
                </a>
                <a href="mailto:parthi15august@gmail.com" className="p-4 bg-[#111827] border border-[#374151] hover:border-[#EF4444] rounded-xl transition-all hover:-translate-y-1 group">
                  <Mail className="w-6 h-6 text-[#D1D5DB] group-hover:text-[#EF4444]" />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Card className="glass-card p-10 rounded-2xl border-[#374151]">
              <h3 className="text-2xl font-space font-bold text-[#F9FAFB] mb-8 tracking-tight">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-semibold text-[#D1D5DB] mb-2">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="bg-[#111827] border border-[#374151] text-[#F9FAFB] font-inter placeholder:text-[#6B7280] focus:ring-2 focus:ring-[#2563EB] focus:border-transparent rounded-xl h-14" 
                    placeholder="John Doe" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-semibold text-[#D1D5DB] mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="bg-[#111827] border border-[#374151] text-[#F9FAFB] font-inter placeholder:text-[#6B7280] focus:ring-2 focus:ring-[#2563EB] focus:border-transparent rounded-xl h-14" 
                    placeholder="john@example.com" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-semibold text-[#D1D5DB] mb-2">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={5} 
                    className="bg-[#111827] border border-[#374151] text-[#F9FAFB] font-inter placeholder:text-[#6B7280] focus:ring-2 focus:ring-[#2563EB] focus:border-transparent rounded-xl resize-none" 
                    placeholder="How can I help you?" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 text-white py-6 rounded-xl font-inter font-bold transition-all duration-300 shadow-lg shadow-[#2563EB]/25 disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
