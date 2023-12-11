import React from "react";
import "./Newform.css";
import { Form, Formik, Field} from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "habib",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const Newform = () => {
  return (
    <Formik 
    initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={onsubmit}>
      <Form className="  bg-gray-200 rounded">
        <div className="form-control">
          <label
            className="block text-sm font-semibold text-gray-600"
            htmlFor="name"
          >
            Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label
            className="block text-sm font-semibold text-gray-600"
            htmlFor="email"
          >
            E-mail
          </label>
          <Field
            type="email"
            id="email"
            name="email"
          
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label
            className="block text-sm font-semibold text-gray-600"
            htmlFor="channel"
          >
            Channel
          </label>
          <Field
            type="text"
            id="channel"
            name="channel"
          
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Newform;
