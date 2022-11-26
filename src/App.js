import React from 'react';
import { Footer, Gallery, HeroSection, TeamCard ,CourseCard, ContactPage} from './containers';
import { Insights, Navbar } from './components';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className="App">
      <HeroSection />
      <Insights />
      <Gallery />
      <Footer />
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

const Courses = () => {
  return (
    <div>
      <CourseCard/>
    </div>
  )
}

const Team = () => {
  return (
    <div>
      <TeamCard />
    </div>
  )
}

const ContactUs = () => {
  return (
    <div>
      <ContactPage/>
    </div>
  )
}

// the components will be imported inside of containers
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App