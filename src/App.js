import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react'


function App() {

  const [height, setHeight] = useState("");
  const [weigth, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmistatus] = useState("")
  const [errorMassage, setErrorMassage] = useState("");

  const calculatoBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeigth = /^\d+$/.test(weigth)

    if (isValidHeight && isValidWeigth) {
      const heightInMeter = height / 100;
      const bimvalue = weigth / (heightInMeter * heightInMeter);
      setBmi(bimvalue.toFixed(2));
      if (bimvalue < 18.5) {
        setBmistatus("UnderWeight");

      }
      else if (bimvalue >= 18.5 && bimvalue < 24.9) {
        setBmistatus("Normal Weight")
      }
      else if (bimvalue >= 25 && bimvalue < 29.9) {
        setBmistatus("OverWeight")

      }
      else {
        setBmistatus("Obese")
      }
      setErrorMassage("")

    } else {
      setBmi(null);
      setBmistatus("");
      setErrorMassage("Please Enter valid numeric valus for height and weight.")

    }


  };
  const clearAll = () => {
    setHeight("")
    setWeight("")
    setBmi(null);
    setBmistatus("");
  }
  return (
    <Container>
      <Row>
        <Col>
          <div className='bmi-calculator'>
            <div className="box"></div>
            <div className="data">
              <h1>BMI Calculator</h1>
              {errorMassage && <p className="error">{errorMassage}</p>}
              <div className="input-container">
                <label htmlFor="height">Height (cm):</label>
                <input type="text" value={height} id="Height" onChange={(e) => setHeight(e.target.value)} />
              </div>
              <div className="input-container">
                <label htmlFor="Weight">Weight (kg):</label>
                <input type="text" value={weigth} id="Weight" onChange={(e) => setWeight(e.target.value)} />
              </div>
              <button onClick={calculatoBmi}>Claculator BMI</button>
              <button onClick={clearAll}>Clear</button>

              {bmi !== null && (
                <div className="result">
                  <p>Your BMI is: {bmi}</p>
                  <p>Status: {bmiStatus}</p>
                </div>
              )}
            </div>

          </div>

        </Col>
      </Row>
    </Container>

  )
}

export default App;
