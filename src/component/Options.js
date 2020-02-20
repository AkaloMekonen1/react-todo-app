import React from 'react'
import Insert from './Insert'
class Options extends React.Component{
  
    render(){
      const newDelete = this.props.deleteInsert
      return(
        <div>
           <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button button--link" onClick = {this.props.deleteItem} disabled = {this.props.options==0}>Remove All</button>
            </div>
          {this.props.options.length===0 && <p className="widget__message">Please add an option</p>}
          {this.props.options.map((insert, index)=>
                                     <Insert key={insert} 
                                             insertValue = {insert} 
                                             count = {index + 1}
                                             newDelete={newDelete} 
                                       />
             )}
          
        </div>
      )
    }
  }
  export default Options