import './scss/style.scss'
import { Container, Col } from 'reactstrap'
import UpperNav from "./components/LeftArea/UpperNav"
import LowerNav from './components/LeftArea/LowerNav'
function App() {

  return (
    <>
      <Container fluid className=''>
        <div className="LeftArea">
          <UpperNav />
          <LowerNav />
        </div>
        <Col>
        </Col>
      </Container>
    </>
  )
}

export default App
