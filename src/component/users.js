import React from 'react';
import axios from 'axios';

export class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
      }
      componentDidMount(){
        axios.get('http://192.168.1.11:1234/products/5b9fad8fcb477a39fe18fcb6'
      //   {
      //     method: "GET",
      //    headers : {
      //     "Content-Type": "application/json"
      // }
      //   }
      )
        .then(res => {
          const items = res.data;
          this.setState({
            items,
            isLoaded : true,
            //items : json,
          })
        }
        );
      }
      render() {
        var {  isLoaded , items} = this.state;
        if(!isLoaded){
          return <div> Loading....
        </div>;
        }
        else{
          return (
            // <Router>
            //    <div className="App">
            //   <Route path="/" exact strict render={() => {
            //     return (<h1>my name is Neel</h1>)
            //   }}/>
            //   <Route path="/header" exact strict render={() => {
            //     return (<h1>my name is Header</h1>)
            //   }}/>
            //    </div> 
            // </Router>
            <div className="App">
                  {/* data has been loaded */}
    {items.name}
                  
                  {/* <ul>
                     {items.map(item => (
                       <li >
                       <div className="container">{items.name}
                       </div>
    
                       <div className="container">{items._id}
                       </div>
                       </li>
                     )) }
                      <li></li>
                  </ul> */}
            </div>
          );
        }
        
      }
    }