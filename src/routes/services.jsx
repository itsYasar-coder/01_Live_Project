import React from 'react'
import Services from '../components/services/Services'
import ServicesCenter from '../components/services/ServicesCenter'

const services = () => {
  return (
    <div >
      <Services/>

     <section className="bg-[#050014] min-h-screen px-10 py-20">
        <ServicesCenter/>
      </section>
      
    </div>
  )
}

export default services
