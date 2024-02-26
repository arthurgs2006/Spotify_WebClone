import './scss/style.scss'
import { Container, Row, Col } from 'reactstrap'
import UpperNav from "./components/LeftArea/UpperNav"
import LowerNav from './components/LeftArea/LowerNav'
import SpotifyAD from './components/DownArea/SpotifyAD'
import MenuArea from './components/RIghtArea/MenuArea'
function App() {

  return (
    <>
      <Container fluid className=''>
        <Row>
          <Col className="LeftArea">
            <UpperNav />
            <LowerNav />
          </Col>
          <Col xs={9} className='Column'>
            <MenuArea />
          </Col>
        </Row>
        <SpotifyAD />

      </Container>
    </>
  )
}

export default App
