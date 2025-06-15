import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, inquiryType } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email template for the recipient
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">${email}</td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${phone}</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Inquiry Type:</td>
                <td style="padding: 8px 0; color: #1f2937;">${inquiryType}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Subject:</h3>
            <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 0; color: #1f2937;">
              ${subject}
            </p>
          </div>

          <div>
            <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px; line-height: 1.6; color: #1f2937;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This message was sent from your website contact form on ${new Date().toLocaleString()}.</p>
          </div>
        </div>
      </div>
    `

    // Auto-reply email template for the sender
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Thank you for contacting us!</h2>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Dear ${name},
          </p>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to us. We have received your message and will get back to you within 24 hours during business days.
          </p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Your Message Summary:</h3>
            <p style="margin: 5px 0; color: #4b5563;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 5px 0; color: #4b5563;"><strong>Inquiry Type:</strong> ${inquiryType}</p>
          </div>

          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            If you have any urgent questions, please don't hesitate to call us directly at +91 755 2740800.
          </p>

          <p style="color: #4b5563; line-height: 1.6;">
            Best regards,<br>
            The LNCT Group Team
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      </div>
    `

    // Send email to you (the recipient)
    await resend.emails.send({
      from: "noreply@resend.dev", // Replace with your verified domain
      to: ["rahuldeshmukh1108@gmail.com"],
      subject: `New Contact Form: ${subject}`,
      html: emailHtml,
      replyTo: email, // This allows you to reply directly to the sender
    })

    // Send auto-reply to the sender
    await resend.emails.send({
      from: "noreply@resend.dev", // Replace with your verified domain
      to: [email],
      subject: "Thank you for contacting us - LNCT Group",
      html: autoReplyHtml,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
