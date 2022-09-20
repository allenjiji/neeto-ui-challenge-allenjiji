import React, { useState } from "react";

import { Button, Table } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS_TABLE_COLUMNS, CONTACTS_TABLE_ROWS } from "./constants";
import NewContactPane from "./Pane/Create";

import SideMenuBar from "../SideMenuBar";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);

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
          columnData={CONTACTS_TABLE_COLUMNS}
          currentPageNumber={1}
          defaultPageSize={2}
          rowData={CONTACTS_TABLE_ROWS}
        />
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
      </Container>
    </>
  );
};

export default Contacts;
