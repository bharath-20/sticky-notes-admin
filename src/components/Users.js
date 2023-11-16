import React, { useEffect, useState } from 'react';
import User from './UserComponent/User'; 
import { getAllUsers, promoteUser } from '../services/userService'; 
import NavBar from './NavBar';
import Header from './Header';
import "../styles/notes.css"

const Users = () => {
  const [users, setUsers] = useState([]);
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await getAllUsers();
      setUsers(usersData.notes);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handlePromoteClick = async (userId) => {
    const payload = { userId:userId };
    try {
      await promoteUser(payload);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.userId === userId ? { ...user, role: 'ADMIN' } : user
        )
      );
    } catch (error) {
      console.error('Error promoting user:', error);
    }
  };
  console.log("Users: ",users);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <NavBar />
      {Array.isArray(users) &&
        users.map((user) => (
          <User
            key={user.id}
            user={user}
            onPromoteClick={() => handlePromoteClick(user.userId)}
          />
        ))}
    </div>
    </div>
  );
};

export default Users;
