import React, { Component } from "react";
import './App.css';
import Radios from "./components/radios";
import BasicTabs from "./components/tabs";
import CustomizedTabs from "./components/customize";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false,
        currentTab : 1,
        taskCount: 0
    };
}

// ComponentDidMount is used to
// execute the code 
componentDidMount() {
    fetch(
"https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
        .then(()=> {

          let count = 0
          this.state.items.forEach((item => count += (item.completed === true && item.userId === 10) ) )
          this.setState({taskCount: count})
        })

};



render() {
  const countTask = (items) =>{
    
  }
  const { DataisLoaded, items } = this.state;
  if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div> ;

  return (
  <div className = "App"  style={{
    marginLeft: "20%",
  }}>
    <div
     
    >
      <h2>GU online test</h2>
      <Radios parent = {this}/>
      <BasicTabs/>
      {/* <CustomizedTabs/> */}
    </div>
      <h1> Fetch data from an api in react </h1>  {
          items.map((item) => { 
           if (item.completed === true) return (

             <ol key = { item.id } >
             user_ID: { item.userId }, 
             id: { item.name }, 
             title: { item.title }, 
             
             </ol>
           )
          })
        }
        <h1> {this.state.taskCount}</h1>
  </div>
);
  
}
}
export default App;
