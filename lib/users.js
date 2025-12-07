// Simple in-memory user store (for demo purposes)
// In production, replace this with a proper database (MongoDB, PostgreSQL, etc.)

import bcrypt from "bcryptjs";

// In-memory users store
let users = [];

export async function findUserByEmail(email) {
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export async function findUserById(id) {
    return users.find((user) => user.id === id);
}

export async function createUser({ name, email, password }) {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = {
        id: Date.now().toString(),
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
}

export async function verifyPassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
}
