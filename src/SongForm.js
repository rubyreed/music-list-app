import React from "react";
import { Form, Button, Message } from "semantic-ui-react";

class SongForm extends React.Component{
  state = {name: "", artist: "", submitted: false};

  handleSubmit=(e) => {
    // e.PreventDefault(); don't need this
    this.props.add(this.state);
    this.setState({ name: "", artist: "", submitted: true});
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    return(
      <Form success onSubmit={this.handleSubmit}>
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
          {this.state.submitted &&<Message
          success
          header='Success!'
          content='New Song Added'
          />}
          <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default SongForm;