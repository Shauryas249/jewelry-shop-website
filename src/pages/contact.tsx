import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  Navigation as NavigationIcon,
  Shield,
  Award,
  Star,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';

const ContactPage = () => {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    preferredTime: ''
  });

  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    type: '',
    message: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('General inquiry submitted:', inquiryForm);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setInquiryForm({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      preferredTime: ''
    });
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request submitted:', appointmentForm);
    alert('Thank you for your appointment request! We will confirm your appointment within 2 hours.');
    setAppointmentForm({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      type: '',
      message: ''
    });
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 7:00 PM' }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '+91 98765 43210',
      secondary: '+91 11 2345 6789',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@heritagejewels.com',
      secondary: 'sales@heritagejewels.com',
      description: 'Send us your inquiries anytime'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+91 98765 43210',
      secondary: 'Quick responses guaranteed',
      description: 'Chat with us instantly'
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: 'BIS Hallmark',
      description: 'All gold jewelry certified'
    },
    {
      icon: Award,
      title: 'GIA Certified',
      description: 'Diamond authenticity guaranteed'
    },
    {
      icon: Star,
      title: 'ISO 9001:2015',
      description: 'Quality management certified'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-playfair text-3xl font-bold text-charcoal mb-3">
            Contact Heritage Jewels
          </h1>
          <p className="text-base text-charcoal/80 max-w-2xl mx-auto">
            Visit our showroom or get in touch with our jewelry experts. We're here to help you find the perfect piece for your special moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Store Information */}
          <div className="space-y-6">
            {/* Store Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="font-playfair text-xl text-charcoal flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-rose-gold" />
                    Our Showroom
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Heritage Jewels</h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      123 Jewelry Street, Karol Bagh<br />
                      New Delhi - 110005<br />
                      India
                    </p>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="h-64 md:h-80 rounded-lg overflow-hidden bg-charcoal/10 border-2 border-rose-gold">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674665!2d77.1906!3d28.6519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzA2LjgiTiA3N8KwMTEnMjYuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Heritage Jewels Location"
                    />
                  </div>

                  <Button className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white min-h-[44px]">
                    <NavigationIcon className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours & Contact Methods Combined */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="font-playfair text-lg text-charcoal flex items-center gap-2">
                    <Clock className="h-4 w-4 text-rose-gold" />
                    Hours & Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Business Hours */}
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-charcoal font-medium">{schedule.day}</span>
                        <span className="text-charcoal/80">{schedule.hours}</span>
                      </div>
                    ))}
                    <div className="text-center pt-2">
                      <Badge className="bg-gold text-charcoal text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Open Now
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  {/* Contact Methods - Mobile Friendly */}
                  <div className="space-y-3">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-rose-gold/10 p-2 rounded-lg">
                          <method.icon className="h-4 w-4 text-rose-gold" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-charcoal text-sm mb-0.5">{method.title}</h4>
                          {method.title === 'Phone' ? (
                            <a 
                              href={`tel:${method.primary}`}
                              className="text-charcoal font-medium text-sm hover:text-rose-gold transition-colors"
                            >
                              {method.primary}
                            </a>
                          ) : method.title === 'WhatsApp' ? (
                            <a 
                              href={`https://wa.me/${method.primary.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-charcoal font-medium text-sm hover:text-rose-gold transition-colors"
                            >
                              {method.primary}
                            </a>
                          ) : method.title === 'Email' ? (
                            <a 
                              href={`mailto:${method.primary}`}
                              className="text-charcoal font-medium text-sm hover:text-rose-gold transition-colors"
                            >
                              {method.primary}
                            </a>
                          ) : (
                            <p className="text-charcoal font-medium text-sm">{method.primary}</p>
                          )}
                          <p className="text-charcoal/70 text-xs">{method.secondary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="font-playfair text-lg text-charcoal">
                    Our Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-cream rounded-lg">
                        <cert.icon className="h-5 w-5 text-rose-gold" />
                        <div>
                          <h4 className="font-semibold text-charcoal text-sm">{cert.title}</h4>
                          <p className="text-xs text-charcoal/70">{cert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Contact Forms */}
          <div className="space-y-6">
            {/* General Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="font-playfair text-xl text-charcoal">
                    General Inquiry
                  </CardTitle>
                  <p className="text-charcoal/70 text-sm">
                    Have questions about our jewelry or services? Send us a message.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="inquiry-name" className="text-sm">Full Name *</Label>
                        <Input
                          id="inquiry-name"
                          value={inquiryForm.name}
                          onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                          placeholder="Your full name"
                          required
                          className="border-charcoal/20 focus:border-rose-gold h-9"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiry-phone" className="text-sm">Phone Number *</Label>
                        <Input
                          id="inquiry-phone"
                          value={inquiryForm.phone}
                          onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          required
                          className="border-charcoal/20 focus:border-rose-gold h-9"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiry-email" className="text-sm">Email Address *</Label>
                      <Input
                        id="inquiry-email"
                        type="email"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                        className="border-charcoal/20 focus:border-rose-gold h-9"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="inquiry-subject" className="text-sm">Subject</Label>
                        <Select
                          value={inquiryForm.subject}
                          onValueChange={(value) => setInquiryForm({...inquiryForm, subject: value})}
                        >
                          <SelectTrigger className="border-charcoal/20 focus:border-rose-gold h-9">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Information</SelectItem>
                            <SelectItem value="custom">Custom Jewelry</SelectItem>
                            <SelectItem value="repair">Jewelry Repair</SelectItem>
                            <SelectItem value="certification">Certification</SelectItem>
                            <SelectItem value="pricing">Pricing Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="inquiry-time" className="text-sm">Preferred Contact Time</Label>
                        <Select
                          value={inquiryForm.preferredTime}
                          onValueChange={(value) => setInquiryForm({...inquiryForm, preferredTime: value})}
                        >
                          <SelectTrigger className="border-charcoal/20 focus:border-rose-gold h-9">
                            <SelectValue placeholder="When should we contact you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (10 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                            <SelectItem value="anytime">Anytime</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiry-message" className="text-sm">Message *</Label>
                      <Textarea
                        id="inquiry-message"
                        value={inquiryForm.message}
                        onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                        placeholder="Please describe your inquiry in detail..."
                        rows={3}
                        required
                        className="border-charcoal/20 focus:border-rose-gold"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white"
                    >
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Virtual Appointment Booking */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="font-playfair text-xl text-charcoal flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-rose-gold" />
                    Book an Appointment
                  </CardTitle>
                  <p className="text-charcoal/70 text-sm">
                    Schedule a personal consultation with our jewelry experts.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAppointmentSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="appointment-name" className="text-sm">Full Name *</Label>
                        <Input
                          id="appointment-name"
                          value={appointmentForm.name}
                          onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                          placeholder="Your full name"
                          required
                          className="border-charcoal/20 focus:border-rose-gold h-9"
                        />
                      </div>
                      <div>
                        <Label htmlFor="appointment-phone" className="text-sm">Phone Number *</Label>
                        <Input
                          id="appointment-phone"
                          value={appointmentForm.phone}
                          onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          required
                          className="border-charcoal/20 focus:border-rose-gold h-9"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="appointment-email" className="text-sm">Email Address *</Label>
                      <Input
                        id="appointment-email"
                        type="email"
                        value={appointmentForm.email}
                        onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                        className="border-charcoal/20 focus:border-rose-gold h-9"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="appointment-date" className="text-sm">Preferred Date *</Label>
                        <Input
                          id="appointment-date"
                          type="date"
                          value={appointmentForm.date}
                          onChange={(e) => setAppointmentForm({...appointmentForm, date: e.target.value})}
                          required
                          className="border-charcoal/20 focus:border-rose-gold h-9"
                        />
                      </div>
                      <div>
                        <Label htmlFor="appointment-time" className="text-sm">Preferred Time *</Label>
                        <Select
                          value={appointmentForm.time}
                          onValueChange={(value) => setAppointmentForm({...appointmentForm, time: value})}
                        >
                          <SelectTrigger className="border-charcoal/20 focus:border-rose-gold h-9">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                            <SelectItem value="17:00">5:00 PM</SelectItem>
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="appointment-type" className="text-sm">Appointment Type *</Label>
                      <Select
                        value={appointmentForm.type}
                        onValueChange={(value) => setAppointmentForm({...appointmentForm, type: value})}
                      >
                        <SelectTrigger className="border-charcoal/20 focus:border-rose-gold h-9">
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="bridal">Bridal Jewelry Consultation</SelectItem>
                          <SelectItem value="custom">Custom Design Discussion</SelectItem>
                          <SelectItem value="repair">Jewelry Repair Assessment</SelectItem>
                          <SelectItem value="valuation">Jewelry Valuation</SelectItem>
                          <SelectItem value="virtual">Virtual Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="appointment-message" className="text-sm">Additional Notes</Label>
                      <Textarea
                        id="appointment-message"
                        value={appointmentForm.message}
                        onChange={(e) => setAppointmentForm({...appointmentForm, message: e.target.value})}
                        placeholder="Any specific requirements or questions..."
                        rows={2}
                        className="border-charcoal/20 focus:border-rose-gold"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white"
                    >
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Security & Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10"
        >
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="font-playfair text-xl font-bold text-charcoal mb-3">
                  Your Trust, Our Priority
                </h2>
                <p className="text-charcoal/70 text-sm max-w-2xl mx-auto">
                  We ensure the highest standards of security and authenticity in all our jewelry pieces and customer interactions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-rose-gold/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-rose-gold" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-1 text-sm">SSL Secured</h3>
                  <p className="text-xs text-charcoal/70">All communications encrypted</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-rose-gold" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-1 text-sm">Certified Jewelry</h3>
                  <p className="text-xs text-charcoal/70">BIS & GIA authenticated</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-rose-gold" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-1 text-sm">Quality Guarantee</h3>
                  <p className="text-xs text-charcoal/70">Lifetime craftsmanship warranty</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-rose-gold" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-1 text-sm">Trusted Since 1952</h3>
                  <p className="text-xs text-charcoal/70">Three generations of excellence</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;