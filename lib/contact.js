// Contact message management with Supabase database
import { supabaseAdmin } from "./supabase";

export async function createContactMessage({ name, email, message }) {
    // Check if running in build mode without env vars
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        throw new Error("Supabase not configured. Please set environment variables.");
    }

    // Validate input
    if (!name || !email || !message) {
        throw new Error("Name, email, and message are required");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email address");
    }

    try {
        const { data, error } = await supabaseAdmin
            .from("contact_messages")
            .insert([
                {
                    name: name.trim(),
                    email: email.toLowerCase().trim(),
                    message: message.trim(),
                    status: 'new',
                },
            ])
            .select()
            .single();

        if (error) {
            console.error("Error creating contact message:", error);
            throw error;
        }

        return data;
    } catch (error) {
        console.error("Error creating contact message:", error);
        throw new Error("Failed to save contact message");
    }
}

export async function getContactMessages({ limit = 50, offset = 0, status = null } = {}) {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        console.warn("Supabase not configured, skipping database operation");
        return [];
    }

    try {
        let query = supabaseAdmin
            .from("contact_messages")
            .select("*")
            .order("created_at", { ascending: false })
            .range(offset, offset + limit - 1);

        if (status) {
            query = query.eq("status", status);
        }

        const { data, error } = await query;

        if (error) {
            throw error;
        }

        return data || [];
    } catch (error) {
        console.error("Error fetching contact messages:", error);
        return [];
    }
}

export async function updateContactMessageStatus(id, status) {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        throw new Error("Supabase not configured. Please set environment variables.");
    }

    try {
        const { data, error } = await supabaseAdmin
            .from("contact_messages")
            .update({ status, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error("Error updating contact message:", error);
        throw new Error("Failed to update contact message");
    }
}
