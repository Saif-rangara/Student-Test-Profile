import React from 'react'
import StudentCard  from './studentCard'
import styled from 'styled-components'

const MainContainer = styled.div`
   display: flex;
   justify-content: center;

  .input{
        margin-bottom: 5px;
        width:100%;
        text-align: center;
    }

  .flex-container{
        display: flex;
        flex-wrap: wrap;
    }

  .flex-container > div {
        width: 100px;
        padding: 2px 100px 2px 100px;
        margin: 10px;
        margin-left: 50px;
        text-align: center;
    }

`

class studentprofile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           students : [],
           search: ''
        }
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0,20)
        })
    }

 
    componentDidMount(){
        fetch('https://www.hatchways.io/api/assessment/students')
        .then(response => response.json())
        .then(data => {
            Object.values(data).map(student =>(
                this.setState({
                    students: student
                })
            ))
        })
    }
        
    render() {

        let filteredStudents = this.state.students.filter(
            (student) =>{
                return student.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                //student.lastName.indexOf(this.state.search)
            }
        )

        const Students = filteredStudents.map((std) =>
            <StudentCard   student={std}/>
        )

        return (
                <MainContainer>
                    <div>
                        <input type="text" className='input' placeholder="Search By Name" value={this.state.search} onChange={this.updateSearch.bind(this)}  width="100%"/>
                        <div className='flex-container' >
                        {Students}
                        </div>
                    </div>
                </MainContainer>
            )
    }
}

export default studentprofile
