import Contact from '../components/career/Contact'
import ContactEnd from '../components/career/ContactEnd'
import Top from '../components/career/Top'

const career = () => {
  return (
    <div>
      <Top/>

  <section className="bg-[#070118] min-h-screen px-10 py-20">
        <Contact/>
        <ContactEnd/>
      </section>
    </div>
  )
}

export default career
