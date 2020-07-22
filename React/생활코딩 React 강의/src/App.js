import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
// import { TOC, Subject, Content } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      subject: { title: "WEB", sub: "World Wide Web" },
      welcome: { title: "Welcome", desc: "Hello React" },
      selected_content_id: 1,
      content: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.content.length) {
      var data = this.state.content[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
    return data;
  }
  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={(_title, _desc) => {
            this.max_content_id = this.max_content_id + 1;
            this.setState({
              content: this.state.content.concat({
                id: this.max_content_id,
                title: _title,
                desc: _desc,
              }),
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }}
        />
      );
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={(_title, _desc, _id) => {
            var _contents = Array.from(this.state.content);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({
              content: _contents,
              mode: "read",
            });
          }}
        />
      );
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({
              mode: "welcome",
            });
          }}
        />
        <TOC
          data={this.state.content}
          onChangePage={(number) => {
            this.setState({
              mode: "read",
              selected_content_id: Number(number),
            });
          }}
        />
        <Control
          onChangeMode={(mode) => {
            if (mode === "delete") {
              if (window.confirm("진짜 삭제 하시겠습니까?")) {
                var _content = Array.from(this.state.content);
                var i = 0;
                while (i < this.state.content.length) {
                  if (_content[i].id === this.state.selected_content_id) {
                    _content.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                var lastIndex = _content.length - 1;
                if (this.max_content_id !== _content[lastIndex].id) {
                  this.setState({
                    content: _content,
                    mode: "welcome",
                    max_content_id: _content[lastIndex].id,
                  });
                } else {
                  this.setState({
                    content: _content,
                    mode: "welcome",
                  });
                }
              }
            } else {
              this.setState({
                mode: mode,
              });
            }
          }}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
