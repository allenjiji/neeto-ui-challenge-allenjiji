import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  CONTACTS_DROPDOWN_DATA,
  TAGS_DROPDOWN_DATA,
} from "../constants";

const NoteForm = ({ onClose, refetch, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Input
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Assigned contacts"
              name="assignedContact"
              options={CONTACTS_DROPDOWN_DATA}
              placeholder="Select a contact"
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={TAGS_DROPDOWN_DATA}
              placeholder="Select the tags"
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

export default NoteForm;
