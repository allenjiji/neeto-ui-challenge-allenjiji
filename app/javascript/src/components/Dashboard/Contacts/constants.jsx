import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown, Typography } from "neetoui";
import * as yup from "yup";

const CONTACTS_TABLE_COLUMNS = [
  {
    title: "Name and Role",
    dataIndex: "name",
    key: "name",
    width: 100,
    render: (name, { role, avatarImageUrl }) => (
      <div className="flex flex-row items-center space-x-3">
        <Avatar size="large" user={{ name, imageUrl: avatarImageUrl }} />
        <div>
          <Typography style="h4">{name}</Typography>
          <Typography style="body2">{role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 150,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created_at",
    width: 200,
  },
  {
    title: "",
    dataIndex: "menu",
    key: "menu",
    width: 150,
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
        <li> Edit </li>
        <li> Delete </li>
      </Dropdown>
    ),
  },
];

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
  userRole: null,
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
  userRole: yup
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
  CONTACTS_TABLE_COLUMNS,
  CONTACTS_TABLE_ROWS,
};
