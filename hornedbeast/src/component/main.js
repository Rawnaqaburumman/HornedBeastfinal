import React from "react";
import data from '../assests/data';
import Hornedbeast from './hornedbeast'
class Main extends React.Component{
    render(){

      return (
        <div>
        {data.map((arrayOfData)=>{

        
         return (
      
              <Hornedbeast title = {arrayOfData.title} 
              description = {arrayOfData.description}
              image_url = {arrayOfData.image_url}
              keyword ={arrayOfData.keyword}
              horns = {arrayOfData.horns}
          
            
        />
        )
      })}
      
      </div>
          );
      }} 

export default Main;