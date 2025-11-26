"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { translations } from "../translations";

export default function About() {
    const [lang, setLang] = useState("nl");
    const t = translations[lang];

    return (
        <div className="about-page">
            <Navbar lang={lang} setLang={setLang} />

            {/* Header Section */}
            <header className="about-header">
                <div className="about-header-content">
                    <Image
                        src="/christian.png"
                        alt="Christian De Ley"
                        width={120}
                        height={120}
                        className="about-avatar"
                    />
                    <div className="about-header-text">
                        <h1>{t.about.headerTitle}</h1>
                        <p>{t.about.headerSubtitle}</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="about-content">
                {t.about.sections.map((section, index) => (
                    <section key={index} className="about-section">
                        <h2 className="section-title">{section.title}</h2>
                        <div className="section-content">
                            {section.content.map((paragraph, pIndex) => (
                                <p key={pIndex}>{paragraph}</p>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            {/* Footer */}
            <footer className="about-footer">
                <p>{t.about.footer}</p>
            </footer>

            <Footer translations={t} />
        </div>
    );
}
