function User(props) {
  let data = props.value;
  return (
    <>
      <div className="bg-[#4602a7] text-white border-4 border-purple-600 w-3xl p-4 m-3 font-bold rounded-2xl">
        <p>
          User's Id : <span>{data.id}</span>
        </p>
        <p>
          Name : <span>{data.name}</span>
        </p>
        <p>
          Email : <span>{data.email}</span>
        </p>
        <p>
          Website : <span>{data.website}</span>
        </p>

        <div className="flex justify-end">
          <button className="bg-pink-600  p-1 px-2.5 border-4 border-pink-500 rounded ">
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
