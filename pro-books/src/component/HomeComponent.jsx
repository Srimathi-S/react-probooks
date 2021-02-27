import BookComponent from "./BookComponent";
import "./homeComponent.css";
import React,{Component} from "react";
import {Link} from "react-router-dom";
class HomeComponent extends Component {
    constructor(props)
    {
        super(props);
        this.addToLikedList=(book)=>this.props.addToLikedList(book);
        this.addToDislikedList=(book)=>this.props.addToDislikedList(book);
        this.addToReadingList=(book)=>this.props.addToReadingList(book);
        this.deleteBook=(book)=>this.props.deleteBook(book);
        this.updateBooksList=(booksList)=>this.props.updateBooksList(booksList);
    }
    render() {
        return (
            <React.Fragment>
            <h1>ProBooks</h1>
            <h1>Liked Books</h1>
            <div className="books-display">
               {this.props.likedList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            <h1>DisLiked Books</h1>
            <div className="books-display">
               {this.props.dislikedList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            <h1>Reading Books</h1>
            <div className="books-display">
               {this.props.readingList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            <h1>All books</h1>
            <div className="books-display">
               {this.props.booksList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            
            <Link to="/search"><button>+</button></Link>
            </React.Fragment>
        );
    }
}

export default HomeComponent;