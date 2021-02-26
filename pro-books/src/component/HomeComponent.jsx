import React, { Component } from "react";
import axios from "axios";
import BookComponent from './BookComponent';
import './homeComponent.css';
class HomeComponent extends Component {
    constructor()
    {
        super();
        this.state={
            booksList:[]
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
    render() {
        return (
            <React.Fragment>
            <h1>ProBooks</h1>
            <div className="books-display">
               {this.state.booksList.map((book)=>{
                  return  <BookComponent book={book} key={book.id}/>})
                }
            </div>
            </React.Fragment>
        );
    }
}

export default HomeComponent;