import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getSingleItem } from '../actions';

class SingleItem extends Component {
    componentDidMount() {
        this.props.getSingleItem(this.props.match.params.itemId);
    }
    render() {
        console.log(this.props.item);
        const { item } = this.props;
        return (
            <div>
                <h1 className="center">To Do List</h1>
                <h3>Title: {item.title}</h3>
                <h4>Details: {item.details}</h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.list.single
    };
}

export default connect(mapStateToProps, {
    getSingleItem: getSingleItem
})(SingleItem);