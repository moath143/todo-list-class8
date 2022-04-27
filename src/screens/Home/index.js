import "./style.css";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { Component } from "react";

class Home extends Component {
  state = {
    value: "",
    items: [
      {
        title: "Yazn",
        id: Math.random() * 1000,
      },
      {
        title: "Yazn",
        id: Math.random() * 1000,
      },
      {
        title: "Moath",
        id: Math.random() * 1000,
      },
      {
        title: "Husam",
        id: Math.random() * 1000,
      },
    ],
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAdd = () => {
    this.setState({
      items: [
        {
          title: this.state.value,
          id: Math.random() * 20000,
        },
        ...this.state.items,
      ],
      value: "",
    });
  };

  handleDelete = (id) => {
    console.log(id);
    console.log("test");
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div className={"inner-container"}>
        <h1>To Do List App</h1>
        <InputBox
          value={this.state.value}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />
        <List handleDelete={this.handleDelete} items={this.state.items} />
      </div>
    );
  }
}

export default Home;
