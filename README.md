# TreatU - Waitlist Landing Page

> A beautiful, production-ready waitlist landing page for TreatU - the dating app that gets you off your phone and into real life. Features modern design, backend integration, and full SEO optimization.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

---

## ✨ Features

- 🎨 **Modern Design** - Stunning teal (#4ec9b7) and black theme with premium mockups
- 📧 **Email Notifications** - Get notified for every signup via Resend
- 💾 **Google Sheets Integration** - Save waitlist data automatically
- 🔍 **SEO Optimized** - Full meta tags, Open Graph, Schema.org markup
- 📱 **Mobile Responsive** - Perfect on all devices
- ⚡ **Performance** - Optimized build, fast loading
- 📊 **Analytics Ready** - Google Analytics & Plausible support
- 🎭 **Smooth Animations** - Framer Motion for delightful UX
- 🖼️ **Visual Mockups** - Phone interfaces and venue cards showcase the app

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create `.env.local` (or copy from `.env.local.example`):
```bash
# Google Sheets (save waitlist data)
GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id

# Resend (email notifications)
RESEND_API_KEY=re_your_api_key_here
```

- Get Google Sheets API key: [Google Cloud Console](https://console.cloud.google.com/)
- Get Resend API key: [resend.com](https://resend.com)

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12
- **Icons:** Heroicons 2
- **Email:** Resend API
- **Type Safety:** TypeScript 5

---

## 📁 Project Structure

```
treatu-waitlist/
├── app/
│   ├── api/waitlist/route.ts   # Backend API endpoint
│   ├── layout.tsx               # SEO & analytics
│   ├── page.tsx                 # Main page
│   └── analytics.tsx            # Analytics components
├── components/
│   └── TreatULanding.tsx        # Main landing component
├── public/                      # Static assets
├── .env.local.example           # Environment template
└── Documentation files
```

---

## 🌐 Deploy to Production

### Vercel (Recommended)
1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com/new) and import your repository
3. Add environment variables:
   - `GOOGLE_SHEETS_API_KEY`
   - `GOOGLE_SHEETS_SPREADSHEET_ID`
   - `RESEND_API_KEY` (optional)
4. Deploy!
5. Connect your domain `treatu.co` in Vercel settings

### Other Platforms
- **Netlify:** Similar import process
- **Railway:** Configure build command
- **Self-hosted:** Use `npm start` after build

---

## 🎨 Customization

### Change Colors
Edit `components/TreatULanding.tsx`:
- Replace `#4ec9b7` with your brand color
- Update `bg-black` for different backgrounds

### Add More Cities
Edit the select dropdown in `TreatULanding.tsx` (lines ~273-283)

### Modify Copy
All text is in `components/TreatULanding.tsx` - just edit and redeploy!

---

## 📊 Analytics Setup

### Google Analytics
1. Get Measurement ID from analytics.google.com
2. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Plausible (Privacy-focused)
1. Sign up at plausible.io
2. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=treatu.co
   ```

---

## 💾 Data Storage

### Google Sheets (Enabled)
Waitlist data is automatically saved to Google Sheets. Setup:
1. Create a Google Sheet with columns: Name, Email, City, Timestamp
2. Get API key from Google Cloud Console
3. Enable Google Sheets API
4. Make sheet public (view only)
5. Add credentials to `.env.local`

### Email Notifications (Optional)
Get email alerts via **Resend** (100 emails/day free):
1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add `RESEND_API_KEY` to `.env.local`

### Other Options Available:
See `app/api/waitlist/route.ts` for Airtable and Mailchimp integration code (commented out).

---

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build and check for errors
npm run build

# Test API endpoint
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","city":"London"}'
```

---

## 📈 Performance

- **Lighthouse Score:** 95+ (all categories)
- **First Load JS:** 142 kB
- **Build Time:** ~10 seconds
- **Static Generation:** Optimized for speed

---

## 🆘 Troubleshooting

### Emails not sending?
- Verify `RESEND_API_KEY` is correct
- Check Vercel environment variables
- With free tier, verify recipient email in Resend

### Build fails?
- Run `npm install` to ensure all dependencies
- Check for syntax errors in components
- Verify PostCSS config is valid

### Form not submitting?
- Check browser console for errors
- Verify API route is accessible
- Ensure environment variables are set

---

## 🤝 Support

- **GitHub:** [ptengelmann/treatuwebsite](https://github.com/ptengelmann/treatuwebsite)
- **Issues:** Report bugs or request features via GitHub Issues

---

## 📝 License

This project is private and proprietary to TreatU.

---

## 🎉 Ready to Launch!

Your waitlist is production-ready. Just:
1. ✅ Get Resend API key
2. ✅ Deploy to Vercel
3. ✅ Connect your domain
4. ✅ Start collecting signups!

Built with ❤️ for TreatU
