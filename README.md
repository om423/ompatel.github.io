# Om Patel - Portfolio

A modern, responsive portfolio website showcasing Om Patel's work in systems engineering, AI development, and aerospace technology.

## Features

- **Modern Design**: Dark theme with gradient effects and glass morphism
- **Responsive**: Mobile-first design with smooth animations
- **Interactive**: Hover effects, expandable project cards, smooth scrolling
- **Accessible**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized with Vite and modern React patterns

## Technology Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd om-patel-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # Reusable UI components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── AwardsSection.tsx
│   └── ContactSection.tsx
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── styles/             # Global styles
```

## Design System

- **Colors**: HSL-based color system with CSS variables
- **Animations**: Custom keyframes for float, glow, slide-up effects
- **Typography**: Gradient text effects and modern font styling
- **Components**: Consistent shadcn/ui component library

## License

MIT License - see LICENSE file for details
