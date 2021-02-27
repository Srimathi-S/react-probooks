import React, { Component } from "react";
import BookComponent from "./BookComponent";
class SearchComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            booksList:[],
            displayList:[]
        }
        this.addToLikedList=(book)=>this.props.addToLikedList(book);
        this.addToDislikedList=(book)=>this.props.addToDislikedList(book);
        this.addToReadingList=(book)=>this.props.addToReadingList(book);
        this.deleteBook=(book)=>this.props.deleteBook(book);
    }
    componentDidMount=()=>{
        this.setState({
            booksList:this.props.booksList,
            displayList:this.props.booksList
        })
    }
    searchTextOnChange=(event)=>{
        let searchText=event.target.value;
        let modifedDisplayList=this.state.booksList.filter((book)=>(book.title.toUpperCase().includes(searchText.toUpperCase())));
        this.setState({
            displayList:modifedDisplayList
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Search</h1>
                <input type="text" placeholder="Enter title to search" onChange={this.searchTextOnChange.bind(this)}/>
                <div className="books-display">
                {this.state.displayList.map((book)=>{
                    return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default SearchComponent;