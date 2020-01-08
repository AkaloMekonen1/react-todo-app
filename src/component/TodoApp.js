import React from 'react'
import Form from './Form';
import Header from './Header'
import Options from './Options'

class TodoApp extends React.Component{ 
  constructor(props){
    super(props);
    this.handleFormInsert = this.handleFormInsert.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.state = {
        options: []
    }
}
handleFormInsert(insert){
  if(!insert){
    console.log('jhhsdchj')
  }
 this.setState((prevState)=>{
    return{
      options:prevState.options.concat([insert])
    }
 })
}
deleteItem(){
 this.setState(()=>{
   return{
     options: []
   }
 })
}
  render(){
    const title = 'My List'
    const subTitle = 'Please add item'
      return ( <div className = "form">
                 <Header title={title} subTitle={subTitle}/>
                 <Form handleFormInsert = {this.handleFormInsert}/>
                 <Options options = {this.state.options}
                  deleteItem = {this.deleteItem}/>
               </div>
               )
          }
}

export default TodoApp