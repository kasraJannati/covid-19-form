import React from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { Row, Button, Container, Col } from "react-bootstrap";
import mask from '../../assets/img/mask.jpg'
import { useHistory } from "react-router-dom";
import './FormCovid.css';

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
  if(!history.location.state){
    window.location.href = "/";
  }
  let user = history.location.state.detail[0]; // get user from login page
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

  const afterSubmit = () =>{
    alert('Submitted!')
    window.location.href = "/";
  }

  function submit(){
    console.log('fever',fever)
    console.log('cough',cough)
    console.log('breath',breath)
    console.log('sore',sore)
    console.log('runny',runny)
    console.log('taste',taste)
    console.log('feeling',feeling)
    console.log('vomiting',vomiting)
    console.log('state',state)
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
                <input type="number" name="temp" onChange={onChange} value={state.temp} id="temp"/>
              </div>
            </div>
            <br className="remove-br-mob"></br>
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

      <div className="titleTop">Do you have any of the following:</div>

      <Container>
        <Row className="pb-5 pad-mob">
          <Col lg={3} sm={6} className="fixRes">
            <div className="fever d-flex">
              <div className="radioBtn">
                <span>Yes</span> <input type="radio" value="Yes" name="fever" onClick={() => setFever('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="fever"  onClick={() => setFever('No')} className="option-input checkbox"/>
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col lg={3} sm={6} className="fixRes">
            <div className="cough d-flex">
              <div className="radioBtn">
                <span>Yes</span> <input type="radio" value="Yes" name="cough" onClick={() => setCough('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="cough"  onClick={() => setCough('No')} className="option-input checkbox"/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col lg={3} sm={6} className="fixRes">
            <div className="breath d-flex">
              <div className="radioBtn">
                <span>Yes</span> <input type="radio" value="Yes" name="breath" onClick={() => setBreath('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="breath"  onClick={() => setBreath('No')} className="option-input checkbox"/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col lg={3} sm={6} className="fixRes"> 
            <div className="sore d-flex">
              <div className="radioBtn">
                <span>Yes</span> <input type="radio" value="Yes" name="sore" onClick={() => setSore('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="sore"  onClick={() => setSore('No')} className="option-input checkbox"/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>
        </Row>

        <Row className="pb-5">
          <Col lg={3} sm={6} className="fixRes">
            <div className="runny d-flex">
              <div className="radioBtn">
                <span>Yes</span> <input type="radio" value="Yes" name="runny" onClick={() => setRunny('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="runny"  onClick={() => setRunny('No')} className="option-input checkbox"/>
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col lg={3} sm={6} className="fixRes">
            <div className="taste d-flex">
              <div className="radioBtn">
                <span>Yes</span> <input type="radio" value="Yes" name="taste" onClick={() => setTaste('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="taste"  onClick={() => setTaste('No')} className="option-input checkbox"/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col lg={3} sm={6} className="fixRes">
            <div className="feeling d-flex">
              <div className="radioBtn">
                <span>Yes</span> <input type="radio" value="Yes" name="feeling" onClick={() => setFeeling('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="feeling"  onClick={() => setFeeling('No')} className="option-input checkbox"/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>

          <Col lg={3} sm={6} className="fixRes">
            <div className="vomiting d-flex">
              <div className="radioBtn">
                <span>Yes</span> <input type="radio" value="Yes" name="vomiting" onClick={() => setVomiting('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="vomiting"  onClick={() => setVomiting('No')} className="option-input checkbox"/> 
              </div>
              <img src={mask} alt=" " className="maskImg"/>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="pb-5">
          <Col>
            <div className="textBox d-flex">
              <div className="radioBtnText">
                <span>Yes</span> <input type="radio" value="Yes" name="contact" onClick={() => setContact('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="contact"  onClick={() => setContact('No')} className="option-input checkbox"/> 
              </div>
              <p>Have you been in close with someone who is<br></br> sick or has confirmed COVID-19 in the past 14 days?</p>
            </div>
          </Col>
        </Row>

        <Row className="pb-5">
          <Col>
            <div className="textBox d-flex">
              <div className="radioBtnText">
                <span>Yes</span> <input type="radio" value="Yes" name="travel" onClick={() => setTravel('Yes')} className="option-input checkbox"/> 
                <br></br>
                <span>No</span> <input type="radio" value="No" name="travel"  onClick={() => setTravel('No')} className="option-input checkbox"/> 
              </div>
              <p>Have you returned from travel outside Canada in the<br></br> past 14 days?</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div className="importantNotice">
              <p>If you answered YES to any of these questions,<br></br>go home & self-isolate right away. Call Telehealth<br></br>
              or your health care provider, to find out if you need a test.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Button variant="primary" type="submit" onClick={submit} className={`mb-5 sendForm ${validateBtn() ? "active" : ""}`}
        disabled={!validateBtn()} >
          Submit
      </Button>

      <Footer></Footer>
    </div>
  );
}

export default FormCovid;

