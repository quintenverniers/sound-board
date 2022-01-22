# Custom soundboard

This react app was built to easily create custom soundboards with your own sounds.

## How to use

### `Project setup`
Install dependencies and get the project up and running.

#### `npm install`

Install all dependencies by running npm install inside the project folder.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `Change sounds`

Open Sounds.js in the /src folder.
In this file change the title as you wish and change the sounds array.
Be sure to use id, name and file for each sound.
Sound files should go in the /assets/sounds/ folder and need to be imported in the sounds.js file.
After you've imported the sound files you can assign them as the 'file' to each object in the sounds array.

#### `npm run build`

Final step is to create a production build. The result of this command will be a production ready `build`folder.
This folder is ready to be hosted wherever you like.
