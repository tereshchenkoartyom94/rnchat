const initialState = {
  messages: ['One message', 'Second message', 'One message', 'Second message', 'One message', 'Second message', 'One message', 'Second message', 'One message', 'Second message'],
};

const PUSH_MESSAGE = 'PUSH_MESSAGE';

export const pushMessage = message => ({
  type: PUSH_MESSAGE,
  payload: { message },
});

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PUSH_MESSAGE: {
      const { message } = payload;

      return {
        ...state,
        messages: state.messages.push(message),
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
