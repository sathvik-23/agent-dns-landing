import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const body = await request.json()
    const { name, email, phone, organization } = body

    // Validate required fields
    if (!name || !email || !organization) {
      return NextResponse.json(
        { error: 'Name, Email ID, and Organization Name are required' },
        { status: 400 }
      )
    }

    // Trim whitespace
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedPhone = phone ? phone.trim() : ''
    const trimmedOrganization = organization.trim()

    // Validate fields are not empty after trimming
    if (!trimmedName || !trimmedEmail || !trimmedOrganization) {
      return NextResponse.json(
        { error: 'Name, Email ID, and Organization Name are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    console.log('Attempting to send Get Started form email via Resend...')
    console.log('To:', 'sathvik238@gmail.com')
    console.log('From:', 'contact@agentdns.cc')

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'AgentDNS Get Started <contact@agentdns.cc>',
      to: ['sathvik238@gmail.com'],
      replyTo: trimmedEmail,
      subject: 'New Get Started Form Submission - Connection Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">New Get Started Form Submission</h2>
          <p style="color: #9ca3af; margin-bottom: 20px;">Someone filled out the Get Started form and needs to connect.</p>
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">Name:</strong> <span style="color: #ffffff;">${trimmedName}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">Email ID:</strong> <span style="color: #ffffff;">${trimmedEmail}</span></p>
            ${trimmedPhone ? `<p style="margin: 10px 0;"><strong style="color: #9ca3af;">Phone Number:</strong> <span style="color: #ffffff;">${trimmedPhone}</span></p>` : ''}
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">Organization Name:</strong> <span style="color: #ffffff;">${trimmedOrganization}</span></p>
          </div>
          <p style="color: #9ca3af; margin-top: 20px; font-size: 14px;">Please connect with this person to help them get started with AgentDNS.</p>
        </div>
      `,
      text: `
New Get Started Form Submission

Someone filled out the Get Started form and needs to connect.

Name: ${trimmedName}
Email ID: ${trimmedEmail}
${trimmedPhone ? `Phone Number: ${trimmedPhone}` : ''}
Organization Name: ${trimmedOrganization}

Please connect with this person to help them get started with AgentDNS.
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
    console.log('Email ID:', data?.id)
    console.log('Check Resend dashboard for delivery status: https://resend.com/emails')
    
    // Log warning if domain might not be verified
    if (data?.id) {
      console.warn('NOTE: If emails are not reaching inbox, check:')
      console.warn('1. Spam/Junk folder in Gmail')
      console.warn('2. Domain verification in Resend dashboard')
      console.warn('3. SPF/DKIM/DMARC DNS records for agentdns.cc')
    }

    return NextResponse.json(
      { message: 'Form submitted successfully', data },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Get Started form error:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error.message || 'Unknown error'}` },
      { status: 500 }
    )
  }
}

