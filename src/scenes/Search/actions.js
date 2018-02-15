export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';

export const updateSearchFilter = (updateFieldName, updateValue) => ({
  type: UPDATE_SEARCH_FILTER,
  payload: {
    [updateFieldName]: updateValue
  }
});
