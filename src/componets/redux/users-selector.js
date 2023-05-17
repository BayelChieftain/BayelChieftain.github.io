export const getUsersS = (state) => {
    return state.usersPages.users
};

export const getPageSizeS = (state) => {
    return state.usersPages.pageSize
};

export const getTotalUsersCountS = (state) => {
    return state.usersPages.totalUsersCount
};

export const getCurrentPagesS = (state) => {
    return state.usersPages.currentPages
};

export const getFollowingProgresS = (state) => {
    return state.usersPages.followingProgres
};


