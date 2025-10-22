import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, city } = body;

    // Validate input
    if (!name || !email || !city) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // ==========================================
    // OPTION 1: Google Sheets Integration
    // ==========================================
    const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
    const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (GOOGLE_SHEETS_API_KEY && SPREADSHEET_ID) {
      try {
        const sheetsResponse = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1:append?valueInputOption=USER_ENTERED&key=${GOOGLE_SHEETS_API_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values: [[name, email, city, new Date().toISOString()]],
            }),
          }
        );

        if (!sheetsResponse.ok) {
          const errorData = await sheetsResponse.json();
          console.error('Google Sheets error:', errorData);
          throw new Error('Failed to save to Google Sheets');
        }

        console.log('✅ Successfully saved to Google Sheets');
      } catch (sheetsError) {
        console.error('Google Sheets error:', sheetsError);
        // Continue to email notification even if sheets fails
      }
    } else {
      console.log('⚠️ Google Sheets not configured. Skipping...');
    }

    // ==========================================
    // OPTION 2: Airtable Integration (Recommended)
    // ==========================================
    // Uncomment and configure this section to use Airtable
    // Sign up at https://airtable.com and create a base with fields: Name, Email, City, Created
    /*
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = 'Waitlist';

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
                City: city,
                Created: new Date().toISOString(),
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to add to Airtable');
    }
    */

    // ==========================================
    // OPTION 3: Mailchimp Integration
    // ==========================================
    // Uncomment and configure this section to use Mailchimp
    /*
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., "us1"
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    const response = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: name,
            CITY: city,
          },
        }),
      }
    );
    */

    // ==========================================
    // OPTION 4: Send to your own email via Resend (ENABLED)
    // ==========================================
    // Receive an email notification for each signup
    // Sign up at https://resend.com for a free API key (100 emails/day free)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'TreatU Waitlist <onboarding@resend.dev>',
            to: 'contact@treatu.co',
            subject: `🎉 New Waitlist Signup - ${name} from ${city}`,
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
                    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
                    .header { background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px; }
                    .header h1 { color: white; margin: 0; font-size: 28px; }
                    .content { background: #f9fafb; padding: 30px; border-radius: 12px; border: 1px solid #e5e7eb; }
                    .field { margin-bottom: 20px; }
                    .label { font-weight: 600; color: #374151; margin-bottom: 5px; }
                    .value { color: #111827; font-size: 16px; }
                    .footer { margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h1>🎉 New Waitlist Signup!</h1>
                    </div>
                    <div class="content">
                      <div class="field">
                        <div class="label">Name</div>
                        <div class="value">${name}</div>
                      </div>
                      <div class="field">
                        <div class="label">Email</div>
                        <div class="value">${email}</div>
                      </div>
                      <div class="field">
                        <div class="label">City</div>
                        <div class="value">${city}</div>
                      </div>
                      <div class="field">
                        <div class="label">Signed Up</div>
                        <div class="value">${new Date().toLocaleString('en-GB', {
                          dateStyle: 'full',
                          timeStyle: 'short',
                          timeZone: 'Europe/London'
                        })}</div>
                      </div>
                    </div>
                    <div class="footer">
                      <p>TreatU Waitlist System</p>
                    </div>
                  </div>
                </body>
              </html>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Failed to send email notification');
        }
      } catch (emailError) {
        console.error('Email notification error:', emailError);
        // Continue anyway - don't fail the signup if email fails
      }
    } else {
      // Log to console if no API key is configured
      console.log('⚠️ RESEND_API_KEY not configured. Waitlist signup:', {
        name,
        email,
        city,
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
