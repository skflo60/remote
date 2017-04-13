var Reflux = require('reflux');  
import ClockActions from "../actions/clock_actions";

class ClockStore extends Reflux.createStore {  
 // Shorthand for listening to all ContentReviewerActions
 listenables = ClockActions;

 data = {};

 // Load a review when the store is initialized
 init() {
   // ClockActions.loadReview();
 };

};

module.exports = ClockStore; 