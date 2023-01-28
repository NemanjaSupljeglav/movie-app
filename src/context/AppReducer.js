export default function appReducer(state, action) {
  switch (action.type) {
    case "GET_MOVIES_REQ":
      return {
        ...state,
        moviesOrSeries: {
          data: state.moviesOrSeries.data,
          loading: true
        }
      };
    case "GET_MOVIES_SCS":
      return {
        ...state,
        moviesOrSeries: {
          data: action.payload.data,
          loading: false
        }
      };
    case "GET_MOVIES_FLR":
      return {
        ...state,
        moviesOrSeries: {
          data: action.payload,
          loading: true
        }
      };

    case "CLEAR_MOVIES":
      return {
        ...state,
        moviesOrSeries: {
          data: [],
          loading: false
        }
      };

    case "GET_ONE_MOVIE":
      return {
        ...state,
        oneMovieOrSerie: action.payload.data
      };

    case "CLEAR_ONE_MOVIE":
      return {
        ...state,
        oneMovieOrSerie: null
      };

    default:
      return state;
  }
}
