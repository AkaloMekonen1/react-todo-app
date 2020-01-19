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
    return('Please add item')
  }else
  if(this.state.options.indexOf(insert) > -1){
     return 'This item is already exists'
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
}
  render(){
    const title = 'My List'
    const subTitle = 'Please add item'
      return ( <div>
                 <Header title={title} subTitle={subTitle}/>
                 <div className="container">
                 <Options options = {this.state.options}
                          deleteItem = {this.deleteItem}
                          deleteInsert = {this.deleteInsert}/>
                          <Form handleFormInsert = {this.handleFormInsert}/>
                 </div>
               </div>
               )
          }
}

export default TodoApp