import { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListedUsers } from "../../actions/UserAction";

function ListUsers() {
  const { data, loading, error } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ListedUsers());
  }, [dispatch]);

  return (
    <div className="users_list">
      <h1 className="title">&#123;JSON&#125; Placeholder</h1>
      <h3>Redux - List Users</h3>
      <p className="api_url">
        <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noreferrer">
          https://jsonplaceholder.typicode.com/users
        </a>
      </p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((user, index) => {
              return (
                <tr key={index}>
                  <td data-label="ID">
                    <b>{user.id}</b>
                  </td>
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Username">{user.username}</td>
                  <td data-label="Email">{user.email}</td>
                  <td data-label="Website">{user.website}</td>
                </tr>
              );
            })
          ) : loading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            <tr>
              <td>{error}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default class Users extends Component {
  render() {
    return (
      <div>
        <br />
        <ListUsers />
      </div>
    );
  }
}
