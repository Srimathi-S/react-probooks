import React, { Component } from "react";
import axios from "axios";
import BookComponent from './BookComponent';
import './homeComponent.css';
class HomeComponent extends Component {
    constructor()
    {
        super();
        this.state={
            booksList:[],
            likedList:[],
            dislikedList:[],
            readingList:[]
        }
    }
    componentDidMount=()=>{
        const api = "https://reactnd-books-api.udacity.com/books";
        const headers = {
        'Accept': 'application/json',
        'Authorization': 'ikjugfrfyugjhbvjhbsdkjchmn'
        };
        axios.get(api,{headers})
        .then((response)=>{
            console.log(response.data.books);
            this.setState({booksList:response.data.books})
        })
        .catch((error)=>console.log(error));
    }
    addToLikedList(book)
    {
        this.state.likedList.push(book)
        let modifiedList=this.state.likedList;
        this.setState({
            likedList:modifiedList
        });
    }
    addToReadingList(book)
    {
        this.state.readingList.push(book)
        let modifiedList=this.state.readingList;
        this.setState({
            readingList:modifiedList
        })
    }
    addToDislikedList(book)
    {
        this.state.dislikedList.push(book)
        let modifiedList=this.state.dislikedList;
        this.setState({
            dislikedList:modifiedList
        });
    }
    deleteBook(book)
    {
        let bookId=book.id;
        let modifiedList=this.state.booksList.filter((book)=>(book.id!==bookId));
        let modifiedLikedList=this.state.likedList.filter((book)=>(book.id!==bookId));
        let modifiedDislikedList=this.state.dislikedList.filter((book)=>(book.id!==bookId));
        this.setState({
            booksList:modifiedList,
            likedList:modifiedLikedList,
            dislikedList:modifiedDislikedList
        });
    }
    render() {
        return (
            <React.Fragment>
            <h1>ProBooks</h1>
            <h1>Liked Books</h1>
            <div className="books-display">
               {this.state.likedList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            <h1>DisLiked Books</h1>
            <div className="books-display">
               {this.state.dislikedList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            <h1>All books</h1>
            <div className="books-display">
               {this.state.booksList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            </React.Fragment>
        );
    }
}

export default HomeComponent;