export const FILTER_ACTIONS = {
  COLOR_CHANGED: 'color-changed',
  STATUS_CHANGED: 'status-changed'
}

/*
- color -> toggle existing color
- changeType -> select new color (in this case, existing color will be unselected as well)
*/
export const colorChanged = (color, changeType) => {
  return {
    type: FILTER_ACTIONS.COLOR_CHANGED,
    payload: { color, changeType }
  }
}

export const statusChanged = status => {
  return {
    type: FILTER_ACTIONS.STATUS_CHANGED,
    payload: status
  }
}