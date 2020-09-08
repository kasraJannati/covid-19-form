import React from 'react';
import './FormCovid.css';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { Row, Button, Container, Col } from "react-bootstrap";
import mask from '../../assets/img/mask.jpg'
import { useHistory } from "react-router-dom";



function FormCovid() {

  const [fever, setFever] = React.useState('');
  const [cough, setCough] = React.useState('');
  const [breath, setBreath] = React.useState('');
  const [sore, setSore] = React.useState('');
  const [runny, setRunny] = React.useState('');
  const [taste, setTaste] = React.useState('');
  const [feeling, setFeeling] = React.useState('');
  const [vomiting, setVomiting] = React.useState('');

  const [contact, setContact] = React.useState('');
  const [travel, setTravel] = React.useState('');


  /** header form */
  let history = useHistory();
  let user = history.location.state; // get user from login page

  if(!user){
    window.location.href = "/";
  }
  var currentDate = new Date().toLocaleDateString();  //"8/5/2019"
  var currentTime = new Date().toLocaleTimeString();  //"2:31:56 PM" a');
  const [state, setState] = React.useState({
    name: user.name,
    temp: "",
    date:currentDate,
    time:currentTime,
    id: user.user_id
  })

  function onChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }
  /***/

  const afterSubmit = () =>{
    alert('Submitted!')
    window.location.href = "/";
   
  }

  function submit(){
    // console.log('fever',fever)
    // console.log('cough',cough)
    // console.log('breath',breath)
    // console.log('sore',sore)
    // console.log('runny',runny)
    // console.log('taste',taste)
    // console.log('feeling',feeling)
    // console.log('vomiting',vomiting)
    // console.log('state',state)

    fetch(`http://localhost:4000/status/add?user_id=${state.id}&fever=${fever}&cough=${cough}&breath=${breath}&sore=${sore}&runny=${runny}&taste=${taste}&feeling=${feeling}&vomiting=${vomiting}&contact=${contact}&travel=${travel}&tem=${state.temp}&date=${state.date}&time=${state.time}`)                    
    .then(afterSubmit) 
    .catch(err => console.log(err))

  }


  function validateBtn() {
    return fever && cough && breath && sore && runny && taste && feeling && vomiting && contact && travel && state.temp;
  }

  

  return (
    <div className="formPage">
      <Header></Header>

      <div className="headerForm">
          <Container>
            <div className="formTop">
              <div className="group">
                <div className="separate">
                  <label htmlFor="name">Name: </label>
                  <input type="text" name="name" onChange={onChange}  value={state.name} id="fullname" disabled/>
                </div>
                <div className="separate">
                  <label htmlFor="temp">Today's Temperature: </label>
                  <input type="text" name="temp" onChange={onChange} value={state.temp} id="temp"/>
                </div>
              </div>
              <br></br>
              <div className="group">
                <div className="separate">
                  <label htmlFor="date">Date: </label>
                  <input type="text" name="date" onChange={onChange} value={state.date} id="date" disabled/>
                </div>
                <div className="separate">
                  <label htmlFor="time">Time: </label>
                  <input type="text" name="time" onChange={onChange} value={state.time} id="time" disabled/>
                </div>
              </div>
            </div>
          </Container>
        </div>


      <h1>Do you have any of the following:</h1>

      <Container>
        <Row className="pb-5">

     

          <Col>
            <div className="fever d-flex">
              <div className="radioBtn">
                Yes <input type="radio" value="Yes" name="fever" onClick={() => setFever('Yes')}/> 
                <br></br>
                No <input type="radio" value="No" name="fever"  onClick={() => setFever('No')}/>
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col>
            <div className="cough d-flex">
              <div className="radioBtn">
                Yes <input type="radio" value="Yes" name="cough" onClick={() => setCough('Yes')}/> 
                <br></br>
                No <input type="radio" value="No" name="cough"  onClick={() => setCough('No')}/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col>
            <div className="breath d-flex">
              <div className="radioBtn">
                Yes <input type="radio" value="Yes" name="breath" onClick={() => setBreath('Yes')}/> 
                <br></br>
                No <input type="radio" value="No" name="breath"  onClick={() => setBreath('No')}/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col>
            <div className="sore d-flex">
              <div className="radioBtn">
                Yes <input type="radio" value="Yes" name="sore" onClick={() => setSore('Yes')}/> 
                <br></br>
                No <input type="radio" value="No" name="sore"  onClick={() => setSore('No')}/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

        </Row>

        <Row className="pb-5">

     

          <Col>
            <div className="runny d-flex">
              <div className="radioBtn">
                Yes <input type="radio" value="Yes" name="runny" onClick={() => setRunny('Yes')}/> 
                <br></br>
                No <input type="radio" value="No" name="runny"  onClick={() => setRunny('No')}/>
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col>
            <div className="taste d-flex">
              <div className="radioBtn">
                Yes <input type="radio" value="Yes" name="taste" onClick={() => setTaste('Yes')}/> 
                <br></br>
                No <input type="radio" value="No" name="taste"  onClick={() => setTaste('No')}/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col>
            <div className="feeling d-flex">
              <div className="radioBtn">
                Yes <input type="radio" value="Yes" name="feeling" onClick={() => setFeeling('Yes')}/> 
                <br></br>
                No <input type="radio" value="No" name="feeling"  onClick={() => setFeeling('No')}/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col>
            <div className="vomiting d-flex">
              <div className="radioBtn">
                Yes <input type="radio" value="Yes" name="vomiting" onClick={() => setVomiting('Yes')}/> 
                <br></br>
                No <input type="radio" value="No" name="vomiting"  onClick={() => setVomiting('No')}/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

        </Row>

      </Container>


      <Container>
        <Row className="pb-5">
          <div className="textBox d-flex">
            <div className="radioBtnText">
              Yes <input type="radio" value="Yes" name="contact" onClick={() => setContact('Yes')}/> 
              <br></br>
              No <input type="radio" value="No" name="contact"  onClick={() => setContact('No')}/> 
            </div>
            <p>Have you been in close with someone who is<br></br> sick or has confirmed COVID-19 in the past 14 days?</p>
          </div>
        </Row>

        <Row className="pb-5">
          <div className="textBox d-flex">
            <div className="radioBtnText">
              Yes <input type="radio" value="Yes" name="travel" onClick={() => setTravel('Yes')}/> 
              <br></br>
              No <input type="radio" value="No" name="travel"  onClick={() => setTravel('No')}/> 
            </div>
            <p>Have you returned from travel outside Canada in the<br></br> past 14 days?</p>
          </div>
        </Row>
      </Container>


      <Container>
        <Row>
          <div className="textBox2">
            <p>If you answered YES to any of these questions,<br></br>go home & self-isolate right away. Call Telehealth<br></br>
            or your health care provider, to find out if you need a test.</p>
          </div>
        </Row>
      </Container>


      <Button variant="primary" type="submit" onClick={submit} className="mb-5" 
        disabled={!validateBtn()} >
          Submit
      </Button>

      <Footer></Footer>
    </div>
  );
}

export default FormCovid;

