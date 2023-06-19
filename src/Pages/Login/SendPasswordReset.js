import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendPasswordReset = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  if (error) {
    return (
      <div className="flex justify-center items-center mt-60">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }
  if (sending) {
    return <Loading></Loading>;
  }
  return (
    <div className="App mt-48">
      {/* For Toast Message */}
      <ToastContainer className="justify-center" />
      <hr />
      <h1 className="mb-4 mt-4 text-3xl font-serif">
        Type Your Email To Reset Your Password!!!
      </h1>
      <hr />
      <input
        type="email"
        value={email}
        className=" border border-black rounded mt-6 p-3"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button
        className="btn btn-outline w-48"
        onClick={async () => {
          const success = await sendPasswordResetEmail(email);
          if (success) {
            toast("Password Reset Email Sent Succesfully");
          }
        }}
      >
        Reset password
      </button>
    </div>
  );
};
export default SendPasswordReset;
