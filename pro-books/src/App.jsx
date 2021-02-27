import './App.css';
import React, { Component } from "react";
import HomeComponent from './component/HomeComponent';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import SearchComponent from './component/SearchComponent';
import axios from 'axios';
class App extends Component{
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
      let token;
      if (!token)
          token = localStorage.token = Math.random().toString(36).substr(-8)
      const headers = {
      'Accept': 'application/json',
      'Authorization': token
      };
      axios.get(api,{headers})
      .then((response)=>{
          this.setState({booksList:response.data.books})
      })
      .catch((error)=>console.log(error));
  }
  addToLikedList=(book)=>{
      this.state.likedList.push(book)
      let modifiedList=this.state.likedList;
      this.setState({
          likedList:modifiedList
      });
  }
  addToReadingList=(book)=>{
      this.state.readingList.push(book)
      let modifiedList=this.state.readingList;
      this.setState({
          readingList:modifiedList
      })
  }
  addToDislikedList=(book)=>{
      this.state.dislikedList.push(book)
      let modifiedList=this.state.dislikedList;
      this.setState({
          dislikedList:modifiedList
      });
  }
  deleteBook=(book)=>{
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
  updateBooksList=(booksList)=>{
      this.setState({booksList:booksList})
  }
  render()
  {
      console.log(this.state.booksList);
      return (
        <div className="App">
        <Router>
          <Switch>
                <Route exact path="/"><HomeComponent booksList={this.state.booksList} likedList={this.state.likedList} dislikedList={this.state.dislikedList} readingList={this.state.readingList} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)} updateBooksList={(booksList)=>this.updateBooksList(booksList)}/></Route>
                <Route path="/search"><SearchComponent booksList={this.state.booksList} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/></Route>
          </Switch>
          </Router>
        </div>
      );
  }
}

export default App;
