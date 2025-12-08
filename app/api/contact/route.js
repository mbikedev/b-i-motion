import { NextResponse } from "next/server";
import { createContactMessage } from "@/lib/contact";
import { sendContactFormEmails } from "@/lib/email";

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address" },
                { status: 400 }
            );
        }

        // Validate message length
        if (message.trim().length < 10) {
            return NextResponse.json(
                { error: "Message must be at least 10 characters long" },
                { status: 400 }
            );
        }

        if (message.length > 5000) {
            return NextResponse.json(
                { error: "Message is too long. Please keep it under 5000 characters" },
                { status: 400 }
            );
        }

        // Create the contact message in database
        const contactMessage = await createContactMessage({ name, email, message });

        // Send confirmation and notification emails (don't block the response)
        // Using Promise.allSettled to ensure errors don't crash the API
        sendContactFormEmails({
            name,
            email,
            message,
            messageId: contactMessage.id
        }).then(results => {
            if (results.confirmation?.success) {
                console.log('Confirmation email sent successfully');
            } else {
                console.error('Failed to send confirmation email:', results.confirmation?.error);
            }

            if (results.notification?.success) {
                console.log('Admin notification sent successfully');
            } else {
                console.error('Failed to send admin notification:', results.notification?.error);
            }
        }).catch(error => {
            // Log but don't fail the request
            console.error('Error sending emails:', error);
        });

        return NextResponse.json(
            {
                message: "Your message has been sent successfully! Check your email for confirmation. We'll get back to you soon.",
                id: contactMessage.id
            },
            { status: 201 }
        );
    } catch (error) {
        if (error.message?.includes("Supabase not configured")) {
            console.error("Contact form error: Supabase not configured");
            return NextResponse.json(
                { error: "Service temporarily unavailable. Please try again later or contact us directly." },
                { status: 503 }
            );
        }

        console.error("Contact form submission error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
