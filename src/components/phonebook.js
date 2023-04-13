import styled from "styled-components";
import Navbar from "./navbar";
import PhonebookTable from "./phonebookTable";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./profile";

function Phonebook(props) {
    const [filterLabel, setFilterLabel] = useState("");

    return (
        <Container>
            <Routes>
                <Route path="/" element={<><Navbar filterLabel={filterLabel} setFilterLabel={setFilterLabel} />
            <PhonebookTable filterLabel={filterLabel} /></>} />
            <Route path="profile" element={<Profile />} />
            </Routes>
        </Container>
    );
}

const Container = styled.div``;

export default Phonebook;