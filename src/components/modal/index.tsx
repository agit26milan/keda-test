"use client"
import {Modal, Button} from 'flowbite-react'
import React from 'react'

type ModalProps = {
    openModal: boolean;
    closeModal: () => void;
    children?: React.ReactNode;
    title?:string;
    footer?:React.ReactNode;
    enableCloseIcon?:boolean
}

const ModalComponent: React.FC<ModalProps> = (props) => {
    const {openModal} = props
    return (
          <Modal show={openModal} onClose={props.closeModal}>
            <div onClick={props.closeModal} className='flex close-icon' >
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
            </div>
        {props?.title ? <Modal.Header>{props.title} </Modal.Header> : null}
        <Modal.Body>
          <div className="space-y-6">
            {props.children}
          </div>
        </Modal.Body>
        {props.footer ? props.footer : <Modal.Footer>
          <Button onClick={props.closeModal}>I accept</Button>
          <Button color="gray" onClick={props.closeModal}>
            Decline
          </Button>
        </Modal.Footer>}
        
      </Modal>
    )

}

export default ModalComponent