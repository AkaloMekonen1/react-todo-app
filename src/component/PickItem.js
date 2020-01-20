import React from 'react'
class PickItem extends React.Component{
 
    render(){
      return(
        <div>
        <button className="big-button" onClick={this.props.handlePick}>What should I do?</button>
        </div>
      )  
    }
}

export default PickItem