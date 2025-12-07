"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { translations } from "../translations";
import "../login/login.css";

export default function RegisterPage() {
    const [lang, setLang] = useState("nl");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const t = translations[lang];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError(t.auth.passwordMismatch);
            return;
        }

        if (password.length < 6) {
            setError(t.auth.passwordTooShort);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || t.auth.registerError);
            }

            setSuccess(t.auth.registerSuccess);
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        } catch (err) {
            setError(err.message);
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
                        <h1>{t.auth.registerTitle}</h1>
                        <p>{t.auth.registerSubtitle}</p>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        {error && <div className="auth-error">{error}</div>}
                        {success && <div className="auth-success">{success}</div>}

                        <div className="form-group">
                            <label htmlFor="name">{t.auth.name}</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={t.auth.namePlaceholder}
                                required
                            />
                        </div>

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
                                minLength={6}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">{t.auth.confirmPassword}</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder={t.auth.confirmPasswordPlaceholder}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="auth-button"
                            disabled={loading}
                        >
                            {loading ? t.auth.loading : t.auth.registerButton}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            {t.auth.hasAccount}{" "}
                            <Link href="/login">{t.auth.loginLink}</Link>
                        </p>
                    </div>
                </div>
            </div>

            <Footer lang={lang} setLang={setLang} />
        </div>
    );
}
