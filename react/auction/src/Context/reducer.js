export const initialState = {
    login: false,
    name: "",
    userid: "",
    email: "",
    password: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "AUTHORIZE":
            return {
                ...state,
                login: true,
                password: action.item.password,
                name: action.item.name,
                email: action.item.email,
                address: action.item.address,
                userid: action.item.userid,
            };
        case "LOGOUT":
            return {
                ...state,
                name: "",
                password: "",
                email: null,
                login: false,
                userid: "",
            };
        default:
          return state;
    }
};

export default reducer;