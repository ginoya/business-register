import { useEffect, useState } from "react";
import { addUser, getAllUsers } from "../service/userService";

const AddUser = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await addUser({ username, password, isActive: true });
      console.log("success", res);
    } catch (e) {
      console.log("error occured", e);
    }
  };

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        console.log("success getAllUsers", res);
      })
      .catch((err) => {
        console.log("getAllUsers error", err);
      });
  }, []);

  return (
    <>
      <h1>Add User</h1>
      username:{" "}
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={username}
      />
      password:{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};
export default AddUser;
