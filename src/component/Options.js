import React from 'react'
import Insert from './Insert'
class Options extends React.Component{
  // constructor(){
  //   super();
  //   this.deleteInsert = this.deleteInsert.bind(this)
  //   this.state = {
  //     options: []
  //   }
  // }
  // deleteInsert(insert){
  //   const item = [...this.props.options]
  //   item.splice(item.indexOf(insert),1)
  //   this.setState(()=>{
  //     return{options:item}
  //   })
  //   console.log('hi')
  // }
    render(){
      const newDelete = this.props.deleteInsert
      return(
        <div>
           {this.props.options.map((insert)=>
             <Insert key={insert} insertValue = {insert} 
                      newDelete={newDelete} 
             />)
            }
            <button onClick = {this.props.deleteItem}>Remove All</button>
          </div>
      )
    }
  }
  export default Options