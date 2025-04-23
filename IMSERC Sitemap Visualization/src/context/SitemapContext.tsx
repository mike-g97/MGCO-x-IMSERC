import React, { createContext, useContext, useState, ReactNode } from 'react';

type SitemapContextType = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  zoomLevel: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  expandedNodes: string[];
  toggleNodeExpansion: (id: string) => void;
  isNodeExpanded: (id: string) => boolean;
};

const SitemapContext = createContext<SitemapContextType | undefined>(undefined);

export const useSitemap = () => {
  const context = useContext(SitemapContext);
  if (context === undefined) {
    throw new Error('useSitemap must be used within a SitemapProvider');
  }
  return context;
};

export const SitemapProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [expandedNodes, setExpandedNodes] = useState<string[]>(['root', 'using-imserc']);

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const resetZoom = () => setZoomLevel(1);

  const toggleNodeExpansion = (id: string) => {
    setExpandedNodes(prev => 
      prev.includes(id) 
        ? prev.filter(nodeId => nodeId !== id)
        : [...prev, id]
    );
  };

  const isNodeExpanded = (id: string) => expandedNodes.includes(id);

  return (
    <SitemapContext.Provider 
      value={{ 
        searchQuery, 
        setSearchQuery,
        zoomLevel,
        zoomIn,
        zoomOut,
        resetZoom,
        expandedNodes,
        toggleNodeExpansion,
        isNodeExpanded
      }}
    >
      {children}
    </SitemapContext.Provider>
  );
};