import React, { Component } from 'react';
import { Button } from 'reactstrap';

class collapseComponent extends Component {
 constructor(props){
    super(props)
    this.state = {
        isOpen: false
    }
 }

    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return(
                <div>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>More Info</Button>
                    {this.state.isOpen && this.props.children}
                </div>
            );
        }
}

export default collapseComponent;