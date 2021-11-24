export interface ListSeries {
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
    poster_path:    null;
    public:         boolean;
    results:        ResultSerie[];
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

export interface ResultSerie {
    backdrop_path:     string;
    first_air_date:    Date;
    genre_ids:         number[];
    id:                number;
    media_type:        string;
    name:              string;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    vote_average:      number;
    vote_count:        number;
}
