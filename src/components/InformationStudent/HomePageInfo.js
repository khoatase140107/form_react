import { Component } from "react";  
import FormStudent from "./FormStudent";
import StudentList from "./StudentList";
import SortStudent from "./SortStudent";
export default class HomePageInfo extends Component{
    state ={
        students: [],
    }

    addStudentInList = (newStudent) => {
        const average = (parseInt(newStudent.diemLy) + parseInt(newStudent.diemToan) + parseInt(newStudent.diemHoa)) / 3
        newStudent["average"] =average.toFixed(1);

        this.setState({
            students: [...this.state.students,newStudent]
        })

    }
    sortStudent = (typeSort) => {
        const students = this.state.students;
        if( typeSort === "sortBy"){
            students.sort(function(a, b){return a.maSV.localeCompare(b.maSV)})
        }
        else if(typeSort === "increase"){
            students.sort(function(a, b){return a.average-b.average})
        }else if (typeSort === "decrease"){
            students.sort(function(a, b){return b.average - a.average})
           
        }else{
            students.sort(function(a, b){
                if(a.hoten < b.hoten) { return -1; }
                if(a.hoten > b.hoten) { return 1; }
                return 0;
            })
        }
        this.setState({
            students 
        })
    }

    deleteStudentOutList = id => {
        console.log(id)
        const students = this.state.students;
        const findIndex = students.findIndex(student => student.maSV === id)
        //console.log(findIndex)
        students.splice(findIndex,1)
        this.setState({
            students
        })
    }
    render(){
        return(
            
            <div>
                <h1 className="headerHomePage" style={{
                    backgroundColor: "#343A40"
                }}>Thông tin sinh viên</h1>

                <FormStudent addStudentInList={this.addStudentInList} />
                <SortStudent sortStudent={this.sortStudent} />
                <StudentList  deleteStudentOutList={this.deleteStudentOutList} students={this.state.students} />
            </div>
        )
    }
}