import React from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("Update User");
    navigate("/Appoinment");
    console.log(data);
  };

  // User Sign In Error
  let signinError;
  if (gError || error)
    signinError = (
      <small className="text-red-500">
        {/* Optional Chaining */}
        {error?.message || gError?.message || updateError?.message}
      </small>
    );

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (user || gUser) {
    return console.log(user, gUser);
  }
  return (
    <div className="flex lg:mt-4 justify-center items-center">
      <div class="card w-96 shadow-2xl p-8">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Sign Up</h2>

          {/* Form Part */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Part */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              {/* All From UseForm Hooks */}
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <p className="label-text-alt text-red-500">
                    {errors.name.message}
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="label-text-alt text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>
            {/* Name Part */}
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
              value="Sign Up"
            />
          </form>
          <small>
            Already Have An Account?{" "}
            <Link to="/Login" className="text-primary">
              Please Login
            </Link>
          </small>
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

export default SignUp;
