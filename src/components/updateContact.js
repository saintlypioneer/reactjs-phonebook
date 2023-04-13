// src/components/AddContact.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../redux/reducer";
import styled from "styled-components";


const UpdateContact = ({contact, closeModal}) => {
    console.log(contact);
    const [name, setName] = useState(contact.name);
  const [avatar, setAvatar] = useState(contact.avatar);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const [address, setAddress] = useState(contact.address);
  const [label, setLabel] = useState(contact.label);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    const updatedContact = {
      ...contact,
      name,
      avatar,
      phoneNumber,
      address,
      label,
    };

    dispatch(editContact(updatedContact));
    closeModal();
    };

    return (
        <Container>
                <div className="add-contact">
                <h2>Update Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Avatar URL"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <select
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        required
                    >
                        <option value="">Select Label</option>
                        <option value="Work">Work</option>
                        <option value="School">School</option>
                        <option value="Friends">Friends</option>
                        <option value="Family">Family</option>
                    </select>
                    <button type="submit">Add</button>
                </form>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 8px;

    &>.add-contact{
        width: 100%;

        h2{
            font-size: 1.2rem;
            font-weight:600;
        }

        form{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;

            input, select{
                padding: 5px 10px;
            }

            button{
                padding: 5px 10px;
                background-color: black;
                color: white;
                transition: 0.2s all;
                border: none;

                &:hover{
                    background-color: white;
                    color: black;
                }
            }
        }
    }
`;

export default UpdateContact;
