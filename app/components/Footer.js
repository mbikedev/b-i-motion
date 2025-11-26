"use client";

import { useState } from "react";
import Link from "next/link";
import "./Footer.css";

export default function Footer({ translations }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* CTA Section */}
        <div className="footer-cta">
          <h2>{translations?.footer?.cta?.title || "Klaar om te Beginnen?"}</h2>
          <p>{translations?.footer?.cta?.subtitle || "Begin met de Blueprint. Bestudeer de velden. Pas de protocollen toe."}</p>
          <div className="cta-buttons">
            <Link href="/boeken" className="cta-btn primary">
              {translations?.footer?.cta?.bookButton || "Koop het Boek"}
            </Link>
            <Link href="/fieldtalks" className="cta-btn secondary">
              {translations?.footer?.cta?.fieldTalksButton || "Verken FieldTalks"}
            </Link>
          </div>
        </div>

        {/* Main Footer Sections */}
        <div className="footer-main">
          {/* Contact Form */}
          <div className="footer-section contact-section">
            <h3>{translations?.footer?.contact?.title || "Neem Contact Op"}</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder={translations?.footer?.contact?.namePlaceholder || "Naam"}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={translations?.footer?.contact?.emailPlaceholder || "E-mail"}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder={translations?.footer?.contact?.messagePlaceholder || "Bericht"}
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                {translations?.footer?.contact?.submitButton || "Verstuur Bericht"}
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h3>{translations?.footer?.navigate?.title || "Navigeer"}</h3>
            <ul className="footer-links">
              <li><Link href="/">{translations?.footer?.navigate?.home || "Home"}</Link></li>
              <li><Link href="/manifest">{translations?.footer?.navigate?.manifest || "Blueprint Manifest"}</Link></li>
              <li><Link href="/boeken">{translations?.footer?.navigate?.books || "De Boeken"}</Link></li>
              <li><Link href="/fieldtalks">{translations?.footer?.navigate?.fieldtalks || "FieldTalks"}</Link></li>
              <li><Link href="/about">{translations?.footer?.navigate?.about || "Over"}</Link></li>
              <li><Link href="/integriteit">{translations?.footer?.navigate?.integrity || "Integriteit"}</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h3>{translations?.footer?.legal?.title || "Juridisch"}</h3>
            <ul className="footer-links">
              <li><Link href="/privacy">{translations?.footer?.legal?.privacy || "Privacybeleid"}</Link></li>
              <li><Link href="/gebruiksvoorwaarden">{translations?.footer?.legal?.terms || "Gebruiksvoorwaarden"}</Link></li>
              <li><Link href="/terugbetalingsbeleid">{translations?.footer?.legal?.refund || "Terugbetalingsbeleid"}</Link></li>
            </ul>

            <h3 className="social-title">{translations?.footer?.social?.title || "Verbind"}</h3>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-branding">
            <h4>Blueprint In Motion</h4>
            <p>{translations?.footer?.tagline || "Van Overleven naar Nalatenschap"}</p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} {translations?.footer?.copyright || "Blueprint In Motion. Alle rechten voorbehouden."}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
