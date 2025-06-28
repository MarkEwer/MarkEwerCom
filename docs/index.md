---
layout: home
title: Mark Ewer - Software Architect & Developer
titleTemplate: Portfolio & Blog

hero:
  name: Mark Ewer
  text: Software Architect & Developer
  tagline: Building scalable solutions and sharing insights on software design patterns and agile methodologies
  actions:
    - theme: brand
      text: View My Work
      link: /projects
    - theme: alt
      text: Learn About Me
      link: /about
  image:
    src: /profile-image.jpg
    alt: Mark Ewer

features:
  - icon: 🏗️
    title: Software Architecture
    details: Designing scalable, maintainable systems using modern architecture patterns like CQRS, microservices, and event-driven design.
  - icon: ⚡
    title: Full-Stack Development
    details: Building end-to-end solutions with TypeScript, React, .NET, Azure, and modern DevOps practices.
  - icon: 📝
    title: Technical Writing
    details: Sharing knowledge through detailed blog posts on agile methodologies, architecture patterns, and best practices.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%);
  
  /* Custom blue accent color from your shirt */
  --vp-c-brand: #2563eb;
  --vp-c-brand-light: #3b82f6;
  --vp-c-brand-lighter: #60a5fa;
  --vp-c-brand-dark: #1d4ed8;
  --vp-c-brand-darker: #1e40af;
  --vp-c-brand-dimm-1: rgba(37, 99, 235, 0.5);
  --vp-c-brand-dimm-2: rgba(37, 99, 235, 0.25);
  --vp-c-brand-dimm-3: rgba(37, 99, 235, 0.05);
}

.image-src {
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}

/* Right-align the hero image */
@media (min-width: 960px) {
  .VPHero.has-image .container {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    text-align: left !important;
  }
  
  .VPHero.has-image .main {
    order: 1;
    flex: 1;
    max-width: none !important;
  }
  
  .VPHero.has-image .image {
    order: 2;
    flex: 0 0 auto;
    margin: 0 0 0 1.5rem !important;
    min-width: 280px;
  }
  
  .VPHero.has-image .image-container {
    width: 280px !important;
    height: 280px !important;
  }
  
  .VPHero.has-image .image-src {
    max-width: 280px !important;
    width: 280px !important;
    height: 280px !important;
    object-fit: cover;
    border-radius: 50% !important;
  }
}
</style>