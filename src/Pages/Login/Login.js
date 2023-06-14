import React from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96  shadow-xl p-8">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>

          {/* Form Part */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Part */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a Valid Email Address",
                })}
              />
              <label className="label">
              {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">{errors.email.message}</span>
                  
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
                  pattern:  /^[A-Za-z]\w{7,14}$/,
                  message: "Password must be 6 digit or more",
                })}
              />
              <label className="label">
                {errors.firstName?.type === "required" && (
                  <span className="label-text-alt">A</span>
                )}
              </label>
            </div>
            {/* Password Part */}
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
