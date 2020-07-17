import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
  }
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value,
              this.state.id
            );
          }}
        >
          <p>
            {/* <input type="hidden" name="id" value={this.state.id}></input> */}
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(e) => {
                this.inputFormHandler(e);
              }}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              value={this.state.desc}
              onChange={(e) => {
                this.inputFormHandler(e);
              }}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
