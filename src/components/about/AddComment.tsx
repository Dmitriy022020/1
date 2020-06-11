import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPost, showAlert} from "../../stores/actions";
import {Alert} from "./Alert";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  submitHandler = (event: React.ChangeEvent) => {
    event.preventDefault();
    const {title} = this.state;
    if (this.props.user) {
      if (title.trim()) {
        const newPost = {
          title,
          id: Date.now().toString(),
          completed: false,
        }
        this.props.createPost(newPost)
        this.setState({title: ''})
        console.log(newPost)
      } else {
        return this.props.showAlert('Введи текст');
      }
    } else {
      return this.props.showAlert('Необходимо авторизоваться')
    }
  };
  changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({title: event.target.value});

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          value={this.state.title}
          onChange={this.changeHandler}/>
        <button className="button" type="submit">Добавить</button>
        {this.props.alert && <Alert text={this.props.alert}/>}
      </form>
    )
  };
}

const mapStateToProps = state => ({
  alert: state.app.alert,
  user: state.users.user,
});
const mapDispatchToProps = {
  createPost,
  showAlert,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComment)