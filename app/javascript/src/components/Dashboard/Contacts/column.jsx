import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown, Typography } from "neetoui";

const renderNameWithAvatarAndRole = (name, { role, avatarImageUrl }) => (
  <div className="flex flex-row items-center space-x-3">
    <Avatar size="large" user={{ name, imageUrl: avatarImageUrl }} />
    <div>
      <Typography style="h4">{name}</Typography>
      <Typography style="body2">{role}</Typography>
    </div>
  </div>
);

export const getTableColumns = setShowDeleteAlert => [
  {
    title: "Name and Role",
    dataIndex: "name",
    key: "name",
    width: 100,
    render: renderNameWithAvatarAndRole,
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
        <li>Edit</li>
        <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
      </Dropdown>
    ),
  },
];
