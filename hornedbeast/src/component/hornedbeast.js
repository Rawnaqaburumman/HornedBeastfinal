import React from "react";

class Hornedbeast extends React.Component{

    render(){

       
        console.log('props: ', this.props);
         
                
            return (
                <div>
                <h2>{this.props.titel}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.imageUrl}alt={this.props.titel} titel={this.props.titel} style={{height: "300px" ,width:"300px"}}/>
                </div>
            )
    }
}

export default Hornedbeast;