"# 🌟 3D Interactive Portfolio Website

A stunning, modern portfolio website built with React, Three.js, and Tailwind CSS featuring an interactive 3D crystal cube.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.160.1-000000?style=for-the-badge&logo=three.js)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎪 **Interactive 3D Cube** - Rotating cube with clickable faces for navigation
- 🎨 **Modern Dark Theme** - Sleek design with cyan/purple linears
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Production Ready** - Optimized and ready to deploy

## 🚀 Quick Start

### Start Development Server

```bash
cd /app/frontend
yarn start
```

Visit http://localhost:3000 to see your portfolio!

## 📝 Customize Your Portfolio

**Everything you need to edit is in ONE file:**

`/app/frontend/src/data/portfolioData.js`

### 1. Update Personal Info

```javascript
export const personalInfo = {
  name: \"Your Name\",
  title: \"Full Stack Developer\",
  image: \"YOUR_PHOTO_URL\",
  // ... more fields
};
```

### 2. Add Your Skills

```javascript
export const skills = [
  { name: \"React\", level: 90, icon: \"Atom\" },
  // Add more skills...
];
```

### 3. Showcase Projects

```javascript
export const projects = [
  {
    title: \"Project Name\",
    description: \"What it does...\",
    image: \"PROJECT_IMAGE_URL\",
    technologies: [\"React\", \"Node.js\"],
    github: \"...\",
    demo: \"...\",
  },
  // Add more projects...
];
```

### 4. Update Contact Info

```javascript
export const contactInfo = {
  email: \"you@example.com\",
  social: [
    { name: \"GitHub\", url: \"...\", icon: \"Github\" },
    // Add more...
  ],
};
```

**📖 Full Guide:** See `/app/frontend/PORTFOLIO_GUIDE.md` for detailed instructions

## 🛠️ Tech Stack

- React 18.3.1
- Three.js & React Three Fiber
- Framer Motion
- Tailwind CSS
- Lucide Icons

## 🚢 Deploy

### Build for Production

```bash
cd /app/frontend
yarn build
```

### Deploy To:

- **Vercel** (Recommended): `vercel`
- **Netlify**: Connect your repo
- **GitHub Pages**: `yarn deploy`

## 📚 Documentation

- `/app/frontend/PORTFOLIO_GUIDE.md` - Complete customization guide
- `/app/frontend/src/data/portfolioData.js` - Your content (edit this!)

## 🎨 Color Theme

- Background: `#0a0a0f`, `#12121a`
- Accent Cyan: `#00d9ff`, `#0ea5e9`
- Accent Purple: `#8b5cf6`, `#a78bfa`

## 🤝 Support

Check [PORTFOLIO_GUIDE.md](./frontend/PORTFOLIO_GUIDE.md) for help!

---

**Made with ❤️ using React, Three.js & Tailwind CSS**

🚀 Start customizing now - edit `/app/frontend/src/data/portfolioData.js`!
"
