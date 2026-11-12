import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import Layout from './components/layout/Layout.jsx';

// Canonical Page Components
import Home from './pages/Home.jsx';
import SolutionsHub from './pages/SolutionsHub.jsx';
import DemandPlanning from './pages/DemandPlanning.jsx';
import SupplyPlanning from './pages/SupplyPlanning.jsx';
import IntegratedBusinessPlanning from './pages/IntegratedBusinessPlanning.jsx';
import NetworkPlanning from './pages/NetworkPlanning.jsx';
import ProductionPlanning from './pages/ProductionPlanning.jsx';
import OrderFulfillment from './pages/OrderFulfillment.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Customers from './pages/Customers.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * Root Application Component with Client-Side Router
 * Maps all 13 canonical URLs from the live site audit + 404 fallback.
 * Employs Layout wrapper with persistent Navbar and Footer, and ScrollToTop on navigation.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Canonical Route 1: Home */}
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          {/* Canonical Route 2: Solutions Hub */}
          <Route path="solutions" element={<SolutionsHub />} />

          {/* Canonical Route 3: Demand Planning */}
          <Route path="demand-planning" element={<DemandPlanning />} />

          {/* Canonical Route 4: Supply Planning */}
          <Route path="supply-planning" element={<SupplyPlanning />} />

          {/* Canonical Route 5: Integrated Business Planning */}
          <Route path="integrated-business-planning" element={<IntegratedBusinessPlanning />} />

          {/* Canonical Route 6: Network Planning */}
          <Route path="network-planning" element={<NetworkPlanning />} />

          {/* Canonical Route 7: Production Planning */}
          <Route path="production-planning" element={<ProductionPlanning />} />

          {/* Canonical Route 8: Order Fulfillment */}
          <Route path="order-fulfillment" element={<OrderFulfillment />} />

          {/* Canonical Route 9: Consulting Services */}
          <Route path="services" element={<Services />} />

          {/* Canonical Route 10: About Us */}
          <Route path="about" element={<About />} />

          {/* Canonical Route 11: Customers & Testimonials */}
          <Route path="customers" element={<Customers />} />

          {/* Canonical Route 12: Career Opportunities */}
          <Route path="careers" element={<Careers />} />

          {/* Canonical Route 13: Contact Us */}
          <Route path="contact" element={<Contact />} />

          {/* 404 Catch-All Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
