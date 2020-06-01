import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPost} from "../../redux/actions";

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
            return
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
                <h3>Напиши пост</h3>
                <div>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.changeInputHandler}/>
                </div>
                <button className="button" type="submit">Создать</button>
            </form>
        )
    }
}
const mapDispatchToProps = {
    createPost
}
export default connect(null, mapDispatchToProps)(PostForm)