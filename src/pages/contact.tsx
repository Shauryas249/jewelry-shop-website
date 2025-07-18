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
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl font-bold text-charcoal mb-4">
            Contact Heritage Jewels
          </h1>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Visit our showroom or get in touch with our jewelry experts. We're here to help you find the perfect piece for your special moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Store Information */}
          <div className="space-y-8">
            {/* Store Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-charcoal flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-rose-gold" />
                    Our Showroom
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Heritage Jewels</h3>
                    <p className="text-charcoal/80 leading-relaxed">
                      123 Jewelry Street, Karol Bagh<br />
                      New Delhi - 110005<br />
                      India
                    </p>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="aspect-video rounded-lg overflow-hidden bg-charcoal/10">
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

                  <Button className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white">
                    <NavigationIcon className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-charcoal flex items-center gap-3">
                    <Clock className="h-5 w-5 text-rose-gold" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-charcoal font-medium">{schedule.day}</span>
                        <span className="text-charcoal/80">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="text-center">
                    <Badge className="bg-gold text-charcoal">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Open Now
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-charcoal">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-rose-gold/10 p-3 rounded-lg">
                          <method.icon className="h-5 w-5 text-rose-gold" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-charcoal mb-1">{method.title}</h4>
                          <p className="text-charcoal font-medium">{method.primary}</p>
                          <p className="text-charcoal/70 text-sm">{method.secondary}</p>
                          <p className="text-charcoal/60 text-sm mt-1">{method.description}</p>
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
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-charcoal">
                    Our Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-cream rounded-lg">
                        <cert.icon className="h-6 w-6 text-rose-gold" />
                        <div>
                          <h4 className="font-semibold text-charcoal">{cert.title}</h4>
                          <p className="text-sm text-charcoal/70">{cert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Contact Forms */}
          <div className="space-y-8">
            {/* General Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-charcoal">
                    General Inquiry
                  </CardTitle>
                  <p className="text-charcoal/70">
                    Have questions about our jewelry or services? Send us a message.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="inquiry-name">Full Name *</Label>
                        <Input
                          id="inquiry-name"
                          value={inquiryForm.name}
                          onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                          placeholder="Your full name"
                          required
                          className="border-charcoal/20 focus:border-burgundy"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiry-phone">Phone Number *</Label>
                        <Input
                          id="inquiry-phone"
                          value={inquiryForm.phone}
                          onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          required
                          className="border-charcoal/20 focus:border-burgundy"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiry-email">Email Address *</Label>
                      <Input
                        id="inquiry-email"
                        type="email"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                        className="border-charcoal/20 focus:border-burgundy"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiry-subject">Subject</Label>
                      <Select
                        value={inquiryForm.subject}
                        onValueChange={(value) => setInquiryForm({...inquiryForm, subject: value})}
                      >
                        <SelectTrigger className="border-charcoal/20 focus:border-rose-gold">
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
                      <Label htmlFor="inquiry-time">Preferred Contact Time</Label>
                      <Select
                        value={inquiryForm.preferredTime}
                        onValueChange={(value) => setInquiryForm({...inquiryForm, preferredTime: value})}
                      >
                        <SelectTrigger className="border-charcoal/20 focus:border-burgundy">
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

                    <div>
                      <Label htmlFor="inquiry-message">Message *</Label>
                      <Textarea
                        id="inquiry-message"
                        value={inquiryForm.message}
                        onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                        placeholder="Please describe your inquiry in detail..."
                        rows={4}
                        required
                        className="border-charcoal/20 focus:border-burgundy"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-burgundy hover:bg-burgundy/90 text-cream"
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
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-charcoal flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-burgundy" />
                    Book an Appointment
                  </CardTitle>
                  <p className="text-charcoal/70">
                    Schedule a personal consultation with our jewelry experts.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="appointment-name">Full Name *</Label>
                        <Input
                          id="appointment-name"
                          value={appointmentForm.name}
                          onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                          placeholder="Your full name"
                          required
                          className="border-charcoal/20 focus:border-burgundy"
                        />
                      </div>
                      <div>
                        <Label htmlFor="appointment-phone">Phone Number *</Label>
                        <Input
                          id="appointment-phone"
                          value={appointmentForm.phone}
                          onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          required
                          className="border-charcoal/20 focus:border-burgundy"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="appointment-email">Email Address *</Label>
                      <Input
                        id="appointment-email"
                        type="email"
                        value={appointmentForm.email}
                        onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                        className="border-charcoal/20 focus:border-burgundy"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="appointment-date">Preferred Date *</Label>
                        <Input
                          id="appointment-date"
                          type="date"
                          value={appointmentForm.date}
                          onChange={(e) => setAppointmentForm({...appointmentForm, date: e.target.value})}
                          required
                          className="border-charcoal/20 focus:border-burgundy"
                        />
                      </div>
                      <div>
                        <Label htmlFor="appointment-time">Preferred Time *</Label>
                        <Select
                          value={appointmentForm.time}
                          onValueChange={(value) => setAppointmentForm({...appointmentForm, time: value})}
                        >
                          <SelectTrigger className="border-charcoal/20 focus:border-burgundy">
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
                      <Label htmlFor="appointment-type">Appointment Type *</Label>
                      <Select
                        value={appointmentForm.type}
                        onValueChange={(value) => setAppointmentForm({...appointmentForm, type: value})}
                      >
                        <SelectTrigger className="border-charcoal/20 focus:border-burgundy">
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
                      <Label htmlFor="appointment-message">Additional Notes</Label>
                      <Textarea
                        id="appointment-message"
                        value={appointmentForm.message}
                        onChange={(e) => setAppointmentForm({...appointmentForm, message: e.target.value})}
                        placeholder="Any specific requirements or questions..."
                        rows={3}
                        className="border-charcoal/20 focus:border-burgundy"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-burgundy hover:bg-burgundy/90 text-cream"
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
          className="mt-16"
        >
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">
                  Your Trust, Our Priority
                </h2>
                <p className="text-charcoal/70 max-w-2xl mx-auto">
                  We ensure the highest standards of security and authenticity in all our jewelry pieces and customer interactions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-burgundy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-burgundy" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">SSL Secured</h3>
                  <p className="text-sm text-charcoal/70">All communications encrypted</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-burgundy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-burgundy" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Certified Jewelry</h3>
                  <p className="text-sm text-charcoal/70">BIS & GIA authenticated</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-burgundy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-burgundy" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Quality Guarantee</h3>
                  <p className="text-sm text-charcoal/70">Lifetime craftsmanship warranty</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-burgundy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-burgundy" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Trusted Since 1985</h3>
                  <p className="text-sm text-charcoal/70">Three generations of excellence</p>
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