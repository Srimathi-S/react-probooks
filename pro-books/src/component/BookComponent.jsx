import React, { Component } from "react";
import "./bookComponent.css";
import Select from "react-select";
class BookComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            options:[{label:"Read" ,value:"Read"},
            {label:"Like" ,value:"Like"},
            {label:"DisLike" ,value:"DisLike"},
            {label:"Delete" ,value:"Delete"}]
        }
    }
    onOptionsChange=(selectedOption)=>{
        let value=selectedOption.value;
        if(value==="Like")this.props.addToLikedList(this.props.book);
        else if(value==="Read")this.props.addToReadingList(this.props.book);
        else if(value==="DisLike")this.props.addToDislikedList(this.props.book);
        else this.props.deleteBook(this.props.book);
    }
    render() {
        return (
            <div className="book">
            <React.Fragment key={this.props.book.id}>
                <img src={this.props.book.imageLinks.smallThumbnail} alt={"image"+this.props.book.title}/>
                <h3>{this.props.book.title}</h3>
                <Select options={this.state.options} onChange={(value)=>this.onOptionsChange(value)}/>
            </React.Fragment>
            </div>
        );
    }
}

export default BookComponent;