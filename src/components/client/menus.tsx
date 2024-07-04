'use client';
import React, { useState } from 'react';
import Link from 'next/link'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, Listbox, ListboxSection, ListboxItem } from '@nextui-org/react';

interface props {
    linkList: {
        name: string;
        link: string;
    }[]
}

const Menus = function ({ linkList }: props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = useState("bottom-center");

    return (
        <div className="flex flex-col gap-2">
            <button onClick={onOpen}>

                <img src="/icons/bars_3.svg" alt="menu" width={28} height={28} />
            </button>

            <Modal
                isOpen={isOpen}
                placement={modalPlacement}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Menu List</ModalHeader>
                            <ModalBody>
                                <Listbox
                                    aria-label="Actions"
                                >
                                    {linkList.map((menu, index) => (
                                        <ListboxItem key={menu.name} onClick={()=>{location.href=menu.link}}>
                                            {menu.name}
                                        </ListboxItem>
                                    ))}
                                </Listbox>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Menus;
