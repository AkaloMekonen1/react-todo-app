import React from 'react'
class Insert extends React.Component{
    render(){
      return(
        <div>
          <p>{this.props.insertValue}
          <button className="button button--link"
           onClick = {this.props.newDelete}>Delete</button>
          </p>
          
        </div>
      )
    }
  }
  export default Insert