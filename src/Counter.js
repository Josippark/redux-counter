import React, { Component } from 'react';
import { INCREMENT, DECREMENT } from './actions/ActionType';
import { connect } from 'react-redux';


class Counter extends Component {

    incrementCounter = ()=>{
        this.props.dispatch({
            type:INCREMENT
        })
    }

    decrementCounter = ()=>{
        this.props.dispatch({
            type:DECREMENT
        })
    }

    render() {
        return (
            <div>
                <label>{this.props.counter}</label>
                <div>
                    <button onClick={this.incrementCounter}>+</button>
                    <button onClick={this.decrementCounter}>-</button>
                </div>

            </div>
        )
    }
};

 const mapStateToProps = (state) =>{
    return {
        counter:state.counter
    }
}

export default connect(mapStateToProps)(Counter);