
export interface Tv {
    'adult': boolean,
    'backdrop_path': string,
    'genre_ids': number[],
    'id': number,
    'origin_country': string[],
    'original_language': string,
    'original_name': string,
    'overview': string,
    'popularity': number,
    'poster_path': string,
    'first_air_date': string,
    'name': string,
    'title': string,
    'original_title': string,
    'vote_average': number

}
export interface BelongsToCollection {
    'id': number,
    'name': string,
    'poster_path': string,
    'backdrop_path': string
}
export interface Genres {
    'id': number,
    'name': string
}
export interface ProductionCompanies {
    'id': string,
    'logo_path': string,
    'name': string,
    'origin_country': string
}
export interface SpokenLanguages {
    'english_name': string,
    'iso_639_1': string,
    'name': string
}
export interface MovieDetails {
    'adult': boolean,
    'backdrop_path': string,
    'belongs_to_collection': BelongsToCollection,
    'budget': number,
    'genres': Genres[],
    'homepage': string,
    'id': number,
    'imdb_id': string,
    'origin_country': string[],
    'original_language': string,
    'original_title': string,
    'overview': string,
    'popularity': number,
    'poster_path': string,
    'production_companies': ProductionCompanies[],
    'release_date': string,
    'revenue': number,
    'runtime': number,
    "spoken_languages": SpokenLanguages[],
    'status': string,
    'tagline': string,
    'title': string,
    'video': string,
    'vote_average': number,
    'vote_count': number
}
export interface TvData {
    'page': number,
    'results': Tv[],
    'total_pages': number
    'total_results': number
}
export interface Search {
    'id': number,
    'name': string
}
export interface SearchData {
    'page': number,
    'results': Search[],
    'total_pages': number
    'total_results': number
}


export interface TvState {
    loading: boolean;
    data: TvData | null;
    error: string;
    currentPage: number;

    loading_mov: boolean;
    data_mov: TvData | null;
    error_mov: string;
    currentPage_mov: number;

    trendLoading: boolean;
    trend: TvData | null;
    trendError: string;

    trendLoadingMov: boolean;
    trendMov: TvData | null;
    trendErrorMov: string;

    loadingMovDetails: boolean;
    movDetails: MovieDetails | null;
    movDetailsError: string;

    searchLoading: boolean;
    searchDetails: SearchData | null;
    searchError: string;
}

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_TREND_REQUEST = 'FETCH_TREND_REQUEST';
export const FETCH_TREND_SUCCESS = 'FETCH_TREND_SUCCESS';
export const FETCH_TREND_FAILURE = 'FETCH_TREND_FAILURE';

export const FETCH_MOV_DATA_REQUEST = 'FETCH_MOV_DATA_REQUEST';
export const FETCH_MOV_DATA_SUCCESS = 'FETCH_MOV_DATA_SUCCESS';
export const FETCH_MOV_DATA_FAILURE = 'FETCH_MOV_DATA_FAILURE';

export const FETCH_TREND_MOV_REQUEST = 'FETCH_TREND_MOV_REQUEST';
export const FETCH_TREND_MOV_SUCCESS = 'FETCH_TREND_MOV_SUCCESS';
export const FETCH_TREND_MOV_FAILURE = 'FETCH_TREND_MOV_FAILURE';

export const FETCH_MOV_DETAILS_REQUEST = 'FETCH_MOV_DETAILS_REQUEST';
export const FETCH_MOV_DETAILS_SUCCESS = 'FETCH_MOV_DETAILS_SUCCESS';
export const FETCH_MOV_DETAILS_FAILURE = 'FETCH_MOV_DETAILS_FAILURE';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';






interface FetchDataRequestAction {
    type: typeof FETCH_DATA_REQUEST;

}

interface FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS;
    payload: TvData;
}

interface FetchDataFailureAction {
    type: typeof FETCH_DATA_FAILURE;
    payload: string;
}
//

interface FetchMovDataRequestAction {
    type: typeof FETCH_MOV_DATA_REQUEST;

}

interface FetchMovDataSuccessAction {
    type: typeof FETCH_MOV_DATA_SUCCESS;
    payload: TvData;
}

interface FetchMovDataFailureAction {
    type: typeof FETCH_MOV_DATA_FAILURE;
    payload: string;
}
//

interface FetchTrendRequestAction {
    type: typeof FETCH_TREND_REQUEST;

}

interface FetchTrendSuccessAction {
    type: typeof FETCH_TREND_SUCCESS;
    payload: TvData;
}

interface FetchTrendFailureAction {
    type: typeof FETCH_TREND_FAILURE;
    payload: string;
}
///

interface FetchTrendMovRequestAction {
    type: typeof FETCH_TREND_MOV_REQUEST;

}

interface FetchTrendMovSuccessAction {
    type: typeof FETCH_TREND_MOV_SUCCESS;
    payload: TvData;
}

interface FetchTrendMovFailureAction {
    type: typeof FETCH_TREND_MOV_FAILURE;
    payload: string;
}
///
interface FetchMovDetailsRequestAction {
    type: typeof FETCH_MOV_DETAILS_REQUEST;

}

interface FetchMovDetailsSuccessAction {
    type: typeof FETCH_MOV_DETAILS_SUCCESS;
    payload: MovieDetails;
}

interface FetchMovDetailsFailureAction {
    type: typeof FETCH_MOV_DETAILS_FAILURE;
    payload: string;
}
///
interface SearchRequestAction {
    type: typeof SEARCH_REQUEST;

}

interface SearchSuccessAction {
    type: typeof SEARCH_SUCCESS;
    payload: SearchData;
}

interface SearchFailureAction {
    type: typeof SEARCH_FAILURE;
    payload: string;
}


export type DataActionTypes =
    | FetchDataRequestAction
    | FetchDataSuccessAction
    | FetchDataFailureAction
    | FetchTrendRequestAction
    | FetchTrendSuccessAction
    | FetchTrendFailureAction
    | FetchMovDataRequestAction
    | FetchMovDataSuccessAction
    | FetchMovDataFailureAction
    | FetchTrendMovRequestAction
    | FetchTrendMovSuccessAction
    | FetchTrendMovFailureAction
    | FetchMovDetailsRequestAction
    | FetchMovDetailsSuccessAction
    | FetchMovDetailsFailureAction
    | SearchSuccessAction
    | SearchRequestAction
    | SearchFailureAction

