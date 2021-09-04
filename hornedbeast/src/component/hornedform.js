import React from 'react';
import Form from 'react-bootstrap/Form';
import data from '../assests/data'

class HornedForm extends React.Component {
    

    getHorn = (element) => {
        let numberOfHorn = parseInt(element.target.value);
        let x = data;
        if (numberOfHorn) {
          let z=(element)=>{
           return element.horns === numberOfHorn;
          }
            x = data.filter(z);
            
        }
        console.log(x);
        this.props.UpdateData(x);
    }

    render() {
        return (
            <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How Many Horns?</Form.Label>
            <Form.Control as="select" onChange={this.getHorn}>
              <option value="">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow</option>
            </Form.Control>
          </Form.Group>
        </Form>
        );
    }
}
export default HornedForm;