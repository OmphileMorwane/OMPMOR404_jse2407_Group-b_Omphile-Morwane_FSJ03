"use client";
import { useState } from "react";
import { signIn } from "../firebase/auth"; // Import the signIn function

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      // Redirect or show success message here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Log in</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Log in</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignIn;
