
import './Popup.css'
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'

export const Popup = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <CardContainer step={1} />
        <CardContainer step={2} />
        <CardContainer step={3} />
        <CardContainer step={4} />
      </div>
      <Footer />
    </main>
  )
}

export default Popup
