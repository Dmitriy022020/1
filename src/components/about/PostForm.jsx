import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPost, showAlert} from "../../stores/actions";
import {Alert} from "./Alert";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state
        if(!title.trim()) {
            return this.props.showAlert('Введи текст')
        }
        const newPost = {
            title,
            id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({title: ''})
    }
    changeInputHandler = event => this.setState({title: event.target.value})
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.changeInputHandler}/>
                    {this.props.alert && <Alert text={this.props.alert}/>}
                </div>
                <button className="button" type="submit">Добавить</button>
            </form>
        )
    }
}
const mapStateToProps = state => ({
    alert: state.app.alert
})
const mapDispatchToProps = {
    createPost, showAlert
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)