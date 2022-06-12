import React, { Component } from 'react'
import {Card, CardImg, CardBody,CardTitle, CardSubtitle, Input} from 'reactstrap';
import Collapse from './collapseComponent'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 150%;
    border: 0.5px solid black;
    display:flex;
    justify-content: center;

    .img{
        height: 15rem;
        width:100% ;
        object-fit: cover;
    }

    .title{
        font-size: 30px;
        font-family: 'Berkshire Swash', cursive;
    }

    .p{
        font-family: 'Open Sans', sans-serif;
    }
`

class studentCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expand: false,
            tags : []  
        }
    }

    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {

        const grades = this.props.student.grades.map(grade =>{
            return grade
        })
        let total = 0
        let average = 0
        grades.forEach(g =>{
            let num = parseFloat(g)
            total += num
            average = total/grades.length
        })
        return (
            <StyledCard>
            <div>
                <Card key={this.props.student.id} className="">
                    <CardImg  className="img" src={this.props.student.pic} alt="Card image cap" />
                    
                        <CardTitle className="title">{this.props.student.firstName}{this.props.student.lastName}</CardTitle>
                        <CardSubtitle className="p">{this.props.student.email}</CardSubtitle>
                        <CardSubtitle className="p">{this.props.student.company}</CardSubtitle>
                        <CardSubtitle className="p">{this.props.student.skill}</CardSubtitle>
                        <CardSubtitle className="p">{this.props.student.city}</CardSubtitle>
                        <CardSubtitle className="p">{average}%</CardSubtitle>
                        <Collapse>
                        <Card>
                            <CardBody>
                                <CardSubtitle>Test 01: {grades[0]}</CardSubtitle>
                                <CardSubtitle>Test 02: {grades[1]}</CardSubtitle>
                                <CardSubtitle>Test 03: {grades[2]}</CardSubtitle>
                                <CardSubtitle>Test 04: {grades[3]}</CardSubtitle>
                                <CardSubtitle>Test 05: {grades[4]}</CardSubtitle>
                                <CardSubtitle>Test 06: {grades[5]}</CardSubtitle>
                                <CardSubtitle>Test 07: {grades[6]}</CardSubtitle>
                                <CardSubtitle>Test 08: {grades[7]}</CardSubtitle>
                                <div>

                                </div>
                                <Input type="text" placeholder="add tags" name="tags" onChange={this.handleInputChange}></Input>

                            </CardBody>
                        </Card>
                        </Collapse>

                </Card>
            </div>
            </StyledCard>
        )
    }
}

export default studentCard
