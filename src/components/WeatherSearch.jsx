export default function WeatherSearch(props) {
  const {
    location,
    setLocation,
    inputValue,
    setInputValue,
    matches,
    setMatches,
    checkDatabase,
  } = props;

  const handleInputChanges = (e) => {
    const value = e.target.value;
    setInputValue(value);
    checkDatabase(value);

    // const filterMatches = checkDatabase(value);
    // setMatches(filterMatches);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        // onChange={(e) => {
        //   setInputValue(e.target.value);
        //   checkDatabase(inputValue);
        // }}

        onChange={handleInputChanges}
      />
      <button
        onClick={() => {
          setLocation(inputValue);
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <p>location: {inputValue} </p>

      <div>
        <p>matches: </p>
        <ul>
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <li key={index}>{match.name}</li> // Assuming match is an object with a 'name' property
            ))
          ) : (
            <li>No matches found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
