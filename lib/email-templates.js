// Email templates for contact form

export function getContactConfirmationEmail({ name, message }) {
    return {
        subject: "Bedankt voor je bericht - Blueprint In Motion",
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bedankt voor je bericht</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1a2332 0%, #2a3544 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Blueprint In Motion</h1>
                            <p style="margin: 10px 0 0; color: #d4a745; font-size: 14px; font-weight: 600;">Van Overleven naar Nalatenschap</p>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h2 style="margin: 0 0 20px; color: #1a2332; font-size: 24px; font-weight: 600;">Bedankt voor je bericht, ${name}!</h2>

                            <p style="margin: 0 0 20px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                                We hebben je bericht succesvol ontvangen en waarderen je interesse in Blueprint In Motion.
                            </p>

                            <div style="background-color: #f7fafc; border-left: 4px solid #d4a745; padding: 20px; margin: 30px 0; border-radius: 4px;">
                                <p style="margin: 0 0 10px; color: #2d3748; font-size: 14px; font-weight: 600;">Je bericht:</p>
                                <p style="margin: 0; color: #4a5568; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>

                            <p style="margin: 0 0 20px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                                Ons team zal je vraag beoordelen en we streven ernaar om binnen <strong>24-48 uur</strong> te reageren.
                            </p>

                            <p style="margin: 0 0 30px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                                In de tussentijd nodigen we je uit om meer te ontdekken over de Blueprint metodologie en hoe deze jouw leven kan transformeren.
                            </p>

                            <!-- CTA Buttons -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <table cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding: 0 10px;">
                                                    <a href="https://blueprintinmotion.nl/boeken" style="display: inline-block; background-color: #d4a745; color: #1a2332; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px;">Ontdek de Boeken</a>
                                                </td>
                                                <td style="padding: 0 10px;">
                                                    <a href="https://blueprintinmotion.nl/fieldtalks" style="display: inline-block; background-color: transparent; color: #1a2332; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px; border: 2px solid #1a2332;">Bekijk FieldTalks</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 10px; color: #718096; font-size: 14px;">
                                Blueprint In Motion<br>
                                Van Overleven naar Nalatenschap
                            </p>
                            <p style="margin: 0; color: #a0aec0; font-size: 12px;">
                                © ${new Date().getFullYear()} Blueprint In Motion. Alle rechten voorbehouden.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `,
        text: `
Bedankt voor je bericht, ${name}!

We hebben je bericht succesvol ontvangen en waarderen je interesse in Blueprint In Motion.

Je bericht:
${message}

Ons team zal je vraag beoordelen en we streven ernaar om binnen 24-48 uur te reageren.

In de tussentijd nodigen we je uit om meer te ontdekken over de Blueprint metodologie en hoe deze jouw leven kan transformeren.

Bezoek onze website: https://blueprintinmotion.nl

Met vriendelijke groet,
Het Blueprint In Motion Team

---
Blueprint In Motion
Van Overleven naar Nalatenschap
© ${new Date().getFullYear()} Blueprint In Motion. Alle rechten voorbehouden.
        `
    };
}

export function getAdminNotificationEmail({ name, email, message, messageId }) {
    return {
        subject: `Nieuw contactformulier bericht van ${name}`,
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nieuw contactbericht</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1a2332 0%, #2a3544 100%); padding: 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">Nieuw Contactbericht</h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <div style="background-color: #fef3c7; border-left: 4px solid #d4a745; padding: 20px; margin: 0 0 30px; border-radius: 4px;">
                                <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 600;">
                                    ⚠️ Je hebt een nieuw bericht ontvangen via het contactformulier
                                </p>
                            </div>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 12px; background-color: #f7fafc; border-bottom: 1px solid #e2e8f0;">
                                        <strong style="color: #2d3748; font-size: 14px;">Naam:</strong>
                                    </td>
                                    <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0;">
                                        <span style="color: #4a5568; font-size: 14px;">${name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f7fafc; border-bottom: 1px solid #e2e8f0;">
                                        <strong style="color: #2d3748; font-size: 14px;">E-mail:</strong>
                                    </td>
                                    <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0;">
                                        <a href="mailto:${email}" style="color: #3182ce; font-size: 14px; text-decoration: none;">${email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #f7fafc;">
                                        <strong style="color: #2d3748; font-size: 14px;">Bericht ID:</strong>
                                    </td>
                                    <td style="padding: 12px; background-color: #ffffff;">
                                        <span style="color: #718096; font-size: 12px; font-family: monospace;">${messageId}</span>
                                    </td>
                                </tr>
                            </table>

                            <div style="background-color: #f7fafc; padding: 20px; border-radius: 6px; margin-bottom: 30px;">
                                <p style="margin: 0 0 10px; color: #2d3748; font-size: 14px; font-weight: 600;">Bericht:</p>
                                <p style="margin: 0; color: #4a5568; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>

                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${email}?subject=Re: Je bericht aan Blueprint In Motion" style="display: inline-block; background-color: #d4a745; color: #1a2332; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px;">Beantwoord dit bericht</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f7fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0; color: #718096; font-size: 12px;">
                                Dit bericht is verzonden vanuit je Blueprint In Motion contactformulier<br>
                                ${new Date().toLocaleString('nl-NL', { dateStyle: 'long', timeStyle: 'short' })}
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `,
        text: `
NIEUW CONTACTBERICHT

Van: ${name}
E-mail: ${email}
Bericht ID: ${messageId}

Bericht:
${message}

---
Beantwoord dit bericht door te reageren op: ${email}

Dit bericht is verzonden vanuit je Blueprint In Motion contactformulier
${new Date().toLocaleString('nl-NL', { dateStyle: 'long', timeStyle: 'short' })}
        `
    };
}
