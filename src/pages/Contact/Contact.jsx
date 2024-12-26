import { useFormik } from "formik";
import React from "react";
import { number, object, string } from "yup";

export default function Contact() {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const validationSchema = object({
    name: string()
      .required("Name is required")
      .min(3, "Name must contain at least 3 characters")
      .max(25, "Name cannot exceed 25 characters"),
    age: number()
      .required("age is required")
      .min(18, "Age must be at least 18"),
    email: string().required("Email is required").email("Email must be valid"),
    password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: string()
      .required("Password confirmation is required")
      .oneOf(
        ["password"],
        "Password and password confirmation must be the same"
      ),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
      rePassword: "",
    },

    validationSchema,
  });
  console.log(formik.errors.email);

  return (
    <div className="pt-12">
      <div className="container">
        <div className="text-slate-700 flex flex-col justify-center items-center">
          <h2 className="uppercase text-[2.25rem] font-bold">
            Contact Component
          </h2>

          <div className="title-styling before:mx-4 after:mx-4 before:bg-slate-700 after:bg-slate-700">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <form className="space-y-5 mt-16 mb-7 p-4">
          <div>
            <input
              type="text"
              placeholder="Your name:"
              className=" form-control"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-sm text-red-600 mt-1">*{formik.errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Your age:"
              className=" form-control"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              onBlur={formik.handleBlur}
            />
            {formik.errors.age && formik.touched.age && (
              <p className="text-sm text-red-600 mt-1">*{formik.errors.age}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email:"
              className=" form-control"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-sm text-red-600 mt-1">
                *{formik.errors.email}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Your password:"
              className=" form-control"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-sm text-red-600 mt-1">
                *{formik.errors.password}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm your password:"
              className=" form-control"
              name="rePassword"
              onChange={formik.handleChange}
              value={formik.values.rePassword}
              onBlur={formik.handleBlur}
            />
            {formik.errors.rePassword && formik.touched.rePassword && (
              <p className="text-sm text-red-600 mt-1">
                *{formik.errors.rePassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600  rounded-lg font-semibold text-white p-3 "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
