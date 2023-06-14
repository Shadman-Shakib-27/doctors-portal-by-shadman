import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl p-8">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>
        </div>
        <div className="divider font-bold">OR</div>
        <button className="btn btn-outline w-75 mb-8">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
