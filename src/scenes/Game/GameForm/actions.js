export const GAME_FORM_UPDATE = 'GAME_FORM_UPDATE';

export const gameFormUpdate = (update) => ({
  type: GAME_FORM_UPDATE,
  ...update
});
