import React from 'react';
import Sitemap from './components/Sitemap';
import Header from './components/Header';
import { SitemapProvider } from './context/SitemapContext';

function App() {
  return (
    <SitemapProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Sitemap />
        </main>
      </div>
    </SitemapProvider>
  );
}

export default App;