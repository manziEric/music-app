import SEND_ERROR from 'context/constants';

const inputReducer = (state: any, action: any) => {
  const { error, checkboxValue } = action.payload;
  switch (action.type) {
    case SEND_ERROR:
      return { ...state, error, checkboxValue };
    default:
      return state;
  }
};

export default inputReducer;
