import React from 'react'
import Insert from './Insert'
class Options extends React.Component{
    render(){
      const newDelete = this.props.deleteInsert
      return(
        <div>
        <button onClick = {this.props.deleteItem}>Remove All</button>
           {this.props.options.map((insert)=>
             <Insert key={insert} insertValue = {insert} newDelete={newDelete} />
             )}
          </div>
      )
    }
  }
  export default Options