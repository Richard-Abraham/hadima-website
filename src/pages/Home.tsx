// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Heart, 
  Users, 
  BookOpen 
} from "lucide-react";
const Component = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        
        // Determine active section
        const sections = ['about', 'services', 'donate', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <header 
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-2xl text-purple-600 hover:text-purple-700 transition-colors">
              HADIMA
            </Link>
            <nav className="hidden md:flex gap-8">
              {['about', 'services', 'donate', 'contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`capitalize transition-colors hover:text-purple-600 ${
                    activeSection === item ? 'text-purple-600 font-semibold' : 'text-gray-600'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 transition-all transform hover:scale-105"
            >
              Get Involved
            </Button>
          </div>
        </header>
  
        <main className="flex-1 pt-16">
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
                  Empowering Lives Through
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    {" "}Mental Wellness
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-gray-200">
                  Building resilience, fostering hope, and creating stronger communities together
                </p>
                <div className="flex gap-6 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all"
                  >
                    Learn More
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 bg-transparent text-white hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all"
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>
          </section>
  
          {/* Services Section */}
          <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">
                Our Impact Areas
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Heart className="w-12 h-12 text-purple-600" />,
                    title: "Mental Health Support",
                    description: "Comprehensive care and counseling services for emotional wellbeing",
                  },
                  {
                    icon: <Users className="w-12 h-12 text-purple-600" />,
                    title: "Community Building",
                    description: "Creating strong support networks and fostering connections",
                  },
                  {
                    icon: <BookOpen className="w-12 h-12 text-purple-600" />,
                    title: "Education & Awareness",
                    description: "Spreading knowledge and understanding about mental health",
                  },
                ].map((service, index) => (
                  <Card 
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardHeader className="text-center">
                      <div className="mb-6">{service.icon}</div>
                      <CardTitle className="text-2xl text-purple-600">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
  
          {/* Impact Stats Section */}
          <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {[
                  { number: "500+", label: "Lives Transformed" },
                  { number: "750", label: "Community Members" },
                  { number: "25", label: "Programs Launched" },
                ].map((stat, index) => (
                  <div key={index} className="transform hover:scale-105 transition-all">
                    <div className="text-5xl font-bold mb-4">{stat.number}</div>
                    <div className="text-xl text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          {/* Contact Form */}
          <section className="py-24 bg-white" id="contact">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                <form className="space-y-6">
                  <Input 
                    placeholder="Your Name" 
                    className="h-12 border-2 focus:border-purple-600 transition-colors"
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="h-12 border-2 focus:border-purple-600 transition-colors"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-[150px] border-2 focus:border-purple-600 transition-colors"
                  />
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
  
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">About HADIMA</h3>
                <p className="text-gray-400">
                  Empowering individuals and strengthening communities through mental health support and advocacy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                <nav className="flex flex-col gap-3">
                  {['About', 'Services', 'Donate', 'Contact'].map((link) => (
                    <Link
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </nav>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Contact</h3>
                <div className="text-gray-400 space-y-3">
                  <p>contact@hadima.org</p>
                  <p>+254 123 456 789</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div className="flex gap-6">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                      <Icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} HADIMA. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Component;