import './HeroSection.css'

export function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <div className="placeholder-image">
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#2a1f1f" stroke="#cc0000" strokeWidth="2" rx="8"/>
            <rect x="80" y="80" width="240" height="140" fill="#3a2a2a" opacity="0.5" rx="4"/>
            <circle cx="200" cy="130" r="40" fill="#cc0000" opacity="0.4"/>
            <path d="M185 120 L200 145 L215 120" stroke="#cc0000" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="120" y1="200" x2="280" y2="200" stroke="#cc0000" strokeWidth="2" opacity="0.6"/>
            <line x1="150" y1="220" x2="250" y2="220" stroke="#cc0000" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>
      </div>
      <div className="hero-content">
        <h2>Experience Excellence</h2>
        <p>
          Our platform provides cutting-edge solutions designed to help you achieve
          your goals. With intuitive features and reliable support, we're here to
          make your journey seamless and successful.
        </p>
      </div>
    </div>
  )
}

