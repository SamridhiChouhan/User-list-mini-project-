function SearchBar(props) {
  return (
    <>
      <form className="bg-white m-12 flex w-3xl items-center h-max rounded-2xl">
        <div className="game h-20 w-32 scale-[0.8]"></div>
        <input
          type="text"
          className="bg-gray-100 p-2.5 w-2xs m-4 border-2 border-amber-300 rounded ml-60"
          placeholder="Search user"
          onChange={props.onChange}
          value={props.desiredResult}
          name="search"
        />
        <button
          className="bg-[#4602a7] text-white h-max p-2.5 px-4 rounded"
          onClick={props.onClick}
        >
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
