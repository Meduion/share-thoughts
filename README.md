# Share Thoughts

  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

  ## Description

  Share Thoughts is a sample API for a social media website allowing the creation and editing of Users, their thoughts, adding friends to a User, and adding reactions to Thoughts.

  ## Contents
  
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contributions](#contributions)

  ## Usage

  Share Thoughts is testable through use of Insomnia or Postman to test the routes for the various functions. Please refer to the userRoutes and thoughtsRoutes for the correct URL useage.

  ## Installation
  
  To install Share Thoughts you will need to download the repository and open it in VSCode or another code editor. Use the integrated terminal to run npm init -y and then npm install to install the apps dependencies. Once installed the app can be run with node index.js. To create a user you will need to include the following in the JSON body:

{ 
  "username": "your username here", 
  "email": "youremail@email.com"
}

Similarly for creating a thought the following are required in the JSON body:

{
	"thoughtText": "insert thought text",
	"username": "username of user posting the thought",
	"userId": "_id of user posting the thought"
}

A demonstration of Share Thoughts being used with Insomnia can be viewed [HERE](https://drive.google.com/file/d/1ZBcL_xtdUMJh4YoLAuXlkM1hJhrz8hhx/view?usp=share_link)

  ## License

  This project is licensed under BSD 3-Clause. For more information (if applicable), please click the following button to learn more:

  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

  ## Contributions
  
  If you wish to use Share Thoughts as a template for building the API of your own social media type website feel free!
