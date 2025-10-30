import './FeaturesSection.css'

export function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="feature-card">
        <div className="feature-icon">⚡</div>
        <h3>Fast & Reliable</h3>
        <p>Lightning-fast performance with 99.9% uptime guarantee</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🔒</div>
        <h3>Secure</h3>
        <p>Enterprise-grade security to protect your data</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🚀</div>
        <h3>Scalable</h3>
        <p>Grows with your business, from startup to enterprise</p>
      </div>
    </div>
  )
}

