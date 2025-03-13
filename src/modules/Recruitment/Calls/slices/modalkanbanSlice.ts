import { createSlice } from "@reduxjs/toolkit";

interface ModalKanbanState {
   activeModalKanban: string | null;
   modalType: string | null; // Nuevo: para saber qué modal abrir
}

const initialState: ModalKanbanState = {
   activeModalKanban: null,
   modalType: null,
};

const modalSlice = createSlice({
   name: "modalKanban",
   initialState,
   reducers: {
      openModalKanban: (state, action) => {
         state.activeModalKanban = action.payload.id;
         state.modalType = action.payload.type; // Guardamos el tipo de modal
      },
      closeModalKanban: (state) => {
         state.activeModalKanban = null;
         state.modalType = null;
      },
   },
});

export const { openModalKanban, closeModalKanban } = modalSlice.actions;
export default modalSlice.reducer;
