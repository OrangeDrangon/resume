export const projects = [
  {
    slug: "about-me",
    name: "About Me",
    summary: `
      <p>
        My name is Kyle Rosenberg. I am a recently graduated high school senior. This summer
        I will be interning at AFRL at the Wright Patt Air Force Base. This is my first
        real expierience in development in a work place. This will be an exciting opportunity.
      </p>
      <p>
        If anyone reading this is interested in providing a similar opportunity for summer
        work or internships. Contatct me at <code>kyle@ekrosenberg.com</code>
      </p>
      <p>
        I know this site is a bit ugly but it is work in progress. It will probably look
        better as I devote some more time towards polishing it and making it more presentable.
      </p>
    `,
  },
  {
    slug: "spotify-player",
    name: "Spotify Player",
    url: "https://player.kmr.pw",
    github: "https://github.com/OrangeDrangon/spotify-player",
    summary: `
      <p>
        Spotify player is a spotify client based on React. It is able to play
        Spotify's featured playlists along with any playlists that you have
        followed.
      </p>
      <p>
        To begin playback, click on one of the playlists presented and then on one
        of the songs in the list. It does not support picking a song to start with
        for you.
      </p>
      <p>
        Testing out the features requires a Spotify premium account due to the
        restrictions on their API.
      </p>`,
  },
  {
    slug: "pointing-poker",
    name: "Pointing Poker",
    url: "http://poker.kmr.pw",
    github: "https://github.com/OrangeDrangon/pointing-poker",
    summary: `
      <p>
        This is a basic pointing poker implementation for agile development.
        It allows for any kind of vote and is server side stateless meaning no
        database is needed. It is implemented entirely with websockets.
      </p>
      <p>
        It is a Sapper project which is a SSR version of Svelte. In order to
        play with it yourself create a room then share the link in another tab.
        After that it is just a normal pointing poker expierience. It may
        take a second to load because it is hosted for free with heroku.
      </p>
    `,
  },
  {
    slug: "allium-blockchain-explorer",
    name: "Allium Blockchain Explorer",
    url: "https://explorer.freshgrlc.net",
    github: "https://github.com/freshgrlc/freshgrlc-explorer",
    summary: `
      <p>
        This is a blockchain explorer implemented for two coins both using the
        Allium algorithm. It is a front end that consumes a Restful API. The api
        is provided by my partner in this project.
      </p>
      <p>
        I laid the ground work for the front end and got it to a useable point. Eventually
        my partner got interested in helping with the front end. He finished up some of the
        unimplemented things and got it to a "finished" state.
      </p>
      <p>
        There is no trick to this website. If you are interested in testing it you can just
        browse thru the links following the routes and seeing the various pages.
      </p>
    `,
  },
  {
    slug: "online-code-editor",
    name: "Online Code Editor",
    url: "https://editor.kmr.pw",
    github: "https://github.com/OrangeDrangon/editor-git",
    summary: `
      <p>
        This project is aboandoned and mostly not functional. If you were to clone a JS or TS
        project repo and got it to work. It would allow you to browse the files and make
        edits to the files in memory. It does not persist in anyway or have a utility
        to persist changes.
      </p>
      <p>
        If you are interested in testing it. The name can be anything. You can use this <code>https://github.com/OrangeDrangon/editor-git</code>
        as the repo URL. The username and password can be left blank.
      </p>
      <p>
        If you click clone and everything goes well you should
        be able to select the repo from the repos tab. Once it opens it should generate a file tree that allows you
        to browse the files in the repo.
        project repo and got it to work. It would allow you to browse the files and make edits to the files in memory. It does not persist in anyway or have a utility to persist changes.

        If you are interested in testing it. The name can be anything. You can use this https://github.com/OrangeDrangon/editor-</p>
    `,
  },
];
