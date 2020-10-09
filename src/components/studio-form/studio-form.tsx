import { Component, State, ComponentInterface, h, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'studio-form',
  styleUrl: 'studio-form.css',
  shadow: true,
})

export class StudioForm implements ComponentInterface {
  /**
   * Indicates loading state
   */
  @Prop() isLoading: boolean;
  selectedReceiverIds = [102, 103];
  @State() userObj: Object = {
    firstName: {
      label: 'First Name',
      type: 'text',
      value: ''
    },
    lastName: {
      label: 'Last Name',
      type: 'text',
      value: ''
    },
    email: {
      label: 'Email',
      type: 'email',
      value: ''
    },
    phoneNumber: {
      label: 'Phone Number',
      type: 'text',
      value: ''
    },
  };
  @Event({
    eventName: 'formSubmitted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) formSubmitted: EventEmitter<any>;

  handleSubmit(e) {
    e.preventDefault();
    this.formSubmitted.emit({
      user: this.userObj
    })
  }

  handleChange(event, key) {
    this.userObj[key] = event.target.value;
  }

  render() {
    if (this.isLoading) {
      return (
        <div class="container">
          <studio-loader />
        </div>
      )
    }
    return (
      <div class="container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {Object.keys(this.userObj).map((field) => (
            <label>
              {this.userObj[field].label}:
              <input type={this.userObj[field].type} value={this.userObj[field].value} onInput={(e) => this.handleChange(e, field)} />
            </label>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}
