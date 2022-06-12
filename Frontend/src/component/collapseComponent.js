import React, { Component } from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'

const Styledbtn = styled.div`
.btn{
    margin: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    border: 2px solid black;
    color: maroon;
    transition: transform 200ms ease-in, color 200ms ease-in;
    &:hover{
        background: black;
        color: white;
    }
}
`

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
                    <Styledbtn>
                    <Button color="primary" className='btn' onClick={this.toggle} >See Results</Button>
                    {this.state.isOpen && this.props.children}
                    </Styledbtn>
                </div>  
            );
        }
}

export default collapseComponent;