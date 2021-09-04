 import React from 'react';
 import Modal from 'react-bootstrap/Modal'
 import Button from 'react-bootstrap/Button' 
 import Card from 'react-bootstrap/Card'
class SelectedBeast extends React.Component{
     
 render (){
 console.log(this.props);
 return (
     <Modal show={this.props.show} onHide={this.props.handleClose}>
     <Modal.Header closeButton>
      <Modal.Title>{this.props.SelectedBeast.title}</Modal.Title>
     
  </Modal.Header>
     <Card.Img variant="top" src={this.props.SelectedBeast.image_url} alt={this.props.title}  />
     <Modal.Body>{this.props.SelectedBeast.description}</Modal.Body>
   
     <Modal.Footer>
         <Button onClick = {this.props.handleClose} variant="secondary" >
         Close
       </Button> 
       <Button onClick = {this.props.handleClose} variant="primary" >
         Save Changes
       </Button> 
     </Modal.Footer>
   </Modal>

 )

 }


 }
 export default SelectedBeast ;