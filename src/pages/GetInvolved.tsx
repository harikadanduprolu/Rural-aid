import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, HandHeart, Building } from 'lucide-react';

export function GetInvolvedPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Get Involved
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join us in our mission to transform rural communities
            </p>
          </div>
        </div>
      </div>

      {/* Ways to Help */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Ways to Help</h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose how you want to make a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Heart className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Donate</h3>
              <p className="text-gray-600 mb-4">
                Support our projects with a one-time or monthly donation.
                Every contribution helps create lasting change.
              </p>
              <Link
                to="/donate"
                className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Donate Now
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Share your skills and time with rural communities.
                Join our volunteer programs across India.
              </p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
                Join as Volunteer
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Building className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partner</h3>
              <p className="text-gray-600 mb-4">
                Collaborate with us as an organization or corporate partner
                to create bigger impact.
              </p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Volunteer Opportunities</h2>
            <p className="mt-4 text-xl text-gray-600">
              Current openings for volunteers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Teaching Assistant
              </h3>
              <p className="text-gray-600 mb-4">
                Help teach English and basic computer skills to rural children.
                Weekend programs available.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Location: Maharashtra</span>
                <button className="text-orange-600 hover:text-orange-700">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Agricultural Mentor
              </h3>
              <p className="text-gray-600 mb-4">
                Share modern farming techniques with rural farmers.
                Monthly visits required.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Location: Punjab</span>
                <button className="text-orange-600 hover:text-orange-700">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner With Us */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Partner With Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Collaboration opportunities for organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Corporate Partnerships
              </h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• CSR project implementation</li>
                <li>• Employee volunteering programs</li>
                <li>• Skill development initiatives</li>
                <li>• Impact assessment and reporting</li>
              </ul>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
                Explore Corporate Partnerships
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                NGO Collaborations
              </h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Joint project implementation</li>
                <li>• Resource sharing</li>
                <li>• Knowledge exchange</li>
                <li>• Capacity building</li>
              </ul>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
                Partner as NGO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-xl text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                I'm interested in
              </label>
              <select
                id="interest"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option>Volunteering</option>
                <option>Corporate Partnership</option>
                <option>NGO Collaboration</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}