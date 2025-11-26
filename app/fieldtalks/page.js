"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { translations } from "../translations";

export default function FieldTalks() {
    const [lang, setLang] = useState("nl");
    const t = translations[lang];

    return (
        <div className="page-container">
            <Navbar lang={lang} setLang={setLang} />
            <main className="page-content">
                <h1>{t.fieldtalks.title}</h1>
                <p>{t.fieldtalks.content}</p>
            </main>
            <Footer translations={t} />
        </div>
    );
}
