import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input, Icon } from "@chakra-ui/react";
import styled from "styled-components";
import { useDisclosure } from "@chakra-ui/react";
import {Modal, ModalOverlay, ModalContent} from "@chakra-ui/react"
import AddContact from "./addContact";

function Navbar(props) {


    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <NavBar>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <AddContact />
                </ModalContent>
            </Modal>

            <Brand>
                <img src="./contacts.png" alt="" />
                <span>Phonebook</span>
            </Brand>
            <Center>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
                    <Input type="text" placeholder='Search' />
                </InputGroup>
            </Center>
            <Right>
                <Icon boxSize="8" viewBox='0 0 24 24' fill='none' color='black' strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </Icon>
                <AddButton onClick={onOpen}>
                    <Icon boxSize="8" viewBox="0 0 36 36">
                        <path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path>
                    </Icon>
                    <span>Create contact</span>
                </AddButton>
            </Right>
        </NavBar>
    );
}


const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Brand = styled.div`
    display: flex;
    align-items: center;

    &>img{
        width: 48px;
        height: 48px;
    }

    &>span{
        font-weight: 600;
        font-size: 1.2rem;
    }
`;

const Center = styled.div`
    width: 90%;
    max-width: 400px;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const AddButton = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &>span{
        font-weight: 600;
    }
`;

export default Navbar;