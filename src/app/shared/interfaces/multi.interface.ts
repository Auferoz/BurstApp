export interface MultiSearch {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult?:            boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    media_type:        MediaType;
    original_language: OriginalLanguage;
    original_title?:   string;
    overview:          string;
    popularity:        number;
    poster_path?:       null | string;
    release_date?:     string;
    title?:            string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    first_air_date?:   string;
    name?:             string;
    origin_country?:   string[];
    original_name?:    string;
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginalLanguage {
    En = "en",
    Ko = "ko",
}
