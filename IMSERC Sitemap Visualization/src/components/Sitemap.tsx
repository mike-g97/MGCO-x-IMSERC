import React, { useRef } from 'react';
import SitemapNode from './SitemapNode';
import { useSitemap } from '../context/SitemapContext';
import { sitemapData } from '../data/sitemapData';
import SitemapConnections from './SitemapConnections';

const Sitemap = () => {
  const { zoomLevel, searchQuery } = useSitemap();
  const sitemapRef = useRef<HTMLDivElement>(null);

  const filteredData = searchQuery 
    ? filterSitemapNodes(sitemapData, searchQuery.toLowerCase())
    : sitemapData;

  return (
    <div className="overflow-auto bg-white rounded-lg shadow-md p-4 h-[calc(100vh-120px)]">
      <div 
        ref={sitemapRef}
        className="relative transition-transform duration-200 ease-in-out min-h-[800px]"
        style={{ 
          transform: `scale(${zoomLevel})`, 
          transformOrigin: 'top center' 
        }}
      >
        <SitemapConnections data={filteredData} />
        <div className="relative pt-10">
          <SitemapNode node={filteredData} level={0} />
        </div>

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md text-sm border border-gray-200">
          <h4 className="font-medium text-gray-700 mb-2">Page Types</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#4E2A84] mr-2"></div>
              <span>Main Pages</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#716C8B] mr-2"></div>
              <span>Secondary Pages</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#B6ACD1] mr-2"></div>
              <span>Content Pages</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#4CAF50] mr-2"></div>
              <span>Forms/Applications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to filter sitemap nodes based on search query
function filterSitemapNodes(node: any, query: string): any | null {
  // Check if current node matches
  const nodeMatches = node.title.toLowerCase().includes(query);
  
  // Handle children
  let matchingChildren = [];
  
  if (node.children) {
    for (const child of node.children) {
      const filteredChild = filterSitemapNodes(child, query);
      if (filteredChild) {
        matchingChildren.push(filteredChild);
      }
    }
  }
  
  // Return the node if it matches or has matching children
  if (nodeMatches || matchingChildren.length > 0) {
    return {
      ...node,
      children: matchingChildren.length > 0 ? matchingChildren : node.children
    };
  }
  
  return null;
}

export default Sitemap;