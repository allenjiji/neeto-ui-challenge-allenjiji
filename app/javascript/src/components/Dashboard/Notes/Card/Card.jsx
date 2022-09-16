import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Tag, Tooltip, Avatar } from "neetoui";
import { Header } from "neetoui/layouts";

import CardOptionsDropdown from "./CardOptionsDropdown";
import { formatDateTime, getRelativeTime } from "./utils";

const Card = ({ note, setShowDeleteAlert, setSelectedNoteId }) => (
  <div className="m-3 w-full  border border-gray-300 bg-white p-3 shadow-sm  dark:border-gray-700 dark:bg-gray-800 ">
    <Header
      title={note.title}
      actionBlock={
        <CardOptionsDropdown
          noteId={note.id}
          setSelectedNoteId={setSelectedNoteId}
          setShowDeleteAlert={setShowDeleteAlert}
        />
      }
    />
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
