import styled from "styled-components";
import Navbar from "./navbar";
import PhonebookTable from "./phonebookTable";

function Phonebook(props) {

    return (
        <Container>
            <Navbar />
            <PhonebookTable />
        </Container>
    );
}

const Container = styled.div``;

export default Phonebook;