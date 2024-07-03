import React, { useEffect, useState } from "react";
import "./Bim.css";

function BimCalculator() {
  //useState
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState(() => {
    return localStorage.getItem("bmi");
  });

  useEffect(() => {
    const storeHeight = localStorage.getItem("height");
    const storeWeight = localStorage.getItem("weight");
    const storeBmi = localStorage.getItem("bmi");
    if (storeHeight) setHeight(storeHeight);
    if (storeWeight) setWeight(storeWeight);
    if (storeBmi) setBmi(storeBmi);
  }, []);

  let calcBmi = (e) => {
    //prevent reload
    e.preventDefault();

    if (height === 0 || weight === 0) {
      alert("Please Enter Correct Details Below");
    } else {
      let bmi = (weight / (height * height)) * 705;
      setBmi(bmi.toFixed(1));
    }

    if (bmi < 25) {
      setMessage("You are Underweight");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("You are Healthy Wealth");
    } else {
      setMessage("You are Overweight");
    }

    localStorage.setItem("bmi", bmi);
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="main">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Height BMI</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label>Weight BMI</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="button">
            <button type="submit">Submit</button>
            <button type="submit" onClick={reload}>
              Reload
            </button>
          </div>
        </form>

        <div className="title">
          <h3>Your BMI is: {bmi} </h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default BimCalculator;
