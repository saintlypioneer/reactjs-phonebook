import styled from "styled-components";
import Navbar from "./navbar";
import PhonebookTable from "./phonebookTable";
import { useState } from "react";

function Phonebook(props) {
    const [filterLabel, setFilterLabel] = useState("");

    return (
        <Container>
            <Navbar filterLabel={filterLabel} setFilterLabel={setFilterLabel} />
            <PhonebookTable filterLabel={filterLabel} />
        </Container>
    );
}

const Container = styled.div``;

export default Phonebook;