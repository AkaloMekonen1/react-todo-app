import React from 'react'
import Form from './Form';
import Header from './Header'
import Options from './Options'
import PickItem from './PickItem';
import OptionModal from './OptionModal'

class TodoApp extends React.Component{ 
  constructor(props){
    super(props);
    this.handleFormInsert = this.handleFormInsert.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.deleteInsert = this.deleteInsert.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.deleteSelectedOption = this.deleteSelectedOption.bind(this)
    this.state = {
        options: [],
        selectedOption: undefined
    }
}
handleFormInsert(insert){
  if(!insert){
    return('Please add item')
  }else
  if(this.state.options.indexOf(insert) > -1){
     return('This item is already exists')
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
deleteInsert(newInsert){
  
  const items = [...this.state.options]
  const index = items.indexOf(newInsert)
 const arr = items.splice(index,1)
  this.setState(()=>({options:items}))
}
deleteSelectedOption(){
  this.setState(()=>({selectedOption:undefined}))
}
handlePick(){
  const number = Math.floor(Math.random() * this.state.options.length)
  const itemPicked = this.state.options[number]
  this.setState(()=>{
    return{selectedOption: itemPicked}
  })
}
  render(){
    const title = 'My List'
    const subTitle = 'Please add item'
      return ( <div>
                 <Header title={title} subTitle={subTitle}/>
                 <div className="container">
                 <PickItem handlePick ={this.handlePick}
                           hasOptions = {this.state.options.length>0}/>
                           <div  className="widget">
                 <Options options = {this.state.options}
                          deleteItem = {this.deleteItem}
                          deleteInsert = {this.deleteInsert}/>
                          <Form handleFormInsert = {this.handleFormInsert}/>
                          </div>     
                 </div>
                 <OptionModal selectedOption={this.state.selectedOption}
                              deleteSelectedOption = {this.deleteSelectedOption} />
               </div>
               )
          }
}

export default TodoApp