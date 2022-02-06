import axios from "axios";

export const GET_LIST_USERS = "GET_LIST_USERS";

export const ListedUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_LIST_USERS,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });

    await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_USERS,
          payload: {
            loading: false,
            data: response.data,
            error: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_USERS,
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      });
  };
};
