import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Character} from "../types/types";



const initialState = {
    characters: [] as Character[],
    filteredCharacters: [] as Character[]
};

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        locationsFilter: (state, action: PayloadAction<string>) => {
            const locationTitle = action.payload.trim().toLowerCase();
            if (locationTitle) {
                state.filteredCharacters = state.characters.filter(character =>
                    character.location.name.toLowerCase().includes(locationTitle)
                );
            } else {
                state.filteredCharacters = state.characters;
            }
        },
        setCharacters: (state, action: PayloadAction<Character[]>) => {
            state.characters = action.payload;
            state.filteredCharacters = action.payload;
        },
    },
});

export const { locationsFilter, setCharacters } = charactersSlice.actions;
