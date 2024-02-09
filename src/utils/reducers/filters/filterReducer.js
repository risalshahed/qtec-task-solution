import { FILTER_ACTIONS } from "../../actions/filters/actions";

export const filterReducer = (state, action) => {
  switch (action.type) {
    
    case FILTER_ACTIONS.COLOR_CHANGED:
      // destructure
      const { color, changeType } = action.payload;

      switch (changeType) {
        case 'added':
          return {
            ...state,
            colors: [
              ...state.colors,
              color
            ]
          }
        case 'removed':
          return {
            ...state,
            colors: [
              ...state.colors,
              state.colors.filter(existingColor => existingColor !== color)
            ]
          }
      
        default:
          return state;
      } 
    default:
      return state;
  }
}