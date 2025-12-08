// Email service using Nodemailer with Gmail SMTP
import nodemailer from 'nodemailer';
import { getContactConfirmationEmail, getAdminNotificationEmail } from './email-templates';

// Create transporter for Gmail SMTP
const createTransporter = () => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.error('Email credentials not configured!', {
            hasEmailUser: !!process.env.EMAIL_USER,
            hasEmailPassword: !!process.env.EMAIL_PASSWORD
        });
        return null;
    }

    console.log('Creating email transporter for:', process.env.EMAIL_USER);
    return nodemailer.createTransporter({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
};

// Email configuration
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

/**
 * Send a confirmation email to the person who submitted the contact form
 */
export async function sendContactConfirmation({ to, name, message }) {
    const transporter = createTransporter();

    if (!transporter) {
        console.warn('Email not configured, skipping confirmation email');
        return { success: false, error: 'Email not configured' };
    }

    try {
        const emailContent = getContactConfirmationEmail({ name, message });

        console.log('Attempting to send confirmation email to:', to);
        const info = await transporter.sendMail({
            from: `"Blueprint In Motion" <${process.env.EMAIL_USER}>`,
            to: to,
            subject: emailContent.subject,
            html: emailContent.html,
            text: emailContent.text,
        });

        console.log('Confirmation email sent successfully:', info.messageId);
        return { success: true, data: { id: info.messageId } };
    } catch (error) {
        console.error('Error sending confirmation email:', {
            error: error.message,
            code: error.code,
            command: error.command
        });
        return { success: false, error: error.message };
    }
}

/**
 * Send a notification email to the admin about a new contact form submission
 */
export async function sendAdminNotification({ name, email, message, messageId }) {
    const transporter = createTransporter();

    if (!transporter) {
        console.warn('Email not configured, skipping admin notification');
        return { success: false, error: 'Email not configured' };
    }

    try {
        const emailContent = getAdminNotificationEmail({ name, email, message, messageId });

        console.log('Attempting to send admin notification to:', ADMIN_EMAIL);
        const info = await transporter.sendMail({
            from: `"Blueprint In Motion" <${process.env.EMAIL_USER}>`,
            to: ADMIN_EMAIL,
            subject: emailContent.subject,
            html: emailContent.html,
            text: emailContent.text,
            replyTo: email, // Allow admin to reply directly to the sender
        });

        console.log('Admin notification sent successfully:', info.messageId);
        return { success: true, data: { id: info.messageId } };
    } catch (error) {
        console.error('Error sending admin notification:', {
            error: error.message,
            code: error.code,
            command: error.command,
            to: ADMIN_EMAIL
        });
        return { success: false, error: error.message };
    }
}

/**
 * Send both confirmation and admin notification emails
 */
export async function sendContactFormEmails({ name, email, message, messageId }) {
    const results = await Promise.allSettled([
        sendContactConfirmation({ to: email, name, message }),
        sendAdminNotification({ name, email, message, messageId })
    ]);

    const [confirmationResult, notificationResult] = results;

    return {
        confirmation: confirmationResult.status === 'fulfilled'
            ? confirmationResult.value
            : { success: false, error: confirmationResult.reason },
        notification: notificationResult.status === 'fulfilled'
            ? notificationResult.value
            : { success: false, error: notificationResult.reason }
    };
}
