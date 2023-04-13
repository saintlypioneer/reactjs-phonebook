import styled from "styled-components";
import { Table, TableContainer, Thead, Tr, Th, Td, Tbody, Icon, IconButton, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { toggleBookmark, deleteContact } from "../redux/reducer";

import { useDisclosure } from "@chakra-ui/react";
import UpdateContact from "./updateContact";
import { useState } from "react";

function PhonebookTable(props) {

    const data = useSelector((state) => state.phonebook.contacts);
    const bookmarked = useSelector((state) => state.phonebook.bookmarks);
    console.log(bookmarked);

    const notBookmarkedContacts = data.filter(
        (contact) => !bookmarked.includes(contact.id)
    );

    const dispatch = useDispatch();

    const handleBookmarkClick = (id) => {
        dispatch(toggleBookmark(id));
    };


    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    //   modal for editing
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [tempContact, setTempContact] = useState({});

    const handleEditModal = (elem)=>{
        setTempContact({
            ...elem
        });
        onOpen();
    }

    return (
        <DataTable>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <UpdateContact contact={tempContact} closeModal={onClose}/>
                </ModalContent>
            </Modal>

            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Phone Number</Th>
                        </Tr>
                    </Thead>


                    {/* BOOKMARJED */}
                    {
                        bookmarked.map((item) => {

                            const elem = data.find(e => e.id == item);
                            if (!elem) return;

                            return (
                                <Tr>
                                    <Td>{elem.name}</Td>
                                    <Td>
                                        <ContactItem>
                                            <span>{elem.phoneNumber}</span>
                                            <span>
                                                <IconButton onClick={() => handleBookmarkClick(elem.id)} icon={<Icon boxSize="6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                                </Icon>} />
                                                <IconButton onClick={()=>handleEditModal(elem)} icon={<Icon boxSize="6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                </Icon>} />
                                                <IconButton onClick={() => handleDelete(elem.id)} icon={<Icon boxSize="6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </Icon>} />
                                            </span>
                                        </ContactItem>
                                    </Td>
                                </Tr>
                            );
                        })
                    }


                    <Tbody>
                        {
                            notBookmarkedContacts.map((elem) => {


                                return (
                                    <Tr>
                                        <Td>{elem.name}</Td>
                                        <Td>
                                            <ContactItem>
                                                <span>{elem.phoneNumber}</span>
                                                <span>
                                                    <IconButton onClick={() => handleBookmarkClick(elem.id)} icon={<Icon boxSize="6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                                    </Icon>} />
                                                    <IconButton onClick={()=>handleEditModal(elem)} icon={<Icon boxSize="6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                    </Icon>} />
                                                    <IconButton onClick={() => handleDelete(elem.id)} icon={<Icon boxSize="6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </Icon>} />
                                                </span>
                                            </ContactItem>
                                        </Td>
                                    </Tr>
                                );
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </DataTable>
    );
}


const DataTable = styled.div`
    margin-top: 20px;
`;

const ContactItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &>span:last-child{
        display: flex;
        gap: 5px;
    }
`;


export default PhonebookTable