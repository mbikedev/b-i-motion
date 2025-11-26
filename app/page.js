"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { translations } from "./translations";

const FlagNL = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="flag-icon">
    <rect width="900" height="600" fill="#21468b" />
    <rect width="900" height="400" fill="#fff" />
    <rect width="900" height="200" fill="#ae1c28" />
  </svg>
);

const FlagUK = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="flag-icon">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export default function Home() {
  const [lang, setLang] = useState("nl");
  const t = translations[lang];

  return (
    <main className="container">
      <div className="language-switcher">
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

      <div className="line"></div>

      <header className="header">
        {t.header}
      </header>

      <div className="eye-container">
        <Image
          src="/eye.png"
          alt="Mysterious Eye"
          width={600}
          height={400}
          className="eye-image"
          priority
        />
      </div>

      <div className="content-wrapper">
        <div className="content-block">
          <h1>{t.title}</h1>
          <p>
            {t.subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className="content-block">
          <div className="highlight-text">{t.highlight1}</div>
          <div className="highlight-text">{t.highlight2}</div>
        </div>

        <div className="content-block">
          <p className="sub-text">{t.sub1}</p>
          <p className="sub-text">{t.sub2}</p>
          <p className="sub-text">
            {t.sub3.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.sub3.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <Link href="/about" className="enter-button">
        {t.button}
      </Link>
    </main>
  );
}
