import React from 'react'
class Insert extends React.Component{
    render(){
      return(
        <div className="insert">
         {this.props.insertValue}
          <button className="button button--link"
           onClick = {this.props.newDelete}>Delete</button>
        </div>
      )
    }
  }
  export default Insert