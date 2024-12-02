import { Dispatch } from 'redux';
import {
    DataActionTypes,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    TvData,
    FETCH_TREND_REQUEST,
    FETCH_TREND_SUCCESS,
    FETCH_TREND_FAILURE,
    FETCH_MOV_DATA_REQUEST,
    FETCH_MOV_DATA_SUCCESS,
    FETCH_MOV_DATA_FAILURE,
    FETCH_TREND_MOV_REQUEST,
    FETCH_TREND_MOV_FAILURE,
    FETCH_TREND_MOV_SUCCESS,
    FETCH_MOV_DETAILS_REQUEST,
    MovieDetails,
    FETCH_MOV_DETAILS_SUCCESS,
    FETCH_MOV_DETAILS_FAILURE,
    SEARCH_REQUEST,
    SearchData,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
} from '../types/TvTypes.ts';
import axios from 'axios';
import { BASE_URL, TOKEN } from '../../constants/index.ts';
export const fetchDataRequest = (): DataActionTypes => ({
    type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (data: TvData): DataActionTypes => ({
    type: FETCH_DATA_SUCCESS,
    payload: data

})

export const fetchDataFailure = (error: string): DataActionTypes => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});
//

export const fetchTrendRequest = (): DataActionTypes => ({
    type: FETCH_TREND_REQUEST
});

export const fetchTrendSuccess = (data: TvData): DataActionTypes => ({
    type: FETCH_TREND_SUCCESS,
    payload: data

})

export const fetchTrendFailure = (error: string): DataActionTypes => ({
    type: FETCH_TREND_FAILURE,
    payload: error,
});
//
export const fetchTrendMovRequest = (): DataActionTypes => ({
    type: FETCH_TREND_MOV_REQUEST
});

export const fetchTrendMovSuccess = (data: TvData): DataActionTypes => ({
    type: FETCH_TREND_MOV_SUCCESS,
    payload: data

})

export const fetchTrendMovFailure = (error: string): DataActionTypes => ({
    type: FETCH_TREND_MOV_FAILURE,
    payload: error,
});
//
export const fetchMovRequest = (): DataActionTypes => ({
    type: FETCH_MOV_DATA_REQUEST
});

export const fetchMovSuccess = (data: TvData): DataActionTypes => ({
    type: FETCH_MOV_DATA_SUCCESS,
    payload: data

})

export const fetchMovFailure = (error: string): DataActionTypes => ({
    type: FETCH_MOV_DATA_FAILURE,
    payload: error,
});
//

export const fetchMovDetailsRequest = (): DataActionTypes => ({
    type: FETCH_MOV_DETAILS_REQUEST
});

export const fetchMovDetailsSuccess = (data: MovieDetails): DataActionTypes => ({
    type: FETCH_MOV_DETAILS_SUCCESS,
    payload: data

})

export const fetchMovDetailsFailure = (error: string): DataActionTypes => ({
    type: FETCH_MOV_DETAILS_FAILURE,
    payload: error,
});

//

export const searchRequest = (): DataActionTypes => ({
    type: SEARCH_REQUEST
});

export const searchSuccess = (data: SearchData): DataActionTypes => ({
    type: SEARCH_SUCCESS,
    payload: data

})

export const searchFailure = (error: string): DataActionTypes => ({
    type: SEARCH_FAILURE,
    payload: error,
});

export const fetchTvData = (page: number) => {
    return async (dispatch: Dispatch<DataActionTypes>) => {
        dispatch(fetchDataRequest());
        try {
            const response = await axios.get(`${BASE_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            const data: TvData = await response.data;
            dispatch(fetchDataSuccess(data));
        } catch (error) {
            dispatch(fetchDataFailure(error instanceof Error ? error.message : 'Something went wrong'));
        }
    };
}

export const fetchTrendMovData = (type: string) => {
    return async (dispatch: Dispatch<DataActionTypes>) => {
        dispatch(fetchTrendMovRequest());
        try {
            const response = await axios.get(`${BASE_URL}/trending/movie/${type}?language=en-US`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            const data: TvData = await response.data;
            dispatch(fetchTrendMovSuccess(data));
        } catch (error) {
            dispatch(fetchTrendMovFailure(error instanceof Error ? error.message : 'Something went wrong'));
        }
    };
}

export const fetchTrendData = (type: string) => {
    return async (dispatch: Dispatch<DataActionTypes>) => {
        dispatch(fetchTrendRequest());
        try {
            const response = await axios.get(`${BASE_URL}/trending/tv/${type}?language=en-US`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            const data: TvData = await response.data;
            dispatch(fetchTrendSuccess(data));
        } catch (error) {
            dispatch(fetchTrendFailure(error instanceof Error ? error.message : 'Something went wrong'));
        }
    };
}

export const fetchMovData = (page: number) => {
    return async (dispatch: Dispatch<DataActionTypes>) => {
        dispatch(fetchMovRequest());
        try {
            const response = await axios.get(`${BASE_URL}/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            const data: TvData = await response.data;
            dispatch(fetchMovSuccess(data));
        } catch (error) {
            dispatch(fetchMovFailure(error instanceof Error ? error.message : 'Something went wrong'));
        }
    };
}

export const fetchMovDetails = (id: number) => {
    return async (dispatch: Dispatch<DataActionTypes>) => {
        dispatch(fetchMovDetailsRequest());
        try {
            const response = await axios.get(`${BASE_URL}/movie/${id}?language=en-US`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            const data: MovieDetails = await response.data;
            console.log('moviedetails', data)
            dispatch(fetchMovDetailsSuccess(data));
        } catch (error) {
            dispatch(fetchMovDetailsFailure(error instanceof Error ? error.message : 'Something went wrong'));
        }
    };
}

export const searchData = (query: string) => {
    return async (dispatch: Dispatch<DataActionTypes>) => {
        dispatch(searchRequest());
        try {
            const response = await axios.get(`${BASE_URL}/search/keyword?query=${query}&page=1`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            const data: SearchData = await response.data;
            console.log('search', data)
            dispatch(searchSuccess(data));
        } catch (error) {
            dispatch(searchFailure(error instanceof Error ? error.message : 'Something went wrong'));
        }
    };
}