import React, { useState } from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  // User Sign In Error
  let signinError;
  if (gError || error)
    signinError = (
      <small className="text-red-500">
        {/* Optional Chaining */}
        {error?.message || gError?.message}
      </small>
    );

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex h-auto lg:mt-16 justify-center items-center">
      <div class="card w-96 shadow-2xl p-8">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>

          {/* Form Part */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Part */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              {/* All From UseForm Hooks */}
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a Valid Email Address",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="label-text-alt text-red-500">
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="label-text-alt text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>
            {/* Email Part */}

            {/* Password Part */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password Must Be 6 Digit or More",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="label-text-alt text-red-500">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="label-text-alt text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            {/* Password Part */}
            {signinError}
            <input
              className="btn mt-2 text-white w-full max-w-xs"
              type="submit"
              value="Login"
            />
          </form>
        </div>
        <div className="divider font-bold -mt-2">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline mb-8"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
