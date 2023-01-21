import React from "react";
import PropTypes from "prop-types";
import { GrCompliance } from "react-icons/gr";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onContentChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" className="add-new-page__input__title" placeholder="Judul Notes" value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
        <input type="text" className="add-new-page__input__body" placeholder="Isi Notes" value={this.state.body} onChange={this.onContentChangeEventHandler} required />
        <div className="add-new-page__action">
          <button className="action">
            <GrCompliance type="submit" />
          </button>
        </div>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
