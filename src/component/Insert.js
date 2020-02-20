import React from 'react'
class Insert extends React.Component{
 
    render(){
      const newInsert = this.props.insertValue
      return(
        <div className="insert">
          <p className="insert__text">{this.props.count}. {this.props.insertValue}</p>
          <button className="button button--link"
           onClick = {()=>{this.props.newDelete(newInsert)}}>Delete</button>
        </div>
      )
    }
  }
  export default Insert