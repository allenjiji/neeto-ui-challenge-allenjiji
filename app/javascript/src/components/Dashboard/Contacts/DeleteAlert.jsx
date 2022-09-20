import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const handleDelete = async () => {
    Toastr.success("Contact deleted successfully");
    onClose();
  };

  return (
    <Alert
      isOpen
      message="Are you sure you want to continue deleting this contact? This cannot be undone."
      title="Delete contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
