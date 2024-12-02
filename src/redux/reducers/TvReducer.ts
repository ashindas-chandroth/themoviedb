import { AnyAction, Reducer } from 'redux';
import { TvData, TvState, DataActionTypes, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_TREND_REQUEST, FETCH_TREND_FAILURE, FETCH_TREND_SUCCESS, FETCH_MOV_DATA_REQUEST, FETCH_MOV_DATA_SUCCESS, FETCH_MOV_DATA_FAILURE, FETCH_TREND_MOV_REQUEST, FETCH_TREND_MOV_SUCCESS, FETCH_TREND_MOV_FAILURE, FETCH_MOV_DETAILS_REQUEST, FETCH_MOV_DETAILS_SUCCESS, SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../types/TvTypes';

const initialState: TvState = {
  loading: false,
  data: null,
  error: '',
  currentPage: 1,

  loading_mov: false,
  data_mov: null,
  error_mov: '',
  currentPage_mov: 1,

  trendLoading: false,
  trend: null,
  trendError: '',

  trendLoadingMov: false,
  trendMov: null,
  trendErrorMov: '',

  loadingMovDetails: false,
  movDetails: null,
  movDetailsError: '',

  searchLoading: false,
  searchDetails: null,
  searchError: ''
};
const tvReducer = (state: TvState = initialState, action: DataActionTypes): TvState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data
          ? {
            ...action.payload,
            results: [...state.data.results, ...action.payload.results]
          }
          : action.payload,
        error: '',
        currentPage: action.payload.page
      };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    ///
    case FETCH_TREND_REQUEST:
      return { ...state, trendLoading: true };
    case FETCH_TREND_SUCCESS:
      return {
        ...state,
        trendLoading: false,
        trend: state.trend
          ? {
            ...action.payload,
            results: [...state.trend.results, ...action.payload.results]
          }
          : action.payload,
        trendError: '',
      };
    case FETCH_TREND_FAILURE:
      return { ...state, trendLoading: false, trendError: action.payload };
    ///
    case FETCH_TREND_MOV_REQUEST:
      return { ...state, trendLoadingMov: true };
    case FETCH_TREND_MOV_SUCCESS:
      return {
        ...state,
        trendLoadingMov: false,
        trendMov: state.trendMov
          ? {
            ...action.payload,
            results: [...state.trendMov.results, ...action.payload.results]
          }
          : action.payload,
        trendErrorMov: '',
      };
    case FETCH_TREND_MOV_FAILURE:
      return { ...state, trendLoadingMov: false, trendErrorMov: action.payload };
    ///
    case FETCH_MOV_DATA_REQUEST:
      return { ...state, loading_mov: true };
    case FETCH_MOV_DATA_SUCCESS:
      return {
        ...state,
        loading_mov: false,
        data_mov: state.data_mov
          ? {
            ...action.payload,
            results: [...state.data_mov.results, ...action.payload.results]
          }
          : action.payload,
        error_mov: '',
        currentPage_mov: action.payload.page
      };
    case FETCH_MOV_DATA_FAILURE:
      return { ...state, loading_mov: false, error_mov: action.payload };
    ///
    case FETCH_MOV_DETAILS_REQUEST:
      return { ...state, loadingMovDetails: true };
    case FETCH_MOV_DETAILS_SUCCESS:
      return {
        ...state,
        loadingMovDetails: false,
        movDetails: action.payload,
        movDetailsError: '',
      };
    case FETCH_MOV_DATA_FAILURE:
      return { ...state, loadingMovDetails: false, movDetailsError: action.payload };
    //
    case SEARCH_REQUEST:
      return { ...state, searchLoading: true };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchDetails: action.payload,
        searchError: '',
      };
    case SEARCH_FAILURE:
      return { ...state, searchLoading: false, searchError: action.payload };


    default:
      return state;
  }
};
///

export default tvReducer;
