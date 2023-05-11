import React, { useEffect, useState } from 'react'
import { Container, ModalFormStyled, ButtonStyled, InputStyled } from './ModalForm.styled'
import { useNoteData } from '../../appContext/context';

export const ModalForm = ({formtype}) => {
    const [topic, setTopic] = useState("");
    const [isLocked, setIsLocked] = useState(false);
    const [noteText, setNoteText] = useState("");

    const { addNewNote, editNoteMethod, currentNoteId, notes } = useNoteData();

    useEffect(() => { 
        if (formtype === "Edit Note") {
            const currentNote = notes.find(({ id }) => id === currentNoteId);
            setTopic(currentNote.values.cqdSoLW7PdNO_cPCk9W7ri);            
            setNoteText(currentNote.values.cOpH80i8ncnioZza3dGSkQ);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubbmit = e => { 
        e.preventDefault(); 

        formtype === "Add Note" && addNewNote({ topic, isLocked, noteText });
        formtype === "Edit Note" && editNoteMethod({ topic, isLocked, noteText }, currentNoteId);

        setTopic("");
        setIsLocked(false);
        setNoteText("");
    };    

    return (        
        <ModalFormStyled onSubmit={handleSubbmit}>                
            <label>
                <p>Topic</p>
                <InputStyled
                    type='text'
                    value={topic}
                    onChange={e => setTopic(e.currentTarget.value)}
                />
            </label>
            <label>                                     
                <input
                    type='checkbox'
                    name='locked'
                    value={isLocked}
                    onChange={e => setIsLocked(e.currentTarget.checked)}
                />
                Make the note Locked?
            </label>
            <label>
                <p>Your note:</p>
                <textarea
                    rows="5"
                    placeholder="Enter your note here..."
                    value={noteText}
                    onChange={e => setNoteText(e.currentTarget.value)}
                ></textarea>
            </label>
            
            <ButtonStyled
                type="submit"
                disabled={!topic}
            >
                {formtype}
            </ButtonStyled>
        </ModalFormStyled>        
    );
}

export const ModalFormAddNote = () => {
    return (
        <Container>
            <h1>Create new note</h1>
            <ModalForm formtype="Add Note" />
        </Container>
    );
}

export const ModalFormDeleteNote = () => {
    const { deleteNoteMethod, closeModal } = useNoteData();

    const handleDeleteButton = () => {
        deleteNoteMethod();
        closeModal();
    }

    return (
        <Container>
            <h1 style={{marginTop: "30px", marginBottom: "30px"}}>You are sure you want to delete note?</h1>
            <ButtonStyled
                type="button"
                onClick={() => handleDeleteButton()}
            >Delete</ButtonStyled>
        </Container>
    );
}

export const ModalFormEditNote = () => {
    return (
        <Container>
            <h1>Edit note</h1>
            <ModalForm formtype="Edit Note" />
        </Container>
    );
};


// cOpH80i8ncnioZza3dGSkQ: noteText
// cqdSoLW7PdNO_cPCk9W7ri: topic
// dcUenzWQXhW5WbW43cUrft: isLocked

