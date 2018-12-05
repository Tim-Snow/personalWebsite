import * as React from 'react'

interface Props {}

export default class About extends React.Component<Props> {
  public render() {
    return (
      <div>
        <h2>Full Stack Software Developer at Santander UK Technology.</h2>
        <h2>BSc (Hons) Computer Science (Games) - 2:1</h2>

        <p>
          I am an IT-minded individual who thrives on challenges and learning,
          as well as passing on skills to others, I enjoy working with and
          interact well with people, am keen and enthusiastic, and take pride in
          all my work.
        </p>

        <p>
          The most used language day-to-day for me is Java, however I have
          discovered Kotlin recently and have enjoyed using it when possible as
          a replacement. In my free time I am usually playing with new
          technologies or creating little games for fun.
        </p>

        <p>
          Other languages, libraries, frameworks, and technologies I have
          experience with:
        </p>
        <ul>
          <li>Spring Boot & Cloud config</li>
          <li>Android (mainly Talkback accessibility)</li>
          <li>Angular 5</li>
          <li>ReactJS</li>
          <li>Javascript, Typescript, Node</li>
          <li>Linux, Mac, Windows</li>
          <li>TDD, BDD</li>
          <li>Continuous Integration</li>
          <li>Git</li>
          <li>Bash</li>
          <li>APIs (creation and consumption)</li>
          <li>Big Data - Hadoop, HiveQL, Impala, UDFs</li>
          <li>Scrum, Agile, Waterfall</li>
          <li>Encryption</li>
          <li>Spanish!</li>
        </ul>
      </div>
    )
  }
}
