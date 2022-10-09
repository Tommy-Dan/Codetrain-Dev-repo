export const addUser = (newUser) => {
    return{
        type: "ADD_USER",
        payload: newUser
    };
};

export const revoveUser = (user_id) => {
    return{
        type: "DELETE_USER",
        payload: user_id
    };
};


export const updateUser = (userData) => {
    return{
        type: "USER_UPDATE",
        payload: {userData}
    };
};