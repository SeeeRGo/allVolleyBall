export const CHANGE_SELECTION = 'CHANGE_SELECTION';

export const changeSelection = (selectionGroup, selectedIndex) => ({
  type: CHANGE_SELECTION,
  payload: {
    [selectionGroup]: selectedIndex
  }
});
