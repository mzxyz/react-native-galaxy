import actionTypes from 'src/actionTypes';

const initialState = {
  message: '',
};

const qrReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.qrMessage.changed:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default qrReducer;
