import React, { useState } from "react";

import { Button, Table } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { getTableColumns } from "./column";
import { CONTACTS_TABLE_ROWS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";

import SideMenuBar from "../SideMenuBar";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <SideMenuBar showMenu={showMenu} title="Contacts" />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
        />
        <Table
          columnData={getTableColumns(setShowDeleteAlert)}
          currentPageNumber={1}
          defaultPageSize={2}
          rowData={CONTACTS_TABLE_ROWS}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
      </Container>
    </>
  );
};

export default Contacts;
