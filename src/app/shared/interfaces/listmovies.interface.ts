export interface ListMovies {
    average_rating: number;
    backdrop_path:  null;
    comments:       { [key: string]: null | string };
    created_by:     CreatedBy;
    description:    string;
    id:             number;
    iso_3166_1:     string;
    iso_639_1:      string;
    name:           string;
    object_ids:     { [key: string]: null | string };
    page:           number;
    poster_path?:    null;
    public:         boolean;
    results:        ResultMovie[];
    revenue:        number;
    runtime:        number;
    sort_by:        string;
    total_pages:    number;
    total_results:  number;
}

export interface CreatedBy {
    gravatar_hash: string;
    id:            string;
    name:          string;
    username:      string;
}

export interface ResultMovie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    media_type:        MediaType;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    name:              string;
}

export enum MediaType {
    Movie = "movie",
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Ko = "ko",
    Pl = "pl",
}