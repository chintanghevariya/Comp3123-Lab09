import React from "react";
class Student extends React.Component{

    render(){
        return(
            <h2>
                {this.props.Title}
                {this.props.Desc}
                {this.props.ID}
                {this.props.Name}
                
            </h2>
        )
    }

}

export default Student;