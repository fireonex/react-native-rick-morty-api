import {rickAndMortyAPI} from "./rickAndMortyAPI";
import {CharactersResponse} from "../types/types";

export const charactersApi = rickAndMortyAPI.injectEndpoints({
    endpoints: (builder) => ({
        getCharacters: builder.query<CharactersResponse, void>({
            providesTags: ['characters'],
            query: () => ({
                method: 'GET',
                url: 'character',
            }),
        }),
    }),
});