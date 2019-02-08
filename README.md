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
