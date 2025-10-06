import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
  from?: string
}

export class EmailService {
  private static readonly FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@no1consultancy.com'

  static async send(options: EmailOptions): Promise<boolean> {
    try {
      await sgMail.send({
        to: options.to,
        from: options.from || this.FROM_EMAIL,
        subject: options.subject,
        html: options.html,
        text: options.text
      })
      return true
    } catch (error) {
      console.error('Email sending failed:', error)
      return false
    }
  }

  static async sendWelcomeEmail(userEmail: string, userName: string): Promise<boolean> {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to No1 Consultancy</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Welcome to No1 Consultancy!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333;">Hello ${userName}!</h2>
            <p style="color: #666; line-height: 1.6;">
              Thank you for joining No1 Consultancy - Nepal's premier education consultancy platform.
              We're here to help you achieve your dream of studying abroad.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li>Complete your profile to get personalized recommendations</li>
                <li>Try our AI University Finder for instant matches</li>
                <li>Book a free consultation with our expert counsellors</li>
                <li>Upload your documents for verification</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.no1consultancy.com/ai-finder" 
                 style="background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Start Your Journey
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              Need help? Reply to this email or contact us at support@no1consultancy.com
            </p>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p>© 2025 No1 Consultancy. All rights reserved.</p>
            <p>Kathmandu, Nepal | www.no1consultancy.com</p>
          </div>
        </body>
      </html>
    `

    return this.send({
      to: userEmail,
      subject: 'Welcome to No1 Consultancy - Your Study Abroad Journey Begins!',
      html,
      text: `Welcome ${userName}! Thank you for joining No1 Consultancy. Start your study abroad journey at https://www.no1consultancy.com/ai-finder`
    })
  }

  static async sendBookingConfirmation(
    userEmail: string, 
    userName: string, 
    counsellorName: string,
    scheduledAt: Date,
    meetingLink?: string
  ): Promise<boolean> {
    const formattedDate = scheduledAt.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Booking Confirmation - No1 Consultancy</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Booking Confirmed!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333;">Hello ${userName}!</h2>
            <p style="color: #666; line-height: 1.6;">
              Your consultation with ${counsellorName} has been confirmed.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #333; margin-top: 0;">Appointment Details</h3>
              <p style="margin: 8px 0;"><strong>Counsellor:</strong> ${counsellorName}</p>
              <p style="margin: 8px 0;"><strong>Date & Time:</strong> ${formattedDate}</p>
              ${meetingLink ? `<p style="margin: 8px 0;"><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>` : ''}
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #1565c0; font-size: 14px;">
                📋 Please prepare any questions about your study abroad plans and have your documents ready for review.
              </p>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              Need to reschedule? Contact us at support@no1consultancy.com
            </p>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p>© 2025 No1 Consultancy. All rights reserved.</p>
          </div>
        </body>
      </html>
    `

    return this.send({
      to: userEmail,
      subject: `Consultation Confirmed with ${counsellorName} - No1 Consultancy`,
      html,
      text: `Your consultation with ${counsellorName} is confirmed for ${formattedDate}. ${meetingLink ? `Meeting link: ${meetingLink}` : ''}`
    })
  }

  static async sendDocumentVerification(
    userEmail: string,
    userName: string,
    documentType: string,
    status: 'verified' | 'rejected',
    reason?: string
  ): Promise<boolean> {
    const isVerified = status === 'verified'
    const statusColor = isVerified ? '#4caf50' : '#f44336'
    const statusText = isVerified ? 'Verified' : 'Rejected'

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Document ${statusText} - No1 Consultancy</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: ${statusColor}; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Document ${statusText}</h1>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333;">Hello ${userName}!</h2>
            <p style="color: #666; line-height: 1.6;">
              Your ${documentType} document has been ${status}.
            </p>
            
            ${!isVerified && reason ? `
              <div style="background: #ffebee; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #f44336;">
                <h4 style="color: #c62828; margin-top: 0;">Reason for Rejection:</h4>
                <p style="margin: 0; color: #666;">${reason}</p>
              </div>
              
              <p style="color: #666;">
                Please upload a corrected version of your document or contact us for assistance.
              </p>
            ` : `
              <div style="background: #e8f5e8; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #4caf50;">
                <p style="margin: 0; color: #2e7d32;">
                  ✅ Your document has been successfully verified and is ready for use in your applications.
                </p>
              </div>
            `}
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.no1consultancy.com/dashboard" 
                 style="background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">
                View Dashboard
              </a>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p>© 2025 No1 Consultancy. All rights reserved.</p>
          </div>
        </body>
      </html>
    `

    return this.send({
      to: userEmail,
      subject: `Document ${statusText}: ${documentType} - No1 Consultancy`,
      html,
      text: `Your ${documentType} document has been ${status}. ${reason ? `Reason: ${reason}` : ''}`
    })
  }
}