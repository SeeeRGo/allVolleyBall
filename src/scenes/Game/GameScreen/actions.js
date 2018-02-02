export const GAME_UPDATE = 'GAME_UPDATE';
export const GAME_CREATE = 'GAME_CREATE';

export const updateGame = (gameId, updates) => ({
  type: GAME_UPDATE,
  payload: {
    updates,
    gameId
  }
});
export const createGame = (game) => ({
  type: GAME_CREATE,
  payload: game
});
