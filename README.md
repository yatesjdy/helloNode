# helloNode
Skeleton project for getting a node.js server (and corresponding "hello world" web page that you can access) using node, express, and pug up and running on your computer via "localhost".

This repo DOES NOT include node or node projects that you will need to run the project... installation instructions are included below for you to follow after you have synched to this repo

SUMMARY

This project is based on node.js and a minimal number of node modules including:

   1. NODE https://nodejs.org/en/download/ 
          If you do not know already, node.js is the javascript-based language we will use to develop our server.
          You need node installed on your device to run the project, and your server.  
          Node, along with the other packages we will install here (below), will serve up your web page(s).
          You'll need to choose the right version of node based on your target platform.
   
   2. EXPRESS https://www.npmjs.com/package/express
          Express helps simplify the process (and your server code) for managing web app requests (like routing)
          You can learn more about express here https://expressjs.com/
   
   3. EXPRESS-SESSIONS https://www.npmjs.com/package/express-session 
            https://nodewebapps.com/2017/06/18/how-do-nodejs-sessions-work/ 
           (not strictly needed for this project, but likely in future revs)
                        
   4. PUG https://pugjs.org/api/getting-started.html
           PUG is a templating engine, which just means that it is a pre-cursor langaguage that builds your html files for you.
           PUG used to be called JADE, which can lead to some confusion when you search for info on the web.
           This project uses PUG to describe a simple home page on the website that your server is delivering to the client.
           Learning PUG (or any templating engine) is key to being able to build more sophisticated content dynamically.
           Here's another useful reference: https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33.
           And this one: https://expressjs.com/en/guide/using-template-engines.html.
   

INSTALLATION
Synch to this repo so you have a local copy of all files and folders from this repo on your computer.

From a terminal window on MAC or a Command Prompt on Windows on your device....

Install node on your computer using the node installation page    :https://nodejs.org/en/download/ 

Install the following (I use npm, the node package manager):

npm install express
npm install express-sessions
npm install pug


CONFIRM INSTALLATION

After installation of all files and node/node modules, your folder topology should look like this:

nodeHello (our root folder - you can call this anything)
  nodeHelloServer.js (this is our server code!)
  public (folder)
    static (folder)
      images (folder)
        hand-o-peace.png (this is our home page logo)
  node_modules (folder)
    pug (folder)
      (files and subfolders not listed)
    express (folder)
      (files and subfolders not listed)
    express-session (folder- OPTIONAL)
      (files and subfolders not listed)
  views (folder - this is where are pug files live - they represent our ultimate html pages, once 'rendered')
      nodeHelloLayout.pug (a pug that is 'included' inside of the next pug below - handy if you build out multiple pug pages)
      nodeHelloHome.pug (a pug that represents our home page... 
                it includes (extends is the actual pug syntax) the nodeHomeLayout.pug above)
   
   runme (a simple batch file that starts the server using: "node nodeHelloServer.js")
          ... you could just type this every time so this is optional if you like
