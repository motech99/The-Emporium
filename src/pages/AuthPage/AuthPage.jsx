import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <main>
      {showSignUp ? (
        <SignUpForm
          setUser={setUser}
          showSignUp={showSignUp}
          toggleSignUp={toggleSignUp}
        />
      ) : (
        <LoginForm
          setUser={setUser}
          showSignUp={showSignUp}
          toggleSignUp={toggleSignUp}
        />
      )}
    </main>
  );
}
