import SEND_ERROR from 'context/constants';

const inputReducer = (state: any, action: any) => {
  const { errorMessage, checkboxValue } = action.payload;
  switch (action.type) {
    case SEND_ERROR:
      return { ...state, errorMessage, checkboxValue };
    default:
      return state;
  }
};

export default inputReducer;
