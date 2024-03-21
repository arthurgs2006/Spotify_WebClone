import './scss/style.scss'
import { Container, Row, Col } from 'reactstrap'
import UpperNav from "./components/LeftArea/UpperNav"
import LowerNav from './components/LeftArea/LowerNav'
import SpotifyAD from './components/DownArea/SpotifyAD'
import MenuArea from './components/RIghtArea/MenuArea'
function App() {

  return (
    <>
      <Container fluid className='d-block'>
        <Row className=''>
          <Col className="LeftArea">
            <UpperNav />
            <LowerNav />
          </Col>
          <Col className='d-flex'>
            <MenuArea />
          </Col>
        </Row>
        <SpotifyAD />
      </Container>
    </>
  )
}

export default App
