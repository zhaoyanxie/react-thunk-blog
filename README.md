# Redux Cycle

1. Action Creator gets called so as to change the state of the app.
2. Action is produced by the Action Creator.
3. Action is fed to the dispatch function.
4. Reducers receive the action from the dispatch function.
5. A new state is called by the Reducers.

# Async Actions with Redux Thunk

## Fetching Data in a Redux App

1. Component gets rendered onto the screen
2. componentDidMount called
3. Call action creator from componentDidMount
4. Action creator runs code to make API request using redux thunk
5. API responds with data
6. Action creator returns an action with the fetch data on the payload property
7. Specific reducer sees the action, returns the data off the payload
8. React app renders as a new state object is generated. The fetched data is sent to the component by first generating a new state in the redux store and then to component using mapStateToProps.

## Middleware (In the world of Redux)

A function in between dispatch and the Reducers, receives the actions from the dispatch function and change the behavior before sending the modified actions to the Reducers.

- A function that gets called with every action we dispatch.
- Able to stop or modify with actions.
- Most popular use of middleware is for dealing with async actions.
- Redux-Thunk is a middleware to solve async issues.

### Redux-Thunk

| Normal Redux Rules                         | Rules with Redux Thunk                                                            |
| ------------------------------------------ | --------------------------------------------------------------------------------- |
| Action Creators must return action objects | Action Creators can return action objects OR Action Creators can return functions |
| Actions must have a type property          | If an action object gets returned, it must have a type                            |
| Actions can optionally have a payload      | If an action object gets returned, it can optionally have a payload               |
