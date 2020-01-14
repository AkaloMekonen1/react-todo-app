import React from 'react'
import Insert from './Insert'
class Options extends React.Component{
    render(){
      const newDelete = this.props.deleteInsert
      return(
        <div>
           {this.props.options.map((insert)=>
             <Insert key={insert} insertValue = {insert} newDelete={newDelete} />
             )}
            <button onClick = {this.props.deleteItem}>Remove All</button>
          </div>
      )
    }
  }
  export default Options