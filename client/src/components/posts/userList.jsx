import { useEffect, useState } from 'react';
import axios from 'axios';

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {users.map(user => (
        <div key={user._id} className="bg-white p-4 rounded-md shadow-md">
          <img
            src={user.profileImage || 'default-profile-image.jpg'}  
            alt={user.username}
            className="w-16 h-16 rounded-full mb-2 mx-auto"
          />
          <h3 className="text-lg font-bold mb-2">{user.username}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserListComponent;
