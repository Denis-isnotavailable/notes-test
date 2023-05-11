import axios from "axios";

export const fetchNotes = async () => {    
    const { data } = await axios.get("https://quintadb.com/apps/ddIL3dQ8jjqA56W4VcLL9g/dtypes/entity/cuD3dcNKHdHioBqCoirmoT.json?rest_api_key=bFwMLSW41fFkrJWPXLnwrf&amp;view=");
   
    return data.records;
}

// cOpH80i8ncnioZza3dGSkQ: noteText
// cqdSoLW7PdNO_cPCk9W7ri: topic
// dcUenzWQXhW5WbW43cUrft: isLocked


export const addNote = async (note) => {
    const values = {
        entity_id: "cuD3dcNKHdHioBqCoirmoT",
        cqdSoLW7PdNO_cPCk9W7ri: note.topic || "",
        cOpH80i8ncnioZza3dGSkQ: note.noteText || "",
        dcUenzWQXhW5WbW43cUrft: note.isLocked ? "Yes" : "No"
    }    

    const { data } = await axios.post("https://quintadb.com/apps/ddIL3dQ8jjqA56W4VcLL9g/dtypes.json?rest_api_key=bFwMLSW41fFkrJWPXLnwrf", { values });     
    return data.record;
}


export const deleteNote = async (id) => {
    const { data } = await axios.delete(`https://quintadb.com/apps/ddIL3dQ8jjqA56W4VcLL9g/dtypes/${id}.json?rest_api_key=bFwMLSW41fFkrJWPXLnwrf`);
    
    return data;
}

export const editNote = async (note, id) => {
    const values = {
        entity_id: "cuD3dcNKHdHioBqCoirmoT",
        cqdSoLW7PdNO_cPCk9W7ri: note.topic || "",
        cOpH80i8ncnioZza3dGSkQ: note.noteText || "",
        dcUenzWQXhW5WbW43cUrft: note.isLocked ? "Yes" : "No"
    }   
    
    const { data } = await axios.put(`https://quintadb.com/apps/ddIL3dQ8jjqA56W4VcLL9g/dtypes/${id}.json?rest_api_key=bFwMLSW41fFkrJWPXLnwrf`, { values });   
    return data.record;
}



