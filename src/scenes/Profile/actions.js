export const PROFILE_UPDATE = 'PROFILE_UPDATE';

export const updateProfile = (updates) => ({
  type: PROFILE_UPDATE,
  payload: updates
});
