import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Herosection() {
  return (
    < > 

    <Container>
      <Row className=" justify-content-md-center">
        <div className=' col-lg-6 col-md-12 col-sm-12'>
          <p style={{ color: `linear-gradient(to right, #208FFD, #A5FA94)` }} className=' hero fw-bold'> The Fast Pinpoint <br />
<span className='text-danger'>  Get Started - </span>
Tracking & Reservation.</p>
          </div>
        <div className='my-5  justify-content-center text-center col-lg-6 col-md-12 col-sm-12'>
        <p className='circular-div'> Get Started</p>
        </div>
      </Row>
    </Container>
    <div className='container'>Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices and companies with live tracking, history recording, estimated arrival time and usage report generation and much more features</div>
    <br /><br /><br />
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-4  justify-content-center text-center'><Button className='mx-2 b'variant='secondary' >5000 users</Button></div>
        <div className='col-lg-4 col-md-4 col-sm-4 justify-content-center text-center'><Button className='mx-2 b'variant='secondary' >10,000 trusted clients</Button></div>
        <div className='col-lg-4 col-md-4 col-sm-4 justify-content-center text-center'><Button className='mx-2 b 'variant='secondary' >10k+ downloads</Button></div>
      

      </div>
    </div>
    <p style={{ color: `linear-gradient(to right, #208FFD, #A5FA94)` }} className='  hero fw-bold'> Pinpoint Security, <br />
ensure the best 
usage for the institutes</p>
    </ >
  );
}

