import { Component } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { ModalStyled, ButtonCloseStyled } from "./Modal.styled";


const modalRoot = document.querySelector('#modal-root')


export class Modal extends Component {    
    

    render() {

        return createPortal(
            <ModalStyled>
                <div>
                    <ButtonCloseStyled type="button" onClick={() => this.props.closeModal()}>
                        <AiOutlineClose size={20}/>
                    </ButtonCloseStyled>                    
                    {this.props.children}
                </div>                
            </ModalStyled>,
            modalRoot
        );
    }
}