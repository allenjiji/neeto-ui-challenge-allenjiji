// @ts-nocheck
import React, { useState, useEffect } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader, Typography } from "neetoui";
import { Container, Header, MenuBar } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import Card from "./Card/Card";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <MenuBar showMenu={showMenu} title="Contacts">
        <MenuBar.Block active count={13} label="All" />
        <MenuBar.Block count={2} label="Users" />
        <MenuBar.Block count={7} label="Leads" />
        <MenuBar.Block count={4} label="Visitors" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
        <MenuBar.AddNew label="Add New Segments" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
        <MenuBar.AddNew label="Add New Tag" />
      </MenuBar>
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          notes.map(note => (
            <Card
              creationTime={new Date("2/8/22")}
              key={note.title}
              tags={"Getting started"}
              title={note.title}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
