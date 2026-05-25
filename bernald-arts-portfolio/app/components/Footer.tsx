import React from "react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Bernald Arts
            </h3>
            <p className="text-gray-400">
              Creating exceptional art and design solutions for creative brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@bernaldarts.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; {currentYear} Bernald Arts. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
