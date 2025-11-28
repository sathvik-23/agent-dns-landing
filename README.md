# AgentDNS Landing Page

A modern, responsive landing page for AgentDNS, inspired by AgentMail's design aesthetic.

## Features

- 🎨 Modern dark hero section with gradient backgrounds
- 📱 Fully responsive design
- ✨ Smooth animations using Framer Motion
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 Tailwind CSS for styling
- 🔄 Scroll-triggered animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── HowItWorks.tsx  # How it works section
│   ├── UseCases.tsx    # Use cases section
│   ├── Pricing.tsx     # Pricing section
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Footer
└── ...
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons (via lucide-react, needs to be installed)

## Customization

- Colors: Edit `tailwind.config.js` to change the color scheme
- Content: Update component files in `components/` directory
- Styling: Modify Tailwind classes or add custom CSS in `globals.css`

## Build for Production

```bash
npm run build
npm start
```



