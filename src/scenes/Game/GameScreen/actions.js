export const GAME_UPDATE = 'GAME_UPDATE';

export const updateGame = (updates) => ({
  type: GAME_UPDATE,
  payload: updates
});
