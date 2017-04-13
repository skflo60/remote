import Reflux from "reflux";

const ClockActions = Reflux.createActions({  
 // Child actions 'completed' and 'failed' are called by resolution of listenAndPromise
 "clockAdd": { children: ['completed', 'failed'] }
});

// Reflux actions can trigger server calls, which we use to load the content to review
ClockActions.clockAdd.listen( (datetime) => {  
	console.log("adding at ", datetime);
});

export default ClockActions;