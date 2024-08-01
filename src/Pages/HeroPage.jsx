import styles from "./HeroPage.module.css";
import { useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa6";
const HeroPage = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <FaCoins size={50}></FaCoins>
        <h1 class={`display-5 fw-bold text-body-emphasis ${styles.heading}`}>
          Expense Tracker
        </h1>

        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Effortlessly Manage Your Finances with Our Expense Tracker App! Say
            goodbye to financial stress and hello to peace of mind as you track
            your spending and achieve your financial dreams. Sign Up now and
            start your journey towards financial freedom!
          </p>

          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 gap-3"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
