export const GYM_FORM_UPDATE = 'GYM_FORM_UPDATE';

export const gymFormUpdate = (fieldName, value) => ({
  type: GYM_FORM_UPDATE,
  payload: {
    [fieldName]: value
  }
});
