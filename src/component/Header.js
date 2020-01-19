import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <div className="header">
            <div className="container">
              <h2 className = "header__title">{this.props.title}</h2> 
               <h3 className = "header__subTitle">{this.props.subTitle}</h3>
            </div>
            </div>
          )
    }
}
export default Header