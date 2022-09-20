import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

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
    value: "ronald-1",
  },
  {
    label: "Jacob Jones",
    value: "jacob-1",
  },
  {
    label: "Ronalds Richards",
    value: "ronald-2",
  },
  {
    label: "Jacob Jones",
    value: "jacob-2",
  },
];
export const TAGS_DROPDOWN_DATA = [
  {
    label: "Getting started",
    value: "getting-started",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "user-flow",
  },
  {
    label: "UX",
    value: "ux",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup
        .string()
        .oneOf(CONTACTS_DROPDOWN_DATA.map(contact => contact.label)),
      value: yup
        .string()
        .oneOf(CONTACTS_DROPDOWN_DATA.map(contact => contact.value)),
    })
    .nullable()
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS_DROPDOWN_DATA.map(tag => tag.label)),
        value: yup.string().oneOf(TAGS_DROPDOWN_DATA.map(tag => tag.value)),
      })
    )
    .min(1, "Atleast one tag is required"),
});
