import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 * Global enterprise shell wrapper:
 * - Accessible Skip-to-Content anchor for screen readers and keyboard users
 * - Persistent Navbar with desktop dropdowns and mobile drawer
 * - Main content container with flex-grow to keep Footer pinned to bottom
 * - Persistent enterprise Footer
 * - Supports nested routing via either `children` or React Router `<Outlet />`
 * 
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Page content
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Skip to Content Accessible Link (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-lg outline-none ring-2 ring-white ring-offset-2 ring-offset-blue-600 transition-transform"
      >
        Skip to main content
      </a>

      {/* Persistent Enterprise Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {children || <Outlet />}
      </main>

      {/* Persistent Enterprise Footer */}
      <Footer />
    </div>
  );
}
