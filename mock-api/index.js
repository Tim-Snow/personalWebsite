const express = require('express')
const app = express()
app.set('port', process.env.PORT || 3001)

app.get('/users/tim-snow', (req, res) => {
  console.log('user get request')
  res.json({
    login: 'Tim-Snow',
    id: 4265090,
    node_id: 'MDQ6VXNlcjQyNjUwOTA=',
    avatar_url: '/uploads/img.bmp',
    gravatar_id: '',
    url: 'https://api.github.com/users/Tim-Snow',
    html_url: 'https://github.com/Tim-Snow',
    followers_url: 'https://api.github.com/users/Tim-Snow/followers',
    following_url:
      'https://api.github.com/users/Tim-Snow/following{/other_user}',
    gists_url: 'https://api.github.com/users/Tim-Snow/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Tim-Snow/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Tim-Snow/subscriptions',
    organizations_url: 'https://api.github.com/users/Tim-Snow/orgs',
    repos_url: 'https://api.github.com/users/Tim-Snow/repos',
    events_url: 'https://api.github.com/users/Tim-Snow/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Tim-Snow/received_events',
    type: 'User',
    site_admin: false,
    name: 'Tim Snow',
    company: 'Santander Technology UK',
    blog: 'http://www.Tim-Snow.co.uk',
    location: 'Northampton',
    email: 'tim.snow1991@gmail.com',
    hireable: null,
    bio: 'Software Developer at Santander Technology UK.',
    public_repos: 18,
    public_gists: 1,
    followers: 4,
    following: 7,
    created_at: '2013-04-26T12:52:05Z',
    updated_at: '2019-03-01T16:29:56Z',
    private_gists: 10,
    total_private_repos: 1,
    owned_private_repos: 1,
    disk_usage: 188619,
    collaborators: 0,
    two_factor_authentication: false,
    plan: {
      name: 'free',
      space: 976562499,
      collaborators: 0,
      private_repos: 10000,
    },
  })
})

app.get('/users/tim-snow/events', (req, res) => {
  console.log('event get request')
  res.json([
    {
      id: '9177613335',
      type: 'WatchEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 19943999,
        name: 'romannurik/AndroidAssetStudio',
        url: 'https://api.github.com/repos/romannurik/AndroidAssetStudio',
      },
      payload: {
        action: 'started',
      },
      public: true,
      created_at: '2019-03-04T20:42:55Z',
    },
    {
      id: '9169564733',
      type: 'PushEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 43962629,
        name: 'Tim-Snow/PersonalWebsite',
        url: 'https://api.github.com/repos/Tim-Snow/PersonalWebsite',
      },
      payload: {
        push_id: 3361145045,
        size: 1,
        distinct_size: 1,
        ref: 'refs/heads/gh-pages',
        head: '89aed1fc79f749eaade427cc043bed1edec2935e',
        before: '94b2eb70b5d7c147a66b55119457f338753d7909',
        commits: [
          {
            sha: '89aed1fc79f749eaade427cc043bed1edec2935e',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim Snow',
            },
            message: 'Update CNAME',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/PersonalWebsite/commits/89aed1fc79f749eaade427cc043bed1edec2935e',
          },
        ],
      },
      public: true,
      created_at: '2019-03-03T11:03:58Z',
    },
    {
      id: '9169552473',
      type: 'PushEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 43962629,
        name: 'Tim-Snow/PersonalWebsite',
        url: 'https://api.github.com/repos/Tim-Snow/PersonalWebsite',
      },
      payload: {
        push_id: 3361137407,
        size: 1,
        distinct_size: 1,
        ref: 'refs/heads/gh-pages',
        head: '94b2eb70b5d7c147a66b55119457f338753d7909',
        before: 'a20054eae6f98cc4c9af4e34b90f0115a8e78226',
        commits: [
          {
            sha: '94b2eb70b5d7c147a66b55119457f338753d7909',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim Snow',
            },
            message: 'Update CNAME',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/PersonalWebsite/commits/94b2eb70b5d7c147a66b55119457f338753d7909',
          },
        ],
      },
      public: true,
      created_at: '2019-03-03T10:56:52Z',
    },
    {
      id: '9158261648',
      type: 'WatchEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 39651569,
        name: 'taniarascia/new-moon',
        url: 'https://api.github.com/repos/taniarascia/new-moon',
      },
      payload: {
        action: 'started',
      },
      public: true,
      created_at: '2019-02-28T21:55:32Z',
    },
    {
      id: '9148853091',
      type: 'WatchEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 169744559,
        name: 'nas5w/javascript-tips-and-tidbits',
        url: 'https://api.github.com/repos/nas5w/javascript-tips-and-tidbits',
      },
      payload: {
        action: 'started',
      },
      public: true,
      created_at: '2019-02-27T18:16:29Z',
    },
    {
      id: '9090023706',
      type: 'WatchEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 169839893,
        name: 'imthenachoman/How-To-Secure-A-Linux-Server',
        url:
          'https://api.github.com/repos/imthenachoman/How-To-Secure-A-Linux-Server',
      },
      payload: {
        action: 'started',
      },
      public: true,
      created_at: '2019-02-18T21:24:08Z',
    },
    {
      id: '8959302791',
      type: 'PushEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 167859519,
        name: 'Tim-Snow/homemonitorApp',
        url: 'https://api.github.com/repos/Tim-Snow/homemonitorApp',
      },
      payload: {
        push_id: 3248683129,
        size: 1,
        distinct_size: 1,
        ref: 'refs/heads/master',
        head: 'f8781ac2abbc6367307b8d19425df930936a539f',
        before: '188f92643bf71662ea4fb045aed665003524284c',
        commits: [
          {
            sha: 'f8781ac2abbc6367307b8d19425df930936a539f',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim Snow',
            },
            message: 'initial commit',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/homemonitorApp/commits/f8781ac2abbc6367307b8d19425df930936a539f',
          },
        ],
      },
      public: true,
      created_at: '2019-01-27T21:19:36Z',
    },
    {
      id: '8959293520',
      type: 'CreateEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 167859519,
        name: 'Tim-Snow/homemonitorApp',
        url: 'https://api.github.com/repos/Tim-Snow/homemonitorApp',
      },
      payload: {
        ref: 'master',
        ref_type: 'branch',
        master_branch: 'master',
        description: null,
        pusher_type: 'user',
      },
      public: true,
      created_at: '2019-01-27T21:14:58Z',
    },
    {
      id: '8959293472',
      type: 'CreateEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 167859519,
        name: 'Tim-Snow/homemonitorApp',
        url: 'https://api.github.com/repos/Tim-Snow/homemonitorApp',
      },
      payload: {
        ref: null,
        ref_type: 'repository',
        master_branch: 'master',
        description: null,
        pusher_type: 'user',
      },
      public: true,
      created_at: '2019-01-27T21:14:56Z',
    },
    {
      id: '8916199971',
      type: 'WatchEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 116941150,
        name: 'NatronGitHub/Natron',
        url: 'https://api.github.com/repos/NatronGitHub/Natron',
      },
      payload: {
        action: 'started',
      },
      public: true,
      created_at: '2019-01-19T14:20:57Z',
      org: {
        id: 34493846,
        login: 'NatronGitHub',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/NatronGitHub',
        avatar_url: 'https://avatars.githubusercontent.com/u/34493846?',
      },
    },
    {
      id: '8754380046',
      type: 'WatchEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 12820537,
        name: 'lord/slate',
        url: 'https://api.github.com/repos/lord/slate',
      },
      payload: {
        action: 'started',
      },
      public: true,
      created_at: '2018-12-14T11:28:25Z',
    },
    {
      id: '8743203807',
      type: 'WatchEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 67425392,
        name: 'jerrybendy/react-touch-events',
        url: 'https://api.github.com/repos/jerrybendy/react-touch-events',
      },
      payload: {
        action: 'started',
      },
      public: true,
      created_at: '2018-12-12T18:28:46Z',
    },
    {
      id: '8743203184',
      type: 'WatchEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 107273802,
        name: 'duskload/react-device-detect',
        url: 'https://api.github.com/repos/duskload/react-device-detect',
      },
      payload: {
        action: 'started',
      },
      public: true,
      created_at: '2018-12-12T18:28:39Z',
    },
    {
      id: '8721359775',
      type: 'PushEvent',
      actor: {
        id: 4265090,
        login: 'Tim-Snow',
        display_login: 'Tim-Snow',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tim-Snow',
        avatar_url: 'https://avatars.githubusercontent.com/u/4265090?',
      },
      repo: {
        id: 43962629,
        name: 'Tim-Snow/PersonalWebsite',
        url: 'https://api.github.com/repos/Tim-Snow/PersonalWebsite',
      },
      payload: {
        push_id: 3120131440,
        size: 6,
        distinct_size: 6,
        ref: 'refs/heads/master',
        head: '6ce308ba5e30d96b4da9afda0b9c8d4937804953',
        before: '3c1afcde29d68fc573dcf7466b96de45da02fd51',
        commits: [
          {
            sha: '40a4e59cd1167fe1ef6789390ef54e13599a76b6',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim',
            },
            message: 'initial commit of react overhaul',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/PersonalWebsite/commits/40a4e59cd1167fe1ef6789390ef54e13599a76b6',
          },
          {
            sha: '24844cc13d4e0ac5cd07c825a820ae88673c2115',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim',
            },
            message: 'Add menu reducer',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/PersonalWebsite/commits/24844cc13d4e0ac5cd07c825a820ae88673c2115',
          },
          {
            sha: 'e49a57361f71a58d0525f07546076c104f655d74',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim',
            },
            message: 'hamburger menu functioning',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/PersonalWebsite/commits/e49a57361f71a58d0525f07546076c104f655d74',
          },
          {
            sha: 'd7209730a034ccac32f855d081c8c7238a68f1d8',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim',
            },
            message: 'Change state file structure',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/PersonalWebsite/commits/d7209730a034ccac32f855d081c8c7238a68f1d8',
          },
          {
            sha: 'c1ddce6462e13e9d78b406aa9c71bfecc4845584',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim',
            },
            message:
              'Experiment with full screen image and start on portfolio items',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/PersonalWebsite/commits/c1ddce6462e13e9d78b406aa9c71bfecc4845584',
          },
          {
            sha: '6ce308ba5e30d96b4da9afda0b9c8d4937804953',
            author: {
              email: 'tim.snow1991@gmail.com',
              name: 'Tim',
            },
            message: 'add home page',
            distinct: true,
            url:
              'https://api.github.com/repos/Tim-Snow/PersonalWebsite/commits/6ce308ba5e30d96b4da9afda0b9c8d4937804953',
          },
        ],
      },
      public: true,
      created_at: '2018-12-08T22:13:14Z',
    },
  ])
})

app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), () =>
  console.log(`Listening on port ${app.get('port')}!`),
)
