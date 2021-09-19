import { useContext } from "react";
import { UserContext } from "./UserContext";

const User3 = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "RS Shonjoy",
      email: "rsshonjoy@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>User name is {userContext.user?.name} </div>
      <div>User email is {userContext.user?.email} </div>
    </div>
  );
};

export default User3;
