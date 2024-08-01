What is redux store? It is essentially a single place for for your application's state to be stored
and updated in a predictable way which ensures consistency.


How does it work?

File name : redux.js:
                    This file contains the reducer , reducers essentially are responsible to manage the process/
procedure by which a state is updated . In this case add and subtract to update the state.

File name :Actions.js:
                    This specifies the actions that can be performed on our applications state. It tells what
action to be performed ,while reducer specifies how to perform that specific action.

File name : Count.jsx:
                     This is our Counter component . In this we display the value of our state (which is in our 
redux store) . We use useSelector to select our required state and display.

File name : App.jsx :
                    In this file on specific onClick events we dispatch our events to be performed by reducer.


Our store is created in store.js file.


Glimpse : Our buttons dispatch actions on onClick events , which then goes to the store , store searches for
appropriate reducer to perform the action. After which our specific components that are dependent on that
state are re rendered to show updated state. 