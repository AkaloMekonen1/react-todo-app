import React from 'react'
class Insert extends React.Component{
    render(){
      return(
        <div className="insert">
        <p className="insert__text">{this.props.count}. {this.props.insertValue}</p>
          <button className="button button--link"
           onClick = {this.props.newDelete}>Delete</button>
        </div>
      )
    }
  }
  export default Insert