import React, { useState } from "react";
import { useFormik, validateYupSchema, Formik } from "formik";
import * as Yup from "yup";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function ContactUs() {
  const submitForm = async (data) => {
    console.log("data: ", data);
    try {
      const docRef = await addDoc(collection(db, "users"), data);
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Failed to submit the form. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      hearAboutUs: "",
      location: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(20, "Must be 20 characters or less")
      .matches(/^[A-Za-z]+$/, "first name is alphabet"),
      lastName: Yup.string().max(20, "Must be 20 characters or less")
      .matches(/^[A-Za-z]+$/, "first name is alphabet"),
      email: Yup.string().email("Invalid email address"),
      companyName: Yup.string().max(20, "Must be 20 characters or less"),
      hearAboutUs: Yup.string().max(20, "Must be 20 characters or less"),
      location: Yup.string().max(20, "Must be 20 characters or less"),
    }),
    onSubmit: async (values) => {
      console.log('values: ', values);
      let keys = Object.keys(values);
      console.log('keys: ', keys);
      let isValid = keys.filter((item) => {
        return values[item] === "";
      });
      console.log('isValid: ', isValid);
      if (isValid.length <= 0) {
        submitForm(values);
      } else {
        alert("Please fill all the informations");
      }
    },
  });

  return (
    <div className="col-12 col-lg-6 col-sm-12 col-md-12">
      <h2 className="text-primary text-center">Contact Us</h2>
      <div className="container contact-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label text-light">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red" }}>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="col-md-6">
              <label className="form-label text-light">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red" }}>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Company Name</label>
            <input
              type="text"
              className="form-control"
              name="companyName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <div style={{ color: "red" }}>{formik.errors.companyName}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label className="form-label text-light">
              How did you hear about us? *
            </label>
            <select
              className="form-select"
              name="hearAboutUs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.hearAboutUs}
            >
              <option value="">Select an option</option>
              <option value="Internet Search">Internet Search</option>
              <option value="Social Media">Social Media</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.hearAboutUs && formik.errors.hearAboutUs ? (
              <div style={{ color: "red" }}>{formik.errors.hearAboutUs}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? (
              <div style={{ color: "red" }}>{formik.errors.location}</div>
            ) : null}
          </div>
          <div className="text-center">
            <button
              type="xsubmit"
              className="btn btn-skyblue"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
