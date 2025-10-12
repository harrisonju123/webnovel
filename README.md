# Web Novel Platform

A modern web novel hosting platform built with Next.js, TypeScript, and Tailwind CSS. Optimized for Vercel deployment.

## Features

- 📚 Clean, readable chapter viewer
- 📑 Table of contents with chapter navigation
- 🎨 Dark mode support
- 📱 Responsive design
- ⚡ Static site generation for optimal performance
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── chapters/     # Chapter pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── data/
│   │   └── novel.ts      # Novel content and metadata
│   └── types/
│       └── novel.ts      # TypeScript interfaces
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Adding Content

Edit `/src/data/novel.ts` to customize your web novel:

1. Update the novel metadata (title, author, description)
2. Add or modify chapters in the `chapters` array
3. Each chapter needs:
   - `id`: Unique identifier (used in URL)
   - `number`: Chapter number
   - `title`: Chapter title
   - `content`: Chapter text (use \n\n for paragraphs)
   - `publishDate`: Publication date

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

## Customization

### Styling

- Edit `/src/app/globals.css` for global styles
- Modify Tailwind classes in components for styling changes
- Update `/tailwind.config.ts` for theme customization

### Layout

- Edit `/src/app/layout.tsx` to change navigation and footer
- Modify page components in `/src/app/` for content changes

### Features to Add

- Search functionality
- Bookmarking system
- Comments section
- Reading progress tracker
- Multiple novels support
- Admin panel for content management

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## License

MIT
