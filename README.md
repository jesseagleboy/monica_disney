# Monica DeFosse - Once Upon A Wish Travel [![Netlify Status](https://api.netlify.com/api/v1/badges/b58c08b7-f165-4c69-9d2e-08e5e23b4416/deploy-status)](https://app.netlify.com/sites/magicaladventuresbymonica/deploys)

This repository contains the source code for Monica DeFosse's static travel agent profile website under Once Upon A Wish Travel. The website showcases Monica's passion for Disney and Universal travel planning services.

## Overview

Monica DeFosse is a travel agent specializing in Disney and Universal destinations. The website serves as her professional profile, sharing her personal connection to Disney, travel experiences, and services offered to potential clients. This is a fully static website built with Astro, optimized for speed, SEO, and minimal JavaScript.

## Technical Stack

### Framework

- **[Astro](https://astro.build/)** - The website is built using Astro, a modern static site builder that allows for high performance, zero JavaScript by default, and flexible content options.

### Key Features

- **Static site generation** for maximum performance and simplified hosting
- **Content collections** for structured content management
- **Image optimization** using Astro's built-in image processing
- **SEO optimization** with custom meta tags and structured data
- **Responsive design** that works across all devices
- **View transitions** for smooth page navigation experiences

### Important NPM Packages

- `astro-seo` - Comprehensive SEO management
- `astro:assets` - Image optimization and management
- `astro:content` - Content management system
- `scss` - Styling with Sass preprocessor

## Project Structure

```
src/
├── functions/
│   └── createStarterMetaTags.ts - Custom SEO tag generator
├── images/ - Contains site images
├── layouts/
│   ├── Layout.astro - Main layout component
│   └── TextSection.astro - Reusable text section component
├── pages/
│   ├── 404.astro - Custom 404 page
│   ├── 500.astro - Server error page
│   ├── about-me/
│   │   └── index.astro - About Me page
│   ├── contact/
│   ├── faq/
│   ├── index.astro - Homepage
│   └── my-adventures/
└── styles/ - SCSS stylesheets
```

## Pages

- **Home** - Introduction to Monica and her services
- **About Me** - Personal story about Monica's connection to Disney and travel
- **My Adventures** - Showcases Monica's travel experiences
- **FAQ** - Answers to common questions
- **Contact** - Form to get in touch with Monica

## Design Features

- Custom hero sections with background images
- Card-based layout for content presentation
- Responsive design with mobile-first approach
- Custom error pages (404, 500)
- Accessibility considerations

## SEO Implementation

The website implements comprehensive SEO using the `astro-seo` package and custom meta tag functions:

- Custom Open Graph tags for social sharing
- Twitter card optimization
- Structured data for better search engine visibility
- Custom page titles and descriptions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run development server

   ```bash
   npm run dev
   ```

4. Build for production

   ```bash
   npm run build
   ```

## Deployment

This website is deployed on Netlify.

## License

© 2025 Monica DeFosse. All Rights Reserved.

This codebase and its contents are the exclusive property of Jesse Slomowitz & Monica DeFosse. Unauthorized copying, modification, distribution, or use of this content is prohibited without express written permission.

## Contact

For questions about the website or Monica's travel services:

- Email: <monica.defosse@ouawtravel.com>
- Official Profile: [https://ouawtravel.com/ouaw-team/monica-defosse/](https://ouawtravel.com/ouaw-team/monica-defosse/)

You can also visit the contact page on the live site.
