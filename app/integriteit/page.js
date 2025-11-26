"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { translations } from "../translations";

export default function Integriteit() {
    const [lang, setLang] = useState("nl");
    const t = translations[lang];

    return (
        <div className="page-container">
            <Navbar lang={lang} setLang={setLang} />
            <main className="page-content">
                <h1>{t.integriteit.title}</h1>
                <p>{t.integriteit.content}</p>
            </main>
            <Footer translations={t} />
        </div>
    );
}
