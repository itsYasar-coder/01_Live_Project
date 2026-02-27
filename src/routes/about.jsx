import React from 'react'
import About from '../components/about/About'
import Center from '../components/about/Center'
import EndTop from '../components/about/EndTop'
import EndCenter from '../components/about/EndCenter'
import EndLast from '../components/about/EndLast'


const AboutPage = () => {
  return (
    <div>
      <About />

      <section className="bg-[#060212] min-h-screen px-10 py-20">
        <Center/>
        <EndTop/>
        <EndCenter/>
        <EndLast/>
      </section>
    </div>
  )
}

export default AboutPage
