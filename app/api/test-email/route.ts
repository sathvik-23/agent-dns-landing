import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET(request: NextRequest) {
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

    console.log('Sending test email...')
    console.log('To:', 'sathvik238@gmail.com')
    console.log('From:', 'contact@agentdns.cc')

    // Send test email
    const { data, error } = await resend.emails.send({
      from: 'AgentDNS Test <contact@agentdns.cc>',
      to: ['sathvik238@gmail.com'],
      subject: 'Test Email from AgentDNS',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">Test Email</h2>
          <p style="color: #9ca3af; margin-bottom: 20px;">This is a test email sent from contact@agentdns.cc to verify email delivery.</p>
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">From:</strong> <span style="color: #ffffff;">contact@agentdns.cc</span></p>
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">To:</strong> <span style="color: #ffffff;">sathvik238@gmail.com</span></p>
            <p style="margin: 10px 0;"><strong style="color: #9ca3af;">Time:</strong> <span style="color: #ffffff;">${new Date().toISOString()}</span></p>
          </div>
          <p style="color: #9ca3af; margin-top: 20px; font-size: 14px;">If you received this email, the email delivery is working correctly!</p>
        </div>
      `,
      text: `
Test Email

This is a test email sent from contact@agentdns.cc to verify email delivery.

From: contact@agentdns.cc
To: sathvik238@gmail.com
Time: ${new Date().toISOString()}

If you received this email, the email delivery is working correctly!
      `,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { 
          error: `Failed to send email: ${error.message || 'Unknown error'}`,
          details: error
        },
        { status: 500 }
      )
    }

    console.log('Test email sent successfully:', data)
    return NextResponse.json(
      { 
        message: 'Test email sent successfully',
        emailId: data?.id,
        to: 'sathvik238@gmail.com',
        from: 'contact@agentdns.cc',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Test email error:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error.message || 'Unknown error'}` },
      { status: 500 }
    )
  }
}

