import React from 'react'
class Form extends React.Component{
  constructor(){
    super();
    this.handleFormInsert = this.handleFormInsert.bind(this)
    this.state = {
      error:undefined
    }
  }
  handleFormInsert(e){
      e.preventDefault()
      const insert = e.target.elements.insert.value
      const error = this.props.handleFormInsert(insert)
      if(insert){
       this.props.handleFormInsert    
      }
      this.setState(()=>({error}))
      if(!error){
        e.target.elements.insert.value = ''
       }
     }
     
render(){   
    return( 
        <div>
           {this.state.error &&<p className="add-insert-error">{this.state.error}</p>}
          <form onSubmit = {this.handleFormInsert}>
             <input type = "text" name = "insert"/>
             <button className = "button">Add Option</button>
          </form>
        </div>
    )
}
}
export default Form