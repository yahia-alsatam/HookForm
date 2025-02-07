import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "./formHook.css";

// Use the Zod library to add constraints
const schema = z
  .object({
    name: z
      .string()
      .min(2, { message: "The name is less than two letters long" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "The password is less than 8 characters" }),
    confirmPassword: z.string(),
  })

  //   To validate that the password matches the confirm password using Zod, you can do it like this:
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is not the same as confirm password",
        path: ["confirmPassword"],
      });
    }
  });

//   Start the component
const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  //   Print the data in the console
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <main className="d-flex align-items-center justify-content-center">
        <form
          className="formParent d-flex flex-column justify-content-center align-items-center bor"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="titleForm mt-4 text-white">Sign Up</h1>
          {/*the name */}
          <div className="form-group mb-1">
            <label className="form-label text-white" htmlFor="name">
              name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              {...register("name")}
            />
            {/* Error message for name: */}
            {errors.name && (
              <p className=" text-danger fs-6 mb-0">{errors.name.message}</p>
            )}
          </div>
          {/* email */}
          <div className="form-group mb-1 ">
            <label className="form-label text-white" htmlFor="email">
              email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              {...register("email")}
            />
            {/* Error message for incorrect email: */}
            {errors.email && (
              <p className=" text-danger fs-6  mb-0">{errors.email.message}</p>
            )}
          </div>
          {/* Password */}
          <div className="form-group mb-1">
            <label className="form-label text-white" htmlFor="password">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              {...register("password")}
            />
            {/* Error message for password if it is less than 8 characters: */}
            {errors.password && (
              <p className=" text-danger fs-6  mb-0">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="form-group mb-1 text-white">
            <label className="form-label" htmlFor="confirmPassword">
              confirmPassword
            </label>
            <input
              type="confirmPassword"
              className="form-control"
              id="confirmPassword"
              placeholder="Enter confirmPassword"
              {...register("confirmPassword")}
            />
            {/* Error message for confirm password: */}
            {errors.confirmPassword && (
              <p className="text-danger fs-6  mb-0 ">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary  mb-4 mt-3">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};
// End of the component
export default FormHook;
