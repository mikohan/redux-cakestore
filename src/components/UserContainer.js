import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>User List</h2>
          <div>
            {userData.users.map((user) => (
              <li key={user.id}>{user.name}</li>

              // commments
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStatToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStatToProps, mapDispatchToProps)(UserContainer);
