import { useState } from "react";
import styled from "styled-components";


function FilterModal({ filterLabel, setFilterLabel, close }) {

    const [label, setLabel] = useState("");


    return (
        <Container>
            <h3>Filter by "Labels"</h3>
            <select
                value={filterLabel}
                onChange={(e) => {setFilterLabel(e.target.value); close();}}
                required
            >
                <option value="">Select Label</option>
                <option value="Work">Work</option>
                <option value="School">School</option>
                <option value="Friends">Friends</option>
                <option value="Family">Family</option>
            </select>
            {/* <button type="submit">Filter</button> */}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;

    h3{
        text-align: center;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    select{
        padding: 5px 10px;

        &:focus{
            outline: none;
        }
    }

    button{
        padding: 5px 10px;
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s all;

        &:hover{
            background-color: black;
            color: white;
            border: 1px solid transparent;
        }
    }
`;

export default FilterModal;