import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <div className="header">
              <h2 className = "header__title">{this.props.title}</h2> 
               <h3 className = "header_subTitle">{this.props.subTitle}</h3>
            </div>
          )
    }
}
export default Header