import React from 'react';
import './FormCovid.css';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { Row, Form, Container, Col } from "react-bootstrap";


function FormCovid() {
  return (
    <div className="formPage">
      <Header></Header>
      <h1>Do you have any of the following:</h1>

      <Footer></Footer>
    </div>
  );
}

export default FormCovid;
