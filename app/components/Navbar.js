"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { translations } from "../translations";

const FlagNL = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="flag-icon">
        <rect width="900" height="600" fill="#21468b" />
        <rect width="900" height="400" fill="#fff" />
        <rect width="900" height="200" fill="#ae1c28" />
    </svg>
);

const FlagUK = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="flag-icon">
        <clipPath id="s2">
            <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t2">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s2)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t2)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
    </svg>
);

export default function Navbar({ lang, setLang }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t = translations[lang];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/" className="navbar-logo">
                    <Image
                        src="/bim-logo.webp"
                        alt="Blueprint in Motion"
                        width={40}
                        height={40}
                        className="navbar-logo-image"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    <Link href="/about">{t.nav.about}</Link>
                    <Link href="/manifest">{t.nav.manifest}</Link>
                    <Link href="/boeken">{t.nav.boeken}</Link>
                    <Link href="/fieldtalks">{t.nav.fieldtalks}</Link>
                    <Link href="/integriteit">{t.nav.integriteit}</Link>
                </div>

                {/* Language Switcher */}
                <div className="navbar-lang-switcher">
                    <button
                        className={`lang-btn ${lang === "nl" ? "active" : ""}`}
                        onClick={() => setLang("nl")}
                        aria-label="Switch to Dutch"
                    >
                        <FlagNL />
                    </button>
                    <button
                        className={`lang-btn ${lang === "en" ? "active" : ""}`}
                        onClick={() => setLang("en")}
                        aria-label="Switch to English"
                    >
                        <FlagUK />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</Link>
                <Link href="/manifest" onClick={() => setMobileMenuOpen(false)}>{t.nav.manifest}</Link>
                <Link href="/boeken" onClick={() => setMobileMenuOpen(false)}>{t.nav.boeken}</Link>
                <Link href="/fieldtalks" onClick={() => setMobileMenuOpen(false)}>{t.nav.fieldtalks}</Link>
                <Link href="/integriteit" onClick={() => setMobileMenuOpen(false)}>{t.nav.integriteit}</Link>
            </div>
        </nav>
    );
}
