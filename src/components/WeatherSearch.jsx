export default function WeatherSearch(props) {
  const { location, setLocation, inputValue, setInputValue } = props;

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setLocation(inputValue);
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <p>location: {inputValue} </p>
    </div>
  );
}
