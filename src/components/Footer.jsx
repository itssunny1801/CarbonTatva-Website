import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-secondary)', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-light)', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', minWidth: '250px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1rem' }}>CarbonTatva AI</div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '400px' }}>
            AI-native carbon intelligence for modern businesses. Measure, monitor, forecast, and reduce emissions with ease.
          </p>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <a href="mailto:support@carbontatva.com" style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>support@carbontatva.com</a>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '1.25rem' }}>Platform</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/offerings" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Our Offerings</Link></li>
              <li><Link to="/esg-calculator" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>ESG Calculator</Link></li>
              <li><Link to="/demo" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Book a Demo</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '1.25rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>About Us</Link></li>
              <li><Link to="/rd" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Research &amp; Development</Link></li>
              <li><Link to="/blogs" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Blogs &amp; Articles</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} CarbonTatva AI. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;