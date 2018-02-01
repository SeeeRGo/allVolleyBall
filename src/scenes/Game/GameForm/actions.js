export const GAME_FORM_UPDATE = 'GAME_FORM_UPDATE';

export const gameFormUpdate = (fieldName, value) => ({
  type: GAME_FORM_UPDATE,
  payload: { [fieldName]: value }
});
