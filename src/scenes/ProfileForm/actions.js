export const PLAYER_FORM_UPDATE = 'PLAYER_FORM_UPDATE';

export const playerFormUpdate = (fieldName, value) => ({
  type: PLAYER_FORM_UPDATE,
  payload: { [fieldName]: value }
});
