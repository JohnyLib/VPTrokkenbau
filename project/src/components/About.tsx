import React from 'react';
import { Shield, Clock, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With over 15 years of experience, we deliver exceptional drywall solutions for residential and commercial projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              We stand behind our work with comprehensive warranties and quality assurance.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Clock className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
            <p className="text-gray-600">
              We respect your time and ensure projects are completed within agreed timelines.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Wrench className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Our skilled professionals bring years of experience and craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;