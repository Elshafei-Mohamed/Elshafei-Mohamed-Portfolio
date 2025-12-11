"# 3D Portfolio Website - Customization Guide

Welcome to your new 3D Portfolio Website! This guide will help you customize every aspect of your portfolio to make it truly yours.

## 📁 Project Structure

```
/app/frontend/src/
├── data/
│   └── portfolioData.js          # ⭐ EDIT THIS FILE to customize your portfolio
├── components/
│   ├── Cube3D.jsx                # Interactive 3D cube component
│   ├── Hero.jsx                  # Hero/landing section
│   ├── About.jsx                 # About me section
│   ├── Projects.jsx              # Projects showcase
│   ├── Skills.jsx                # Skills grid
│   ├── Contact.jsx               # Contact form
│   ├── Navigation.jsx            # Top navigation bar
│   └── Footer.jsx                # Footer section
├── PortfolioApp.jsx              # Main app component
└── App.js                        # App entry point
```

## 🎨 How to Customize Your Portfolio

### 1. Personal Information

Open `/app/frontend/src/data/portfolioData.js` and edit the `personalInfo` object:

```javascript
export const personalInfo = {
  name: \"Your Name Here\",                    // Change to your full name
  title: \"Your Title/Role\",                  // e.g., \"Full Stack Developer\", \"Software Engineer\"
  tagline: \"Your tagline or motto\",          // Short description of what you do
  bio: \"Your full bio paragraph...\",         // Detailed about paragraph
  image: \"URL_TO_YOUR_PHOTO\",                // Replace with your photo URL
  resume: \"/resume.pdf\",                     // Add your resume PDF to /public folder
};
```

**To add your photo:**

1. Upload your photo to a hosting service (Imgur, CloudCraft, or AWS S3)
2. Copy the direct image URL
3. Paste it in the `image` field

**Alternative: Use local image:**

1. Place your photo in `/app/frontend/public/images/profile.jpg`
2. Set `image: \"/images/profile.jpg\"`

---

### 2. Skills

Edit the `skills` array in `portfolioData.js`:

```javascript
export const skills = [
  {
    name: \"HTML\",           // Skill name
    level: 95,              // Proficiency level (0-100)
    icon: \"Code2\"           // Lucide icon name (see icon list below)
  },
  // Add more skills...
];
```

**How to add a new skill:**

```javascript
{ name: \"Python\", level: 85, icon: \"Code\" },
```

**Available Icons** (from Lucide React):

- `Code2`, `Code`, `FileCode` - For programming languages
- `Database` - For databases
- `Server`, `Cloud` - For backend/cloud
- `Layout`, `Palette`, `Paintbrush` - For design
- `Globe`, `Network` - For web/networking
- `Container`, `Package` - For DevOps
- `Zap`, `Atom` - For frameworks
- `GitBranch`, `Github` - For version control

[Full icon list](https://lucide.dev/icons/)

---

### 3. Projects

Edit the `projects` array in `portfolioData.js`:

```javascript
export const projects = [
  {
    id: 1,                                    // Unique ID
    title: \"Project Name\",                    // Project title
    description: \"Brief description...\",      // What does it do?
    image: \"PROJECT_IMAGE_URL\",               // Project screenshot/preview
    technologies: [\"React\", \"Node.js\"],       // Tech stack used
    github: \"https://github.com/...\",         // GitHub repo URL
    demo: \"https://demo-link.com\",            // Live demo URL
    featured: true,                           // Show in featured filter?
  },
  // Add more projects...
];
```

**How to add a new project:**

```javascript
{
  id: 7,
  title: \"My Awesome App\",
  description: \"A revolutionary app that solves X problem with Y technology\",
  image: \"https://your-image-url.com/screenshot.png\",
  technologies: [\"React\", \"Firebase\", \"Tailwind\"],
  github: \"https://github.com/yourusername/awesome-app\",
  demo: \"https://awesome-app.com\",
  featured: true,
},
```

**Project Image Recommendations:**

- Use high-quality screenshots (1200x800px or 16:9 aspect ratio)
- Show the actual app interface
- Use free stock images from [Unsplash](https://unsplash.com) as placeholders

---

### 4. Contact Information

Edit the `contactInfo` object in `portfolioData.js`:

```javascript
export const contactInfo = {
  email: \"your.email@example.com\",          // Your email
  phone: \"+1 (555) 123-4567\",               // Your phone number
  location: \"Your City, Country\",           // Your location
  availability: \"Available for projects\",   // Current availability status

  // Social media links
  social: [
    {
      name: \"GitHub\",
      url: \"https://github.com/yourusername\",
      icon: \"Github\",
    },
    {
      name: \"LinkedIn\",
      url: \"https://linkedin.com/in/yourusername\",
      icon: \"Linkedin\",
    },
    {
      name: \"Twitter\",
      url: \"https://twitter.com/yourusername\",
      icon: \"Twitter\",
    },
    {
      name: \"Email\",
      url: \"mailto:your.email@example.com\",
      icon: \"Mail\",
    },
  ],
};
```

**How to add a new social link:**

```javascript
{
  name: \"Instagram\",
  url: \"https://instagram.com/yourusername\",
  icon: \"Instagram\",
},
```

---

### 5. Customize the 3D Cube

The interactive 3D cube in the hero section can be customized in `portfolioData.js`:

```javascript
export const cubeFaces = [
  { name: \"About\", color: \"#0ea5e9\", section: \"about\" },
  { name: \"Projects\", color: \"#8b5cf6\", section: \"projects\" },
  { name: \"Skills\", color: \"#00d9ff\", section: \"skills\" },
  { name: \"Contact\", color: \"#a78bfa\", section: \"contact\" },
];
```

**Customize face colors:**

- Use hex color codes (#RRGGBB)
- Make sure colors contrast well with white text
- Keep the linear theme (cyan/purple/blue tones work well)

---

## 🎨 Color Theme Customization

The portfolio uses a dark theme with cyan and purple accents. To change colors:

### Method 1: Quick Color Change

Search and replace these colors in component files:

- Cyan: `#00d9ff`, `#0ea5e9` → Your primary color
- Purple: `#8b5cf6`, `#a78bfa` → Your secondary color

### Method 2: Tailwind Configuration

Edit `/app/frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#YOUR_PRIMARY_COLOR',
      'secondary': '#YOUR_SECONDARY_COLOR',
    }
  }
}
```

---

## 📸 Adding Images

### Option 1: External Hosting (Recommended)

1. Upload images to:
   - [Imgur](https://imgur.com)
   - [Cloudinary](https://cloudinary.com)
   - [AWS S3](https://aws.amazon.com/s3/)
2. Copy the direct image URL
3. Use it in `portfolioData.js`

### Option 2: Local Images

1. Place images in `/app/frontend/public/images/`
2. Reference as: `image: \"/images/your-image.jpg\"`

**Image Guidelines:**

- Profile photo: 400x400px square
- Project screenshots: 800x600px (4:3) or 1200x800px (3:2)
- Keep file sizes under 500KB for fast loading

---

## 🚀 Testing Your Changes

After making changes to `portfolioData.js`:

1. **Save the file** - The app will automatically reload (hot reload is enabled)
2. **Check your browser** - Open http://localhost:3000
3. **Verify all sections** - Scroll through and make sure everything looks good

**Common Issues:**

- **Syntax Error**: Check for missing commas, quotes, or brackets
- **Image Not Loading**: Verify the URL is correct and accessible
- **Section Not Updating**: Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🔧 Advanced Customization

### Modify Component Styles

Each component in `/app/frontend/src/components/` can be customized:

**Example: Change Hero Background**
Edit `Hero.jsx`:

```javascript
className=\"relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#YOUR_COLOR_1] via-[#YOUR_COLOR_2] to-[#YOUR_COLOR_3]\"
```

### Add New Sections

To add a new section:

1. Create a new component in `/app/frontend/src/components/`
2. Import and add it to `PortfolioApp.jsx`
3. Add navigation link in `Navigation.jsx`

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

Test on different devices using browser DevTools (F12 → Toggle Device Toolbar)

---

## 🎯 Quick Checklist

Before deploying your portfolio, make sure you've updated:

- [ ] Personal name and title
- [ ] Profile photo URL
- [ ] Bio and tagline
- [ ] All skills (add/remove as needed)
- [ ] All projects (at least 3-6 projects)
- [ ] Project images and links
- [ ] Contact email and phone
- [ ] Social media links
- [ ] Resume file (add to /public/resume.pdf)
- [ ] Favicon (optional: /public/favicon.ico)

---

## 💡 Tips for a Great Portfolio

1. **Keep it Updated**: Regularly add new projects and skills
2. **Quality over Quantity**: Show your best 5-8 projects
3. **Real Projects**: Include live demos and GitHub links
4. **Professional Photo**: Use a high-quality, professional-looking photo
5. **Proofread**: Check for typos and grammar errors
6. **Fast Loading**: Optimize images (use TinyPNG or ImageOptim)
7. **SEO**: Update the title and meta tags in `/public/index.html`

---

## 🆘 Need Help?

- **Documentation**: [React Docs](https://react.dev)
- **Three.js Docs**: [Three.js](https://threejs.org/docs/)
- **Tailwind CSS**: [Tailwind Docs](https://tailwindcss.com/docs)
- **Icons**: [Lucide Icons](https://lucide.dev)

---

## 🚀 Deployment

When you're ready to deploy:

1. **Build for production:**

   ```bash
   cd /app/frontend
   yarn build
   ```

2. **Deploy to platforms:**
   - Vercel (Recommended)
   - Netlify
   - GitHub Pages
   - AWS Amplify

---

**Happy Customizing! 🎉**

Your portfolio is now ready to showcase your amazing work to the world!
"
