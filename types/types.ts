export type Character = {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string; // URL to the character's image
    episode: string[]; // List of episode URLs
    url: string; // Link to the character's own URL endpoint
    created: string; // Time when character was created in the database
};

export type Info = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
};

export type CharactersResponse = {
    info: Info;
    results: Character[];
};
