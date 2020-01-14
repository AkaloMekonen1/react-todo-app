import React from 'react'
import Form from './Form';
import Header from './Header'
import Options from './Options'

class TodoApp extends React.Component{ 
  constructor(props){
    super(props);
    this.handleFormInsert = this.handleFormInsert.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.deleteInsert = this.deleteInsert.bind(this)
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
deleteInsert(insert){
  const items = [...this.state.options]
  items.splice(items.indexOf(insert),1)
  this.setState(()=>{
    return{options:items}
  })
  console.log('hi')
}
  render(){
    const title = 'My List'
    const subTitle = 'Please add item'
      return ( <div className = "form">
                 <Header title={title} subTitle={subTitle}/>
                 <Form handleFormInsert = {this.handleFormInsert}/>
                 <Options options = {this.state.options}
                          deleteItem = {this.deleteItem}
                          deleteInsert = {this.deleteInsert}/>
               </div>
               )
          }
}

export default TodoApp