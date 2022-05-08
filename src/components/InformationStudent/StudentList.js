import { Component } from "react";  
import Student from "./Student";
export default class StudentList extends Component{
    render(){
        const {students , deleteStudentOutList} = this.props;
        return(
            <div className="StudentList">
                <table>
                    <tr>
                        <th>
                            Mã SV
                        </th>
                        <th>
                            Họ Tên
                        </th>
                        <th>
                            Số điện thoại
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Điểm TB
                        </th>
                    </tr>
                    
                        {students.length > 0 ?
                        students.map((item,index) => {
                           return  <Student deleteStudentOutList={deleteStudentOutList} student={item} />
                        }): <tr></tr>}
                    
                </table>
            </div>
        )
    }
}