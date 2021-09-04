import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Hornedbeast extends React.Component{
    constructor(props) {
        super(props);
        this.state = { favaretCounter: 0 }
      
    

     
    }

    increasingCounter = () => {
        this.setState({
            favaretCounter:this.state.favaretCounter+1
        });

        this.props.displayModel(this.props.title)
    }
    render(){

       
        console.log('props: ', this.props);
         
                
            return (

                <div>
                <Card >
                  <Card.Img  variant="top" onClick = {this.increasingCounter}  src={this.props.image_url}alt={this.props.titel}  style={{height: "250px" ,width:"250px"}}/>
                  <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text >
                    {this.props.description}
                    </Card.Text>
                    
                    <Card.Text>
                    {this.state.favaretCounter} ❤️
                    </Card.Text>
                  </Card.Body>
                </Card>
               
        
              </div>






            //     <div>
            //     <h2>{this.props.titel}</h2>
            //     <p>{this.props.description}</p>
            //     <img onClick = {this.increasingCounter}  src={this.props.image_url}alt={this.props.titel} titel={this.props.titel} style={{height: "300px" ,width:"300px"}}/>
            //   <h3> {this.state.favaretCounter} ❤️
            //   </h3>
            //     </div>
               
            )
    }
}

export default Hornedbeast;