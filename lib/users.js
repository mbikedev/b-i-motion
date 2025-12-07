// User management with Supabase database
import bcrypt from "bcryptjs";
import { supabaseAdmin, ensureSupabaseConfig } from "./supabase";

export async function findUserByEmail(email) {
    // Check if running in build mode without env vars
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        console.warn("Supabase not configured, skipping database operation");
        return null;
    }

    try {
        const { data, error } = await supabaseAdmin
            .from("users")
            .select("*")
            .ilike("email", email)
            .single();

        if (error) {
            if (error.code === "PGRST116") {
                // No rows returned
                return null;
            }
            throw error;
        }

        return data;
    } catch (error) {
        console.error("Error finding user by email:", error);
        return null;
    }
}

export async function findUserById(id) {
    // Check if running in build mode without env vars
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        console.warn("Supabase not configured, skipping database operation");
        return null;
    }

    try {
        const { data, error } = await supabaseAdmin
            .from("users")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            if (error.code === "PGRST116") {
                // No rows returned
                return null;
            }
            throw error;
        }

        return data;
    } catch (error) {
        console.error("Error finding user by ID:", error);
        return null;
    }
}

export async function createUser({ name, email, password }) {
    // Check if running in build mode without env vars
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        throw new Error("Supabase not configured. Please set environment variables.");
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
        const { data, error } = await supabaseAdmin
            .from("users")
            .insert([
                {
                    name,
                    email: email.toLowerCase(),
                    password: hashedPassword,
                },
            ])
            .select()
            .single();

        if (error) {
            throw error;
        }

        // Return user without password
        const { password: _, ...userWithoutPassword } = data;
        return userWithoutPassword;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
    }
}

export async function verifyPassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
}
