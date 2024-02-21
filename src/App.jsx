import './scss/style.scss'
import { Container, Col } from 'reactstrap'
import UpperNav from "./components/LeftArea/UpperNav"
function App() {

  return (
    <>
      <Container fluid className=''>
        <div className="LeftArea">
          <UpperNav />
        </div>
        <Col>
        </Col>
      </Container>
    </>
  )
}

export default App
