import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        {
          error:
            'Email service is not configured. Please contact the administrator.',
        },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    console.log('Attempting to send email via Resend...')
    console.log('To:', 'sathvik@agentdns.cc')
    console.log('From:', 'contact@agentdns.cc')

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'AgentDNS Contact Form <contact@agentdns.cc>',
      to: ['sathvik@agentdns.cc'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">Name:</strong> <span style="color: #ffffff;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">Email:</strong> <span style="color: #ffffff;">${email}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">Subject:</strong> <span style="color: #ffffff;">${subject}</span></p>
            <div style="margin-top: 20px;">
              <p style="color: #9ca3af; margin-bottom: 10px;"><strong>Message:</strong></p>
              <p style="color: #ffffff; white-space: pre-wrap; line-height: 1.6;">${message.replace(
                /\n/g,
                '<br>'
              )}</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || 'Unknown error'}` },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json(
      { message: 'Message sent successfully', data },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error.message || 'Unknown error'}` },
      { status: 500 }
    )
  }
}
