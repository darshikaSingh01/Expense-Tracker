import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <button onClick={handleLogout} className="btn btn-success">
      Logout
    </button>
  );
};

export default Logout;
