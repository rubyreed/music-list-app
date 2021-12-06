import React from "react";
import { Form } from "semantic-ui-react";

class SongForm extends React.Component{
  state = {name: "", artist: ""};

  handleSubmit=(e) => {
    // e.PreventDefault(); don't need this
    this.props.add(this.state);
    this.setState({ name: "", artist: ""});
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Input
          fluid
          label="Name"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <Form.Input
          fluid
          label="Artist"
          placeholder="Artist"
          name="artist"
          value={this.state.artist}
          onChange={this.handleChange}
          />
          <Form.Button type="submit">Submit</Form.Button>
        </Form.Field>
      </Form>
    )
  }
}

export default SongForm;