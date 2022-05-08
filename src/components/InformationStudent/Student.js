import { Component } from "react";

export default class Student extends Component {
  render() {
    const { student,deleteStudentOutList } = this.props;
    const { maSV, hoten, sdt, email,average } = student;
    
    return (
      <tr className="student" key={maSV}>
        <td>{maSV}</td>
        <td>{hoten}</td>
        <td>{sdt}</td>
        <td>{email}</td>
        <td>{average}</td>
        <td><a onClick={() => {
          deleteStudentOutList(maSV)
        }} href="#/">Xóa</a></td>
      </tr>
    );
  }
}
