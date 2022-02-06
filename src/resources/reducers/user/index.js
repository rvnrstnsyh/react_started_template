import { GET_LIST_USERS } from "../../actions/UserAction";

const UserState = {
  data: false,
  loading: false,
  error: false,
};

const user = (state = UserState, action) => {
  switch (action.type) {
    case GET_LIST_USERS:
      return {
        ...state,
        data: action.payload.data,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default user;
