import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen/HomeScreen'
import { HelpScreen } from './components/HelpScreen/HelpScreen'
import { FeedbackModal } from './components/FeedbackModal/FeedbackModal'
import { TicketModal } from './components/TicketModal/TicketModal'
import { useState } from 'react'
import './App.css'

function App() {
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const [newTicketModalOpen, setNewTicketModalOpen] = useState(false)
  const [existingTicketModalOpen, setExistingTicketModalOpen] = useState(false)

  const handleFeedbackSubmit = () => {
    setFeedbackModalOpen(false)
    
    // Randomly choose between new ticket or existing ticket
    const random = Math.random()
    if (random < 0.5) {
      // Show new ticket modal
      setNewTicketModalOpen(true)
    } else {
      // Show existing ticket modal
      setExistingTicketModalOpen(true)
    }
  }

  return (
    <div className="app">
      <Routes>
        <Route 
          path="/" 
          element={<HomeScreen onFeedbackClick={() => setFeedbackModalOpen(true)} />} 
        />
        <Route 
          path="/help" 
          element={<HelpScreen />} 
        />
      </Routes>

      <FeedbackModal
        isOpen={feedbackModalOpen}
        onClose={() => setFeedbackModalOpen(false)}
        onSubmit={handleFeedbackSubmit}
      />

      <TicketModal
        isOpen={newTicketModalOpen}
        onClose={() => setNewTicketModalOpen(false)}
        title="New Ticket Created"
        message="Your ticket has been successfully created. You will receive a confirmation email shortly with your ticket number."
      />

      <TicketModal
        isOpen={existingTicketModalOpen}
        onClose={() => setExistingTicketModalOpen(false)}
        title="Ticket In Progress"
        message="An existing ticket for this issue is already in progress. Please check your email for updates or contact support for more information."
      />
    </div>
  )
}

export default App