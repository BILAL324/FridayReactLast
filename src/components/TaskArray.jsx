function Task1array(props) {
  const { users } = props;

  const user = [
    { id: 1, nname: "bilal  (From same file(TaskArray) data listing )", dep: "BD" },
    { id: 2, nname: "abdullah", dep: "BD" },
    { id: 3, nname: "yousaf", dep: "BD" },
  ];

  return (
    <>
      {user.map((u) => (
        <h1 key={u.id}>{u.nname}</h1>
      ))}

      <ul>
       
        {users.length > 0 ? (
          users.map((use) => (
            <li key={use.id}>
              {use.name} - {use.age} years old
            </li>
          ))
        ) : (
          <li>No users available.</li>
        )}
      </ul>
    </>
  );
}

export default Task1array;
