import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUsersHandler(uName, uLastName, uAge, uCity) {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { 
          id: Math.random.toString(),
          name: uName, 
          lastName: uLastName, 
          age: uAge, 
          city: uCity
        },
      ];
    });
  }

  return (
    <div>
      <AddUsers onAddUser={addUsersHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
