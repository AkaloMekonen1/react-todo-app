import React from 'react'
class Form extends React.Component{
  constructor(){
    super();
    this.handleFormInsert = this.handleFormInsert.bind(this)
  }
  handleFormInsert(e){
      e.preventDefault()
      const insert = e.target.elements.insert.value
      if(insert){
       this.props.handleFormInsert(insert)     
      }
     }
render(){   
    return( 
        <div className="widget">
        <p>Please add an option</p>
          <form onSubmit = {this.handleFormInsert}>
             <input type = "text" name = "insert"/>
             <button className = "button">Add Option</button>
          </form>
        </div>
    )
}
}
export default Form