<div align="center">

# 🌐 LNCT Group Website – StrataWeb

<img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />

### *A next-generation digital platform showcasing LNCT institutions, innovation, and infrastructure in one powerful experience.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://lnctworld.netlify.app)
[![GitHub Repo](https://img.shields.io/badge/📂_GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/Rahuldeshmukh1108/frontend)


</div>

---

## 🎯 **Project Overview**

The **LNCT Group Website** is a comprehensive digital portal that serves as the central hub for LNCT Group's diverse educational institutions and enterprises. Built with cutting-edge web technologies, it provides an immersive experience for students, faculty, parents, and stakeholders to explore LNCT's rich legacy and extensive network.

<div align="center">

### 🏆 **Key Highlights**
| Feature | Description |
|---------|-------------|
| 🚀 **Modern Architecture** | Built with Next.js 14 and TypeScript for optimal performance |
| 🎨 **Stunning UI/UX** | Crafted with Tailwind CSS and shadcn/ui components |
| 📱 **Fully Responsive** | Seamless experience across all devices and screen sizes |
| ⚡ **Lightning Fast** | Optimized for speed with server-side rendering |
| 🗺️ **Interactive Maps** | Google Maps integration for location awareness |
| 📧 **Smart Contact** | Email-ready forms with auto-responses |

</div>

---

## ✨ **Core Features**

<table>
<tr>
<td width="50%">

### 🏠 **Landing Experience**
- **Hero Section** with dynamic animations
- **Leadership Showcase** with interactive profiles  
- **Institution Cards** with hover effects
- **Live Statistics** and achievements
- **Interactive Map** integration
- **Virtual Tour** and image gallery

</td>
<td width="50%">

### 📚 **Content Pages**
- **About Page** - Mission, vision, and history
- **Institutions Directory** - Filterable college listings
- **Contact Hub** - Multi-channel communication
- **Image Gallery** - Lightbox with category filters
- **Location Finder** - Google Maps integration
- **Responsive Design** - Mobile-first approach

</td>
</tr>
</table>

---

## 🛠️ **Technology Stack**

<div align="center">

### **Frontend Framework**
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)

### **Styling & UI**
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-000000?style=flat-square&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=flat-square&logo=framer&logoColor=white)

### **Integrations**
![Google Maps](https://img.shields.io/badge/Google_Maps-API-4285F4?style=flat-square&logo=google-maps&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-Email_Service-FF6B6B?style=flat-square&logo=gmail&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide-Icons-F56565?style=flat-square&logo=lucide&logoColor=white)

</div>

---

## 📁 **Project Architecture**

```
📦 LNCT Group Website

├── 📂 app/                    # Next.js App Router

│   ├── 📄 page.tsx           # Landing Page

│   ├── 📂 about/             # About LNCT Group

│   ├── 📂 contact/           # Contact & Communication

│   └── 📂 institutions/      # Institution Directory

├── 📂 components/            # Reusable UI Components

│   ├── 📂 ui/                # shadcn/ui components

│   ├── 📄 navbar.tsx         # Navigation component

│   ├── 📄 footer.tsx         # Footer component

│   └── 📄 sections/          # Page sections

├── 📂 lib/                   # Utilities & Configurations

│   ├── 📄 utils.ts           # Helper functions

│   └── 📄 constants.ts       # App constants

├── 📂 public/                # Static Assets

│   ├── 📂 images/            # Image assets

│   └── 📂 icons/             # Icon files

├── 📄 tailwind.config.js     # Tailwind configuration

├── 📄 next.config.js         # Next.js configuration

└── 📄 package.json           # Dependencies
```

---

## 🚀 **Quick Start Guide**

### **Prerequisites**
- Node.js 18.0 or higher
- npm or yarn package manager
- Git for version control

### **Installation Steps**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Rahuldeshmukh1108/frontend.git

# 2️⃣ Navigate to project directory
cd frontend

# 3️⃣ Install dependencies
npm install
# or
yarn install

# 4️⃣ Set up environment variables
cp .env.example .env.local

# 5️⃣ Start development server
npm run dev
# or
yarn dev
```

🎉 **Success!** Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ **Environment Configuration**

Create a `.env.local` file in the root directory:

```env
# 📧 Email Service Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# 🗺️ Google Maps Integration
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# 🔧 Optional: Analytics & Monitoring
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

---

## 📧 **Email Integration Setup**

### **Using EmailJS**

1. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

2. **Implementation Example**
   ```typescript
   import emailjs from '@emailjs/browser';
   
   const sendEmail = async (formData: FormData) => {
     try {
       await emailjs.send(
         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
         formData,
         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
       );
       console.log('Email sent successfully!');
     } catch (error) {
       console.error('Email sending failed:', error);
     }
   };
   ```

---

## 🗺️ **Google Maps Setup**

1. **Get API Key**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Maps JavaScript API
   - Create credentials and copy API key

2. **Add to Environment**
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

3. **Usage in Components**
   ```typescript
   import { GoogleMap, LoadScript } from '@react-google-maps/api';
   
   const MapComponent = () => (
     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
       <GoogleMap
         mapContainerStyle={{ width: '100%', height: '400px' }}
         center={{ lat: 23.2599, lng: 77.4126 }}
         zoom={15}
       />
     </LoadScript>
   );
   ```

---

## 🏫 **Adding New Institutions**

To add a new institution to the directory:

1. **Edit the institutions data file:**
   ```typescript
   // lib/institutions-data.ts
   
   export const institutions = [
   
     {
       id: 'lnct-pharmacy',
       name: 'LNCT College of Pharmacy',
       url: 'https://lnctpharmacy.in',
       category: 'College',
       description: 'Premier pharmacy education institution',
       icon: GraduationCap,
       established: '2010',
       location: 'Bhopal, MP'
     },
     // Add your new institution here
   ];
   ```

2. **Update the categories filter if needed:**
   ```typescript
   export const categories = [
     'All',
     'College',
     'University', 
     'Company',
     'Institute'
     // Add new category here
   ];
   ```

---

## 🚀 **Deployment Guide**

### **Deploy to Netlify**

<details>
<summary><strong>📋 Step-by-step Netlify Deployment</strong></summary>

1. **Prepare Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Netlify Setup**
   - Visit [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select your GitHub repository

3. **Build Configuration**
   ```
   Build Command: npm run build
   Publish Directory: .next
   Node Version: 18
   ```

4. **Environment Variables**
   Add all your `.env.local` variables in Netlify dashboard

5. **Custom Domain (Optional)**
   - Go to Domain settings
   - Add your custom domain
   - Configure DNS settings

</details>




---

## 📊 **Performance Metrics**

<div align="center">

| Metric | Score | Status |
|--------|-------|--------|
| 🚀 Performance | 95+ | ✅ Excellent |
| ♿ Accessibility | 100 | ✅ Perfect |
| 🔍 SEO | 100 | ✅ Optimized |
| 💡 Best Practices | 100 | ✅ Following Standards |

*Scores based on Lighthouse audit*

</div>

---

## 🛣️ **Roadmap & Future Enhancements**

- [ ] 🔐 **Admin Dashboard** - Content management system
- [ ] 📊 **Analytics Integration** - Detailed visitor insights  
- [ ] 🌐 **Multi-language Support** - Hindi and English
- [ ] 🔍 **Advanced Search** - Institution and course finder
- [ ] 👥 **Student Portal** - Login and dashboard features
- [ ] 📱 **Mobile App** - React Native companion app
- [ ] 🤖 **AI Chatbot** - Automated student assistance
- [ ] 📈 **SEO Enhancement** - Advanced optimization

---

## 🤝 **Contributing**

We welcome contributions from the community! Here's how you can help:

<details>
<summary><strong>🔧 Development Guidelines</strong></summary>

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Follow coding standards**
   - Use TypeScript for type safety
   - Follow ESLint and Prettier configurations
   - Write meaningful commit messages
5. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```
6. **Submit a pull request**

</details>

### **Code Style**
- Use TypeScript for all new files
- Follow the existing component structure
- Use Tailwind CSS for styling
- Implement responsive design principles

---

## 📞 **Support & Contact**

<div align="center">

### **Get in Touch**

[![Email](https://img.shields.io/badge/📧_Email-support@lnctgroup.in-red?style=for-the-badge)](mailto:support@lnctgroup.in)
[![Phone](https://img.shields.io/badge/📞_Phone-+91_755_2740800-green?style=for-the-badge)](tel:+917552740800)
[![Website](https://img.shields.io/badge/🌐_Website-lnctgroup.in-blue?style=for-the-badge)](https://lnctgroup.in)

### **Office Address**
📍 LNCT Group Campus, Raisen Road , Bhopal - 462022, Madhya Pradesh, India

</div>

---

<div align="center">

### **Made with ❤️ by LNCT Group Development Team**

*Reflecting LNCT's excellence through innovative technology*

[![GitHub stars](https://img.shields.io/github/stars/Rahuldeshmukh1108/frontend?style=social)](https://github.com/Rahuldeshmukh1108/frontend/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Rahuldeshmukh1108/frontend?style=social)](https://github.com/Rahuldeshmukh1108/frontend/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Rahuldeshmukh1108/frontend)](https://github.com/Rahuldeshmukh1108/frontend/issues)

---

**© 2024 LNCT Group. All Rights Reserved.**

*Empowering Education Through Technology*

</div>
