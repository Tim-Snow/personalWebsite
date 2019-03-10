import React from 'react'

function AboutMe() {
  return (
    <div style={styles.container}>
      <h1>About me</h1>
      <h4>
        I am an IT-minded individual who thrives on challenges and learning, as
        well as passing on skills to others, I enjoy working with and interact
        well with people, am keen and enthusiastic, and take pride in all my
        work.
      </h4>

      <p>
        I am a React Native developer for a new corporate banking application at
        Santander, most time is spent using Typescript on the front end however
        I can also be found working with Springboot/Express REST APIs and
        configuring dev ops pipelines.
      </p>

      <p>
        In my free time I am usually playing with new technologies, or creating
        little games for fun. I also love gaming, music and racing quadcopters!
        (BTW I use Arch.)
      </p>

      <p>
        Other languages, libraries, frameworks, and technologies I have
        experience with in no particular order:
      </p>

      <div style={styles.skillsContainer}>
        <ul style={styles.skills}>
          <li>Native Android development</li>
          <li>Java</li>
          <li>Kotlin</li>
          <li>React for web</li>
          <li>Angular 5</li>
          <li>Node</li>
          <li>Hadoop, HiveQL, Impala, UDFs</li>
          <li>Spark, Scala</li>
        </ul>

        <ul style={styles.skills}>
          <li>Linux, MacOS, Windows</li>
          <li>Encryption</li>
          <li>Git</li>
          <li>Bash</li>
          <li>TDD, BDD</li>
          <li>Continuous Integration</li>
          <li>Scrum, Agile, Waterfall</li>
          <li>C++</li>
        </ul>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: 15,
    background: '#333',
    color: '#DDD',
    maxWidth: 900,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'start',
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
  },
  skills: {
    textAlign: 'left',
  },
}

export default AboutMe
