import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list : []
    }
  }
addItem(todoValue){
  if(todoValue !== "" ){
    const newItem = {
      id : Date.now(),
      value : todoValue,
      isdone :  false
    };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""

    })
  }
}

deleteItem(id){
const list = [...this.state.list]
const updatelist = list.filter(item => item.id !== id)
this.setState({list : updatelist})
}

updateInput(input){
this.setState({newItem:input});
}


  render() {
    return (
      <div>
        <img src={logo} width = "300"  className = "logo"/> 
        <h1 className = "app-title">MY TODO APP</h1>
        <div className = "container"> Add an Item...<br /></div>
          
          <input
           type="text"
            className = "input-text"
            placeholder= "what for today"
              required
              value = {this.state.newItem}
              onChange = {e => this.updateInput(e.target.value )}
            />
            <button 
            className= "add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled = {!this.state.newItem.length}
            >Add</button>
            
            <div className="list">
              <ul>
              {this.state.list.map(item =>{
                return(
                      <li key = {item.id}>
                        <input type="checkbox"
                          name = "idDone"
                          checked= {item.isdone}
                          onChange= {() => {}}
                          
                        />
                        {item.value}
                        <button className="btn1">
                          onClick={()=> this.deleteItem(item.id)}
                        </button>
                      </li>
                );
              })}
                <li>
                  <input type="checkbox" name="" id=""/>
                  Record youtube videos
                  <button className="btn">Delete</button>
                </li>
              </ul>
            
            
        
        </div>
        </div>
        
    );
    
  }
}
export default App;