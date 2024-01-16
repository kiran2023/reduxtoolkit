import { fetchUsers } from "../../api/fetchUsers";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  removeUser,
  removeAllUsers,
} from "../../store/slices/UserSlice";
import { MdDeleteForever } from "react-icons/md";

export const UserDetails = () => {
  const dispatch = useDispatch();

  const addUserData = (userData) => {
    dispatch(addUser(userData));
  };

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (index) => {
    dispatch(removeUser(index));
  };

  const deleteAllUsers = () => {
    dispatch(removeAllUsers());
  };

  return (
    <>
      <div className="text-center">
        <h1>Users Details</h1>
        <button
          className="btn btn-primary ml-5 mr-5"
          onClick={() => addUserData(fetchUsers())}
        >
          Add
        </button>
        <button className="btn btn-danger" onClick={() => deleteAllUsers()}>
          Delete All
        </button>
      </div>

      <table className="table table-striped table-hover mt-5 d-flex align-items-start justify-content-center vh-100">
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user}</td>
                <button className="btn btn-danger">
                  <MdDeleteForever
                    className="delete-icon"
                    onClick={() => deleteUser(index)}
                  />
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
