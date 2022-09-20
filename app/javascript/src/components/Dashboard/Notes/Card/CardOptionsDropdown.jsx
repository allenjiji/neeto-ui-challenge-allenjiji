import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const CardOptionsDropdown = ({
  noteId,
  setShowDeleteAlert,
  setSelectedNoteId,
}) => {
  const handleDelete = () => {
    setShowDeleteAlert(true);
    setSelectedNoteId([noteId]);
  };
  return (
    <Dropdown buttonStyle="text" icon={MenuVertical}>
      <li> Edit </li>
      <li onClick={handleDelete}>Delete</li>
    </Dropdown>
  );
};

export default CardOptionsDropdown;
