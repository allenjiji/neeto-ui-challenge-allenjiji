import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Pane, Button, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  ROLES,
  CONTACT_FORM_VALIDATION_SCHEMA,
  CONTACT_FORM_INITIAL_VALUES,
} from "../constants";

const ContactCreationForm = ({ onClose, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    Toastr.success("Contact added successfully");
    onClose();
  };

  return (
    <Formik
      initialValues={CONTACT_FORM_INITIAL_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className=" space-y-5">
            <div className="flex w-full space-x-2">
              <Input
                required
                className="w-1/2 flex-grow-0"
                label="First name"
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                required
                className="w-1/2 flex-grow-0"
                label="Last name"
                name="lastName"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Role"
              name="userRole"
              options={ROLES}
              placeholder="Select a role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label={isEdit ? "Update" : "Save Changes"}
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactCreationForm;
