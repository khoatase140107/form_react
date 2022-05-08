import { Component } from "react";  

export default class FormStudent extends Component{
    state = {
        infoStudent:{
            maSV: "",
            hoten: "",
            sdt: "",
            email: "",
            diemToan: "",
            diemLy: "",
            diemHoa: ""
        }
    }
    onChangeHandler = e => {
        const{name,value} = e.target;
        this.setState({
            infoStudent: {
                ...this.state.infoStudent,
                [name] : value,
            }
        })
    }
    submitHandler = e => {
        e.preventDefault();
        this.props.addStudentInList(this.state.infoStudent)
        //e.target.reset();
        this.setState({
            infoStudent:{
                maSV: "",
                hoten: "",
                sdt: "",
                email: "",
                diemToan: "",
                diemLy: "",
                diemHoa: ""
            }
        })
    }
    render(){
        const {maSV,hoten,sdt,email,diemToan,diemLy,diemHoa} = this.state.infoStudent;
        return(
            <div className="FormStudent">
                <form onSubmit={this.submitHandler}>
                    <div className="form">
                    <div className="form_control">
                        <label htmlFor="maSV" >Ma SV</label>
                        <input id="maSV" name="maSV" value={maSV} onChange={this.onChangeHandler} required  />
                    </div>
                    <div className="form_control">
                        <label htmlFor="hoten" >Ho Ten</label>
                        <input id="hoten" name="hoten" value={hoten} onChange={this.onChangeHandler} required />
                    </div>
                    <div className="form_control">
                        <label htmlFor="sdt">Số điện thoại</label> 
                        <input id="sdt" name="sdt" value={sdt} onChange={this.onChangeHandler} required />
                    </div>
                    <div className="form_control">
                        <label htmlFor="email" >Email</label>
                        <input id="email" name="email" value={email} onChange={this.onChangeHandler} required />
                    </div>
                    <div className="form_control">
                        <label htmlFor="diemToan" >Điểm toán</label>
                        <input id="diemToan" name="diemToan" value={diemToan} onChange={this.onChangeHandler} required />
                    </div>
                    <div className="form_control">
                        <label htmlFor="diemLy" >Điểm lý</label>
                        <input id="diemLy" name="diemLy" value={diemLy} onChange={this.onChangeHandler} required />
                    </div>
                    <div className="form_control">
                        <label htmlFor="diemHoa" >Điểm hóa</label>
                        <input id="diemHoa" name="diemHoa" value={diemHoa} onChange={this.onChangeHandler} required />
                    </div>
                    </div>
                    

                    <button type="submit">Thêm sinh viên</button>
                </form>
            </div>
        )
    }
}