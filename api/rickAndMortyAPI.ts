import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQueryApi = fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
    credentials: 'include',
})

export const rickAndMortyAPI = createApi({
    baseQuery: baseQueryApi,
    endpoints: () => ({}),
    reducerPath: 'rickAndMortyApi',
    tagTypes: ['characters'],
})

