import React, { useState } from "react";

import { Button, Table } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS_TABLE_COLUMNS, CONTACTS_TABLE_ROWS } from "./constants.jsx";

import SideMenuBar from "../SideMenuBar";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);

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
              onClick={() => {}}
            />
          }
        />
        <Table
          columnData={CONTACTS_TABLE_COLUMNS}
          currentPageNumber={1}
          defaultPageSize={2}
          rowData={CONTACTS_TABLE_ROWS}
        />
      </Container>
    </>
  );
};

export default Contacts;
