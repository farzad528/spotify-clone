export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDtIoePGn1X1WwrstdXjuhMY_274GnbW3VjuneJcdJEQZ7mIkOERHWrjigD5E7zAHNazgmcK9PgR1aSDzCdJaTSXOocsX2BPRowJ1UTbTR_1Vxno1RfohSTWYVg836sNRNEkFmeRpX7xlEDq_TpZQ26fVpM-kxQ",
  // // REMOVE after finish developing...
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
