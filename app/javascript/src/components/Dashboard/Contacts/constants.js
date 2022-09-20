import * as yup from "yup";

const CONTACTS_TABLE_ROWS = [
  {
    name: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Jun 28, 2022",
    role: "Owner",
    avatarImageUrl: "https://i.pravatar.cc/300",
  },
  {
    name: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Jun 28, 2022",
    role: "Owner",
    avatarImageUrl: "https://i.pravatar.cc/300",
  },
  {
    name: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Jun 28, 2022",
    role: "Owner",
    avatarImageUrl: "https://i.pravatar.cc/300",
  },
];
const CONTACT_FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "Customer",
    value: "customer",
  },
];

const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  role: yup
    .object()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .nullable()
    .required("Role is required"),
});

export {
  ROLES,
  CONTACT_FORM_VALIDATION_SCHEMA,
  CONTACT_FORM_INITIAL_VALUES,
  CONTACTS_TABLE_ROWS,
};
