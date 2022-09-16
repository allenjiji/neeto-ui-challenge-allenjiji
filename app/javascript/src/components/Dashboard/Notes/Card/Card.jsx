// @ts-nocheck
import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Tag, Tooltip, Avatar, Dropdown } from "neetoui";
import { Header } from "neetoui/layouts";

import { formatDateTime, getRelativeTime } from "./utils";

const dropdown = (
  <Dropdown buttonStyle="text" icon={MenuVertical}>
    <li> Edit </li>
    <li>Delete</li>
  </Dropdown>
);

const Card = ({ note }) => (
  <div className="m-3 w-full  border border-gray-300 bg-white p-3 shadow-sm  dark:border-gray-700 dark:bg-gray-800 ">
    <Header actionBlock={dropdown} title={note.title} />
    <div className="mb-5">{`"${note.description}"`}</div>
    <hr />
    <div className="mt-3 flex justify-between">
      <Tag label="Getting Started" size="small" />
      <div className="flex items-center space-x-2">
        <Clock size={16} />
        <Tooltip
          content={formatDateTime(note.created_at)}
          position="bottom-start"
        >
          <div> {`Created ${getRelativeTime(note.created_at)}`}</div>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            imageUrl: "https://i.pravatar.cc/300",
          }}
        />
      </div>
    </div>
  </div>
);

export default Card;
