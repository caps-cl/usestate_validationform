import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUsers(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("")
  const [enteredCity, setEnteredCity] = useState("")
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredLastName.trim().length === 0 || enteredCity.trim().length === 0 ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age and lastname",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredLastName, enteredAge, enteredCity);
    setEnteredUsername("");
    setEnteredAge("");
    setEnteredLastName("")
    setEnteredCity("")
  };

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function lastNameChangeHandler(event) {
    setEnteredLastName(event.target.value)
  }

  function cityChangeHadler(event) {
    setEnteredCity(event.target.value)
  }

  function closeModa() {
    setError(null);
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModa}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="lastName">Apellido</label>
          <input
            id="lastName"
            type="text"
            onChange={lastNameChangeHandler}
            value={enteredLastName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <label htmlFor="city">City</label>
          <input 
            id="city"
            type="text"
            onChange={cityChangeHadler}
            value={enteredCity}

          />
        
          <Button type="submit">Add users</Button>
        </form>
      </Card>
    </>
  );
}
