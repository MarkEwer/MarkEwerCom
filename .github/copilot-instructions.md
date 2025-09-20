# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a personal portfolio website for Mark Ewer built with Next.js, TypeScript, and MagicUI components. The site showcases programming projects and a blog with software design topics.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with MagicUI Design System (Violet theme, Light mode)
- **Content**: MDX for blog posts and pages
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Project Structure

- `/src/app/` - Next.js App Router pages
- `/src/components/` - Reusable React components
- `/src/lib/` - Utility functions and helpers
- `/content/` - MDX blog posts and static content
- `/public/` - Static assets, images, etc.

## Development Guidelines

1. **Components**: Use functional components with TypeScript interfaces
2. **Styling**: Prefer Tailwind CSS classes and MagicUI components
3. **Content**: Write blog posts in MDX format with frontmatter metadata
4. **Accessibility**: Follow WCAG guidelines and semantic HTML
5. **Performance**: Optimize images, use lazy loading, and minimize bundle size
6. **SEO**: Include proper meta tags, structured data, and sitemap

## MagicUI Usage

- Use components from the MagicUI design system
- Follow the Violet color palette
- Implement smooth animations and micro-interactions
- Ensure responsive design across all devices

## Content Migration

- Blog posts are migrated from 3w3r.com to MDX format
- Images are optimized and stored in `/public/images/`
- Maintain SEO-friendly URLs and proper redirects
