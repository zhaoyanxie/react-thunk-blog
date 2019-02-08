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
