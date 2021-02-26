import React, { Component } from 'react';
import './bookComponent.css';
class BookComponent extends Component {
    render() {
        return (
            <div className="book">
            <React.Fragment key={this.props.book.id}>
                <img src={this.props.book.imageLinks.smallThumbnail} alt={"image"+this.props.book.title}/>
                <h3>{this.props.book.title}</h3>
            </React.Fragment>
            </div>
        );
    }
}

export default BookComponent;