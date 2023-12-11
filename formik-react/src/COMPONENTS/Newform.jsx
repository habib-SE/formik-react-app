import React from "react";
import { Form, Formik, Field, ErrorMessage} from "formik";
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
         <ErrorMessage className=" error" name="name" />
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
          <ErrorMessage className=" error" name="email" />
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
         <ErrorMessage className=" error" name="channel" />
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
