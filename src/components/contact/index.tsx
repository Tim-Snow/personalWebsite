import * as React from 'react'

interface Props {}

export default class Contact extends React.Component<Props> {
  public render() {
    return (
      <form>
        Name
        <input type="name" />
        <br />
        Email
        <input type="email" />
        <br />
        Phone
        <input type="phone" />
        <br />
        Message
        <textarea />
        <br />
        <input type="submit" />
      </form>
    )
  }
}
