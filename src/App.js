import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
const App = () => {
  const [counter, setCounter] = useState([0]);
  return (
    <div className="App">
      <Header />
      <div>
        {counter.length < 3 && (
          <button
            className="add-counter"
            onClick={() => {
              {
                counter.map(() => {
                  const newCounter = [...counter];
                  newCounter.push(0);
                  return setCounter(newCounter);
                });
              }
            }}
          >
            {" "}
            Add counter{" "}
          </button>
        )}

        {counter.map((item, index) => {
          return (
            <div key={index}>
              <Counter
                index={index}
                counter={counter}
                setCounter={setCounter}
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
