import { useNavigate } from 'react-router-dom'
import './HelpScreen.css'

export function HelpScreen() {
  const navigate = useNavigate()

  return (
    <div className="help-screen">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Home
      </button>
      <div className="help-content">
        <h1>Help & Support</h1>
        <div className="help-section">
          <h2>Getting Started</h2>
          <p>
            Welcome to our help center. Here you can find answers to common questions
            and learn how to get the most out of our platform.
          </p>
        </div>
        <div className="help-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How do I submit feedback?</h3>
            <p>
              Click the button on the home page to open the feedback form. Fill in
              all required fields and submit your feedback.
            </p>
          </div>
          <div className="faq-item">
            <h3>How long does it take to process a ticket?</h3>
            <p>
              Typically, tickets are processed within 24-48 hours during business days.
              You will receive an email notification once your ticket is updated.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I track my ticket status?</h3>
            <p>
              Yes, you can track your ticket status by checking your email for updates
              or contacting our support team directly.
            </p>
          </div>
        </div>
        <div className="help-section">
          <h2>Contact Information</h2>
          <p>
            If you need further assistance, please don't hesitate to reach out to our
            support team at support@example.com or call us at (555) 123-4567.
          </p>
        </div>
      </div>
    </div>
  )
}