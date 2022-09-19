import React, { useState } from "react";

import { Container, Header } from "neetoui/layouts";

import SideMenuBar from "../SideMenuBar";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <SideMenuBar showMenu={showMenu} title="Contacts" />
      <Container>
        <Header menuToggleBar={() => setShowMenu(!showMenu)} title="Contacts" />
      </Container>
    </>
  );
};

export default Contacts;
