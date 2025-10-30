import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import { HeroSection } from '../HeroSection/HeroSection'
import { FeaturesSection } from '../FeaturesSection/FeaturesSection'
import './HomeScreen.css'

interface HomeScreenProps {
  onFeedbackClick: () => void
}

export function HomeScreen({ onFeedbackClick }: HomeScreenProps) {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <div className="action-section">
        <button 
          className="feedback-button"
          onClick={onFeedbackClick}
        >
          Submit Feedback
        </button>
        <Link to="/help" className="help-link">
          Need Help? Visit our Help Center
        </Link>
      </div>
    </div>
  )
}