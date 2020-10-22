import React, { Component } from 'react';

class DinnerSupplies extends Component{
    render() {
        return (
        <>
            <h2>Dinner Supplies</h2>
            <div>
                Spoons: {this.props.count}
            </div>
            <div>
                Forks: {this.props.count}
            </div>
            <div>
                Knives: {this.props.count}
            </div>
        </>
        )
    }
}

export default DinnerSupplies