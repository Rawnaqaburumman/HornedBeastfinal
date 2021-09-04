import React from "react";
import Hornedbeast from './hornedbeast'
class Main extends React.Component{



  
    render(){

      return (
        <div>
        {this.props.beasts.map((arrayOfData)=>{

        
         return (
      
              <Hornedbeast title = {arrayOfData.title} 
              description = {arrayOfData.description}
              image_url = {arrayOfData.image_url}
              keyword ={arrayOfData.keyword}
              horns = {arrayOfData.horns}
              displayModel={this.props.displayModel}
            
            
        />
        )
      })}
      
      </div>
          );
      }} 

export default Main;