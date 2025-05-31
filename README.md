# LNCT Group Website

A comprehensive website for LNCT Group showcasing all institutions, colleges, and companies under the LNCT umbrella.

## Features

- **Landing Page**: Hero section, institution directory, about section, leadership, location, virtual tour, and gallery
- **About Page**: Detailed information about LNCT Group's mission, vision, achievements, and history
- **Contact Page**: Contact form with email functionality and location details
- **Institution Page**: Complete directory of all LNCT institutions and companies
- **Authentication**: Login and signup with email and Google OAuth integration
- **Responsive Design**: Fully responsive across all devices
- **Interactive Elements**: 360° virtual tour, image gallery with lightbox, interactive maps

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Authentication**: Mock API (ready for real implementation)
- **Email**: Ready for EmailJS or similar service integration
- **Maps**: Google Maps integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd lnct-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── institution/       # Institution directory page
│   └── auth/              # Authentication pages
├── components/            # Reusable components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── directory-section.tsx
│   └── ...
├── lib/                   # Utilities and mock API
└── public/               # Static assets
\`\`\`

## Key Components

### Landing Page Sections
1. **Hero Section**: Welcome message with key statistics
2. **Directory Section**: Categorized list of all LNCT institutions
3. **About Section**: Overview of LNCT Group
4. **Owner Section**: Leadership team information
5. **Location Section**: Campus locations with interactive map
6. **Virtual Tour**: 360° campus tour simulation
7. **Gallery Section**: Image gallery with category filters

### Authentication
- Email/password login and signup
- Google OAuth integration (ready for implementation)
- Form validation and error handling
- Professional UI with proper UX

### Contact System
- Contact form with validation
- Mock email functionality (ready for real implementation)
- Contact information display
- Interactive map integration

## Email Integration

The contact form is ready for email integration. To implement:

1. **EmailJS Integration**:
\`\`\`bash
npm install @emailjs/browser
\`\`\`

2. **Configure EmailJS**:
\`\`\`javascript
import emailjs from '@emailjs/browser'

const sendEmail = (formData) => {
  return emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
}
\`\`\`

3. **Environment Variables**:
\`\`\`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
\`\`\`

## Google OAuth Setup

1. **Install NextAuth.js**:
\`\`\`bash
npm install next-auth
\`\`\`

2. **Configure Google Provider**:
\`\`\`javascript
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
}
\`\`\`

3. **Environment Variables**:
\`\`\`env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
\`\`\`

## Database Integration

For production, integrate with a database:

1. **Prisma + PostgreSQL**:
\`\`\`bash
npm install prisma @prisma/client
npm install -D prisma
\`\`\`

2. **Supabase**:
\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

3. **MongoDB**:
\`\`\`bash
npm install mongodb mongoose
\`\`\`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

Create a `.env.local` file:

\`\`\`env
# Email Service
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Database (if using)
DATABASE_URL=your_database_url

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
\`\`\`

## Customization

### Adding New Institutions
Update the `websites` array in `components/directory-section.tsx`:

\`\`\`javascript
const websites = [
  {
    name: 'New Institution',
    url: 'https://newinstitution.com',
    category: 'College',
    icon: GraduationCap
  },
  // ... existing institutions
]
\`\`\`

### Modifying Styles
- Update `tailwind.config.ts` for theme changes
- Modify component styles in individual files
- Use shadcn/ui theme customization

### Adding New Pages
1. Create new page in `app/` directory
2. Add navigation link in `components/navbar.tsx`
3. Update footer links if needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support and questions:
- Email: support@lnctgroup.in
- Phone: +91 755 2740800

## License

© 2024 LNCT Group. All rights reserved.
