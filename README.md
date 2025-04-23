# IMSERC Sitemap Visualization

An interactive visualization tool for IMSERC's website structure, built with React and TypeScript.

![IMSERC Sitemap Screenshot](https://i.postimg.cc/NFy075kX/IMSERC-Website-Sitemap-Visualizer.png)

## Features

- 🌳 Interactive sitemap visualization with expandable/collapsible nodes
- 🔍 Real-time search functionality to filter pages
- 🔎 Zoom controls for better navigation
- 🎨 Visual distinction between different page types:
  - Main pages (Purple)
  - Secondary pages (Gray)
  - Content pages (Light Purple) 
  - Forms/Applications (Green)
- 💾 Export sitemap data as JSON
- 📱 Fully responsive design for all screen sizes

## Live Demo

Visit the live demo at: [https://mike-g97.github.io/MGCO-x-IMSERC/](https://mike-g97.github.io/MGCO-x-IMSERC/)

## Technologies Used

- ⚛️ React 18
- 📘 TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🎯 Lucide React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mike-g97/MGCO-x-IMSERC.git
cd MGCO-x-IMSERC
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Building & Deployment

Build for production:
```bash
npm run build
```

Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
src/
├── components/         # React components
│   ├── Header.tsx     # Navigation and controls
│   ├── Sitemap.tsx    # Main visualization
│   ├── SitemapNode.tsx    # Node component
│   └── SitemapConnections.tsx # Node connections
├── context/           # React context
│   └── SitemapContext.tsx # State management
├── data/             # Data files
│   └── sitemapData.ts # Sitemap structure
└── App.tsx           # Root component
```

## Key Features

### Interactive Navigation
- Expand/collapse nodes to explore the site structure
- Smooth animations for state transitions
- Visual connections between parent and child nodes

### Search Functionality
- Real-time filtering of nodes
- Highlights matching results
- Preserves hierarchy context

### Zoom Controls
- Zoom in/out functionality
- Reset zoom option
- Percentage indicator

### Export Capability
- Export the complete sitemap as JSON
- Preserves all node metadata
- Downloadable format

## Contributing
- Fork the repository
- Create your feature branch (git checkout -b feature/amazing-feature)
- Commit your changes (git commit -m 'Add amazing feature')
- Push to the branch (git push origin feature/amazing-feature)
- Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Northwestern University IMSERC
- MGCO Dev Team
