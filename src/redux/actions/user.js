
export function setUser(userId) {
  return function(dispatch, getState) {
    dispatch(({type: 'SET_USER', payload: userId}));
    localStorage.clear('userId');
    localStorage.setItem('userId', userId)
  }
}

export default {
  setUser,
}
