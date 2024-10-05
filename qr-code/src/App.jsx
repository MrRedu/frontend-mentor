import './App.css'
import { Card } from './components/Card'

function App() {

  return (
    <div style={{ display: 'grid', placeContent: 'center', height: '100dvh' }}>
      <Card srcImage={'/image-qr-code.png'} altImage={'QR'} title={'Improve your front-end skills by building projects'} paragraph={'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'} />
    </div>
  )
}

export default App
