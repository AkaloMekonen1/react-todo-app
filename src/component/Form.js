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
        <div className="form">
          <form onSubmit = {this.handleFormInsert}>
             <input type = "text" name = "insert"/>
             <button>Add</button>
          </form>
        </div>
    )
}
}
export default Form