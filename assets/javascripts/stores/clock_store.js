var Reflux = require('reflux');
import ClockActions from "../actions/clock_actions";

class ClockStore extends Reflux.createStore {

    constructor()
    {
        super();
        this.state = {flag:'WAITING', clocks: []}; // <- set store's default state much like in React
        this.listenables = ClockActions;
    }

    // Load a review when the store is initialized
    onClockAdd(datetime) {
        clocks.push(datetime);
       console.log("adding at ", datetime);
    };

};

module.exports = ClockStore;