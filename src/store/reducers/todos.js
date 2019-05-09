const INITIAL_STATE = [
  { id: 1, text: "Fazer café" },
  { id: 2, text: "dormir" }
];

// A reducer is always a function
// @state is the previous state
// @action is the action, defined by the type, that change the state

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
