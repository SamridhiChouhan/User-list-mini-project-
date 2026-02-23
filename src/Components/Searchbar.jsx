function SearchBar(props) {
  // console.log();
  return (
    <>
      <form>
        <input
          type="text"
          className="bg-red-500 p-2.5 w-2xl m-4 mt-12 "
          placeholder="Search user"
          onChange={props.onChange}
          value={props.desiredResult}
        />
        <button className="bg-red-500" onClick={props.onClick}>
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
