import React  from 'react'
import StudentCard  from './studentCard'
import styled from 'styled-components'
import axios from 'axios'

const MainContainer = styled.div`
   display: flex;
   justify-content: center;

  .input{
        margin: 2rem;
        padding: 3px ;
        width:50%;
        text-align: center;
        margin-left: 25% ;
        background: black;
        color: whitesmoke;
        border: 1px solid white ;
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
        cursor: pointer;
        transition:transform 200ms ease-in, color 200ms ease-in;
        &:hover{
            transform: scale(1.02) ;
            background: #750909;
            color: whitesmoke;
        }
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

 
    componentDidMount = () =>{
        axios.get('/getStudentDetails').then(response =>{
            this.setState({
                students:response.data
            })
            console.log(response.data);
        })
    }
        
    render() {

        let filteredStudents = this.state.students.filter(
            (student) =>{
                return student.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        )

        const Students = filteredStudents.map((std) =>
            <StudentCard   student={std}/>
        )

        return (
                <MainContainer>
                    <div>
                        <input type="text" className='input' placeholder="Search By Name" value={this.state.search} onChange={this.updateSearch.bind(this)}  autoFocus/>
                        <div className='flex-container' >
                        {Students}
                        </div>
                    </div>
                </MainContainer>
            )
    }
}

export default studentprofile
