function Flash(props) {
  //   console.log(props);
  return (
    <>
      <p className="w-4xl p-3 mx-auto mt-2 bg-red-500 border-2 border-black-500 font-bold">
        {props.message}
      </p>
    </>
  );
}

export default Flash;
