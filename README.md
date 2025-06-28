# Mark Ewer Portfolio & Blog

A modern, responsive portfolio and blog website built with VitePress, React, TypeScript, and Tailwind CSS. Features a clean design with the MagicUI-inspired violet color palette and focuses on accessibility and performance.

## 🚀 Features

- **Modern Tech Stack**: VitePress, React, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Blog Support**: MDX-powered blog with syntax highlighting
- **SEO Optimized**: Meta tags, OpenGraph, structured data
- **Performance**: Static site generation for fast loading
- **Accessibility**: WCAG compliant design and keyboard navigation
- **Violet Theme**: Beautiful MagicUI-inspired color palette

## 🛠️ Tech Stack

- **Framework**: [VitePress](https://vitepress.dev/) - Vue-powered static site generator
- **UI Components**: React with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Content**: MDX for blog posts with React component support
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: npm

## 📁 Project Structure

```
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # VitePress configuration
│   │   └── theme/
│   │       ├── index.ts       # Custom theme
│   │       └── styles.css     # Global styles
│   ├── blog/                  # Blog posts (MDX)
│   ├── public/                # Static assets
│   ├── index.md              # Homepage
│   ├── about.md              # About page
│   ├── projects.md           # Projects showcase
│   ├── contact.md            # Contact page
│   └── 404.md                # Custom 404 page
├── src/
│   ├── components/           # React components
│   └── lib/                  # Utility functions
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 🏗️ Pages

### Home Page
- Hero section with professional introduction
- Featured projects showcase
- Latest blog posts preview
- Skills and technologies

### About Page
- Detailed professional background
- Core expertise and philosophy
- Technologies and methodologies
- Personal interests

### Projects Page
- Featured project showcases
- Open source contributions
- Case studies and technical details
- Live demos and GitHub links

### Blog
- Technical articles on software architecture
- Agile methodology insights
- Software design patterns
- Product development thoughts

### Contact
- Professional contact information
- Speaking and consulting services
- Social media links
- Response time expectations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/markewer/MarkEwerCom.git
   cd MarkEwerCom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run serve` - Serve production build
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette
- **Primary**: Violet (#8b5cf6) with full range (50-950)
- **Background**: White (#ffffff)
- **Text**: Slate shades for hierarchy
- **Accents**: Purple gradients for visual interest

### Typography
- **Primary**: Inter font family
- **Code**: Fira Code for monospace text
- **Responsive**: Fluid typography scaling

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Project and blog post cards
- **Navigation**: Clean, accessible navigation
- **Forms**: Styled form elements (future enhancement)

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `docs/blog/`
2. Add frontmatter with metadata:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description"
   date: 2024-01-01
   category: Architecture
   author: Mark Ewer
   tags: ['tag1', 'tag2']
   image: /blog/your-image.jpg
   ---
   ```
3. Write content in Markdown or MDX
4. Add images to `docs/public/blog/`

### Adding Projects

Update `docs/projects.md` with new project information including:
- Project description and goals
- Technologies used
- Key features and achievements
- Links to live demos and repositories

## 🔧 Configuration

### VitePress Config
Main configuration in `docs/.vitepress/config.ts`:
- Site metadata and SEO
- Navigation structure
- Theme customization
- Build settings

### Tailwind Config
Customization in `tailwind.config.js`:
- Color palette
- Typography
- Custom animations
- Component utilities

### TypeScript Config
Type checking configuration in `tsconfig.json`:
- Strict mode enabled
- Path mapping for imports
- React JSX support

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This generates static files in `docs/.vitepress/dist/` ready for deployment to any static hosting service.

### Deployment Options
- **Netlify**: Automatic deployment from Git
- **Vercel**: Zero-config deployment
- **GitHub Pages**: Free hosting for public repos
- **Azure Static Web Apps**: Integrated with Azure services

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Mark Ewer**
- Website: [markewer.com](https://markewer.com)
- LinkedIn: [linkedin.com/in/markewer](https://www.linkedin.com/in/markewer/)
- GitHub: [github.com/markewer](https://github.com/markewer)
- Email: mark@markewer.com

---

Built with ❤️ using VitePress, React, and Tailwind CSS
