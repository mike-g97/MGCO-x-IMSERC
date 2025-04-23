import React from 'react';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { useSitemap } from '../context/SitemapContext';

interface SitemapNodeProps {
  node: {
    id: string;
    title: string;
    url?: string;
    type: 'main' | 'secondary' | 'content' | 'form';
    children?: any[];
    description?: string;
  };
  level: number;
}

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'main': return 'bg-[#4E2A84]';
    case 'secondary': return 'bg-[#716C8B]';
    case 'content': return 'bg-[#B6ACD1]';
    case 'form': return 'bg-[#4CAF50]';
    default: return 'bg-gray-400';
  }
};

const SitemapNode = ({ node, level }: SitemapNodeProps) => {
  const { toggleNodeExpansion, isNodeExpanded } = useSitemap();
  const expanded = isNodeExpanded(node.id);
  const hasChildren = node.children && node.children.length > 0;
  
  // Calculate left margin based on level
  const marginLeft = level * 40;
  
  const handleNodeClick = (e: React.MouseEvent) => {
    // Prevent click from bubbling up to parent elements
    e.stopPropagation();
    if (hasChildren) {
      toggleNodeExpansion(node.id);
    }
  };

  return (
    <div className="relative">
      <div 
        className={`
          relative flex items-center mb-3 
          ${level === 0 ? 'justify-center' : ''}
        `}
        style={{ marginLeft: level === 0 ? 0 : marginLeft }}
      >
        {hasChildren && (
          <button 
            className="absolute -left-7 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => toggleNodeExpansion(node.id)}
          >
            {expanded ? 
              <ChevronDown className="w-5 h-5" /> : 
              <ChevronRight className="w-5 h-5" />
            }
          </button>
        )}
        
        <div 
          data-node-id={node.id}
          onClick={handleNodeClick}
          className={`
            group relative px-4 py-2 rounded-lg shadow-sm border border-gray-200
            transition-all duration-200 cursor-pointer
            ${level === 0 ? 'bg-[#4E2A84] text-white' : 'bg-white hover:bg-gray-50'}
          `}
        >
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${getTypeColor(node.type)} mr-2`}></div>
            <div>
              <div className="font-medium">{node.title}</div>
              {node.url && (
                <a  
                  href={`https://imserc.northwestern.edu${node.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs opacity-70 flex items-center mt-0.5 hover:opacity-100"
                >
                  {level === 0 ? 'Home' : node.url} 
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              )}
            </div>
          </div>
          
          {/* Tooltip with description */}
          {node.description && (
            <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 w-64 bg-gray-800 text-white p-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
              {node.description}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </div>
          )}
        </div>
      </div>

      {hasChildren && expanded && (
        <div className="relative">
          <div className="pl-8">
            {node.children.map((child: any, index: number) => (
              <SitemapNode key={child.id || index} node={child} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SitemapNode;