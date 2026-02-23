import User from "./User";

function UserList(props) {
  let users = props.usersData;
  return (
    <>
      <div className="mx-auto flex flex-col justify-center px-20">
        {users.map((user, id) => {
          return <User value={user} key={id} />;
        })}
      </div>
    </>
  );
}

export default UserList;
