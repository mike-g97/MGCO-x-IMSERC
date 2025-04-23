import React from 'react';
import { Search, ZoomIn, ZoomOut, Download, Menu } from 'lucide-react';
import { useSitemap } from '../context/SitemapContext';
import { sitemapData } from '../data/sitemapData';

const Header = () => {
  const { searchQuery, setSearchQuery, zoomIn, zoomOut, resetZoom, zoomLevel } = useSitemap();

  const handleExport = () => {
    const dataStr = JSON.stringify(sitemapData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'imserc-sitemap.json';
    document.body.appendChild(link);
    URL.revokeObjectURL(url);
  }
  
  return (
    <header className="bg-[#4E2A84] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center">
            <Menu className="mr-3 h-6 w-6 md:hidden" />
            <h1 className="text-xl font-semibold">IMSERC Website Sitemap</h1>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages..."
                className="w-full pl-9 pr-4 py-1.5 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex items-center gap-1.5 bg-purple-700 rounded-md p-1">
              <button 
                onClick={zoomOut}
                className="p-1 hover:bg-purple-600 rounded"
                title="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span 
                onClick={resetZoom}
                className="text-xs px-1 cursor-pointer select-none"
                title="Reset zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </span>
              <button 
                onClick={zoomIn}
                className="p-1 hover:bg-purple-600 rounded"
                title="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>
            
            <button 
              onClick={handleExport}
              className="text-white bg-purple-700 hover:bg-purple-600 rounded-md p-1.5"
              title="Export sitemap as JSON"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;