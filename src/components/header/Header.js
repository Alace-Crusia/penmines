import React from "react";
import Avtar from "./Avtar";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Stack from "react-bootstrap/Stack";
import Button from "@mui/material/Button";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import "./Header.css";

function Header() {
  // handling search event
  const handletextchange = (e) => {
    let selectedFile = e.target.value;
    console.log(selectedFile);
  };

  return (
    <div className="header">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">Penmines</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handletextchange}
              />
            </Form>
            <Stack direction="horizontal" gap={2}>
              <Button variant="contained" startIcon={<GraphicEqRoundedIcon />}>
                Record
              </Button>
              <Button variant="outlined" startIcon={<BackupRoundedIcon />}>
                Import
              </Button>
              <Avtar />
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
