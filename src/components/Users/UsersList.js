import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.lastName} ({user.age}) years old, a im from {user.city} de 
          </li>
        ))}
      </ul>
    </Card>
  );
}
