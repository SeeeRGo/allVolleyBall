export const START_LOADING = 'actions/loading/START_LOADING';
export const STOP_LOADING = 'actions/loading/STOP_LOADING';

/**
 * @function startLoading
 * @param {String} loadingName - название спиннера
 * @returns {Action}
 */
export const startLoading = (loadingName) => ({
  type: START_LOADING,
  payload: loadingName
});

/**
 * @function stopLoading
 * @param {String} loadingName - название спиннера
 * @returns {Action}
 */
export const stopLoading = (loadingName) => ({
  type: STOP_LOADING,
  payload: loadingName
});
