const Counter = ({ counter, setCounter, item, index }) => {
  return (
    <div key={index}>
      <div className="counter">
        <button
          className={counter <= 0 && "hidden"}
          onClick={() => {
            const newTab = [...counter];
            newTab[index] = counter[index] - 1;
            setCounter(newTab);
          }}
        >
          <div> -</div>
        </button>
        <p>{counter[index]}</p>

        <button
          className={counter >= 10 && "hidden"}
          onClick={() => {
            const newTab = [...counter];
            newTab[index] = counter[index] + 1;
            setCounter(newTab);
          }}
        >
          <div>+</div>
        </button>
      </div>
      <div className="reset">
        <button
          onClick={() => {
            const newTab = [...counter];
            newTab[index] = 0;
            setCounter(newTab);
          }}
        >
          {" "}
          reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
