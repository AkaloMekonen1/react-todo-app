import React from 'react'
import Insert from './Insert'
class Options extends React.Component{
    render(){
      return(
        <div>
           {this.props.options.map((insert)=>
             <Insert key={insert} InsertValue = {insert}/>)
            }
            <button onClick = {this.props.deleteItem}>Remove All</button>
          </div>
      )
    }
  }
  export default Options