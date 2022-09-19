import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContacts: null,
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContacts: yup
    .object({
      label: yup.string().required(),
      value: yup.number().required(),
    })
    .nullable()
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup.object({
        label: yup.string().required(),
        value: yup.number().required(),
      })
    )
    .min(1, "Tags are required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const CONTACTS_DROPDOWN_DATA = [
  {
    label: "Ronalds Richards",
    value: 1,
  },
  {
    label: "Jacob Jones",
    value: 2,
  },
  {
    label: "Ronalds Richards",
    value: 3,
  },
  {
    label: "Jacob Jones",
    value: 4,
  },
];
export const TAGS_DROPDOWN_DATA = [
  {
    label: "Getting started",
    value: 1,
  },
  {
    label: "Onboarding",
    value: 2,
  },
  {
    label: "User Flow",
    value: 3,
  },
  {
    label: "UX",
    value: 4,
  },
];
