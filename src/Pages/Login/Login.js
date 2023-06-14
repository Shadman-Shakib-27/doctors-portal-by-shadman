import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl p-8">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>
        </div>
        <div className="divider font-bold">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline w-75 mb-8"
        >
          Continue With Google
        </button>
        <h5>{loading}</h5>
      </div>
    </div>
  );
};

export default Login;
