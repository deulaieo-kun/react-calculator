import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);

  const getNumber = (number) => {
    if (secondNumber === 0) {
      setSecondNumber(number);
    } else if (secondNumber) {
      setSecondNumber("" + secondNumber + number);
    } else if (firstNumber === 0) {
      setFirstNumber(number);
    } else {
      setFirstNumber("" + firstNumber + number);
    }
  };

  const getOperation = (sign) => {
    if (sign !== "=") {
      setOperation(sign);
      setSecondNumber(0);
    } else {
      switch (operation) {
        case "+":
          setFirstNumber(parseFloat(firstNumber) + parseFloat(secondNumber));
          setOperation(null);
          setSecondNumber(null);
          break;
        case "-":
          setFirstNumber(parseFloat(firstNumber) - parseFloat(secondNumber));
          setOperation(null);
          setSecondNumber(null);
          break;
        case "×":
          setFirstNumber(parseFloat(firstNumber) * parseFloat(secondNumber));
          setOperation(null);
          setSecondNumber(null);
          break;
        case "÷":
          setFirstNumber(parseFloat(firstNumber) / parseFloat(secondNumber));
          setOperation(null);
          setSecondNumber(null);
          break;
        default:
          return;
      }
    }
  };

  const getDisplay = () => {
    if (secondNumber) {
      return `${firstNumber}${operation}${secondNumber}`;
    } else if (operation) {
      return `${firstNumber}${operation}`;
    } else {
      return firstNumber;
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center mx-auto vh-100 w-100">
      <div className="container" id="calculator">
        <div className="text-center p-2 rounded text-bg-dark">
          <div className="col-12">
            <div className="text-end p-2">
              <h1 id="display">{getDisplay()}</h1>
            </div>
          </div>
          <div className="row g-2 py-2">
            <div className="col-3">
              <div
                id="allClear"
                className="p-3 text-bg-light rounded-circle"
                onClick={() => {
                  window.location.reload();
                }}
              >
                <h3>AC</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-light rounded-circle"
                onClick={() => {
                  secondNumber
                    ? setSecondNumber(secondNumber * -1)
                    : setFirstNumber(firstNumber * -1);
                }}
              >
                <h3>±</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-light rounded-circle"
                onClick={() => {
                  secondNumber
                    ? setSecondNumber(secondNumber / 100)
                    : setFirstNumber(firstNumber / 100);
                }}
              >
                <h3>%</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-warning rounded-circle"
                onClick={() => {
                  getOperation("÷");
                }}
              >
                <h3>÷</h3>
              </div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(7);
                }}
              >
                <h3>7</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(8);
                }}
              >
                <h3>8</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(9);
                }}
              >
                <h3>9</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-warning rounded-circle"
                onClick={() => {
                  getOperation("×");
                }}
              >
                <h3>×</h3>
              </div>
            </div>
          </div>
          <div className="row g-2 py-2">
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(4);
                }}
              >
                <h3>4</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(5);
                }}
              >
                <h3>5</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(6);
                }}
              >
                <h3>6</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-warning rounded-circle"
                onClick={() => {
                  getOperation("-");
                }}
              >
                <h3>-</h3>
              </div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(1);
                }}
              >
                <h3>1</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(2);
                }}
              >
                <h3>2</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(3);
                }}
              >
                <h3>3</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-warning rounded-circle"
                onClick={() => {
                  getOperation("+");
                }}
              >
                <h3>+</h3>
              </div>
            </div>
          </div>
          <div className="row g-2 py-2">
            <div className="col-6">
              <div
                className="p-3 text-bg-secondary rounded-pill"
                onClick={() => {
                  getNumber(0);
                }}
              >
                <h3>0</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-secondary rounded-circle"
                onClick={() => {
                  getNumber(".");
                }}
              >
                <h3>.</h3>
              </div>
            </div>
            <div className="col-3">
              <div
                className="p-3 text-bg-warning rounded-circle"
                onClick={() => {
                  getOperation("=");
                }}
              >
                <h3>=</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
