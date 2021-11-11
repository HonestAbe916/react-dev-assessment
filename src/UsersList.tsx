import React from 'react';
import { User } from './compiler/types';

export default function UsersList() {
	const [users, setUsers] = React.useState<Array<User> | null>(null);

  React.useEffect(() => {
    (async function() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const json = await response.json();
        console.log(json);
        setUsers(json);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
  	<div className="usersList">
		 	{users != null && users.map((user:User) => (
        <div className="user" key={user.id}>
          {user.id} | {user.name} | {user.username}
        </div>
      ))}
  	</div>
  );
}