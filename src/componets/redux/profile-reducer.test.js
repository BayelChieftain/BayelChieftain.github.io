import profileReducer, { addPostCreator } from "./profile-reducer";



it('new post should be added', () => {
  // test data
  let action = addPostCreator('test');
  let state = {
    postData: [
        {id: 1, message: 'last h hHello world!'},
        {id: 2, message: "its   my first post"},
      ]
};
// action
  let newState = profileReducer(state, action);
  // expectation
    expect(newState.postData.length).toBe(3);  ;
});

