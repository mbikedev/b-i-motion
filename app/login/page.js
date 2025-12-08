"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { translations } from "../translations";
import "./login.css";

export default function LoginPage() {
    const [lang, setLang] = useState("nl");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const t = translations[lang];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError(t.auth.loginError);
            } else {
                router.push("/boeken");
                router.refresh();
            }
        } catch (err) {
            setError(t.auth.loginError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-container">
            <Navbar lang={lang} setLang={setLang} />

            <div className="auth-page">
                <div className="auth-container">
                    <div className="auth-header">
                        <h1>{t.auth.loginTitle}</h1>
                        <p>{t.auth.loginSubtitle}</p>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        {error && <div className="auth-error">{error}</div>}

                        <div className="form-group">
                            <label htmlFor="email">{t.auth.email}</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t.auth.emailPlaceholder}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">{t.auth.password}</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t.auth.passwordPlaceholder}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="auth-button"
                            disabled={loading}
                        >
                            {loading ? t.auth.loading : t.auth.loginButton}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            {t.auth.noAccount}{" "}
                            <Link href="/register">{t.auth.registerLink}</Link>
                        </p>
                    </div>
                </div>
            </div>

            <Footer lang={lang} setLang={setLang} />
        </div>
    );
}
