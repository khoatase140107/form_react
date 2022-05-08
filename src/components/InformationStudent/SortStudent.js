import { Component } from "react";

export default class SortStudent extends Component {
    state = {
        sortTpye : "sortBy"
    }
    onChangeHandler = e => {
        this.setState({
            sortTpye: e.target.value
        })
        this.props.sortStudent(e.target.value);
    }
  render() {
    return (
      <div className="SortStudent">
        <form>
          <select onChange={this.onChangeHandler} value={this.state.sortTpye}>
            <option value="sortBy" selected>
              Sort By
            </option>
            <option value="increase">GPA tăng dần</option>
            <option value="decrease">GPA giảm dần</option>
            <option value="name">Họ tên</option>
          </select>
        </form>
      </div>
    );
  }
}
