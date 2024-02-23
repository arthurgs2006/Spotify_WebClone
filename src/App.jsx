import './scss/style.scss'
import { Container, Col } from 'reactstrap'
import UpperNav from "./components/LeftArea/UpperNav"
import LowerNav from './components/LeftArea/LowerNav'
import SpotifyAD from './components/DownArea/SpotifyAD'
function App() {

  return (
    <>
      <Container fluid className=''>
        <div className="LeftArea">
          <UpperNav />
          <LowerNav />
        </div>
        <SpotifyAD />
      </Container>
    </>
  )
}

export default App
