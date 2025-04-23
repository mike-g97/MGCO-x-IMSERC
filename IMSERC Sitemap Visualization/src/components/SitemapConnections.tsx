import React, { useEffect, useState } from 'react';
import { useSitemap } from '../context/SitemapContext';

interface SitemapConnectionsProps {
  data: any;
}

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function SitemapConnections({ data }: SitemapConnectionsProps) {
  const [connections, setConnections] = useState<Connection[]>([]);
  const { isNodeExpanded } = useSitemap();

  useEffect(() => {
    const updateConnections = () => {
      const newConnections: Connection[] = [];
      
      const processNode = (node: any) => {
        const parentElement = document.querySelector(`[data-node-id="${node.id}"]`);
        
        if (parentElement && node.children && isNodeExpanded(node.id)) {
          const parentRect = parentElement.getBoundingClientRect();
          const parentX = parentRect.left + parentRect.width / 2;
          const parentY = parentRect.top + parentRect.height;
          
          node.children.forEach((child: any) => {
            const childElement = document.querySelector(`[data-node-id="${child.id}"]`);
            if (childElement) {
              const childRect = childElement.getBoundingClientRect();
              const childX = childRect.left + childRect.width / 2;
              const childY = childRect.top;
              
              newConnections.push({
                x1: parentX,
                y1: parentY,
                x2: childX,
                y2: childY
              });
              
              if (child.children && isNodeExpanded(child.id)) {
                processNode(child);
              }
            }
          });
        }
      };
      
      processNode(data);
      setConnections(newConnections);
    };
    
    // Initial update
    updateConnections();
    
    // Update on resize
    window.addEventListener('resize', updateConnections);
    
    // Update when nodes expand/collapse
    const observer = new MutationObserver(updateConnections);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
    
    return () => {
      window.removeEventListener('resize', updateConnections);
      observer.disconnect();
    };
  }, [data, isNodeExpanded]);

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {connections.map((connection, index) => (
        <line
          key={index}
          x1={connection.x1}
          y1={connection.y1}
          x2={connection.x2}
          y2={connection.y2}
          stroke="#E2E8F0"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}