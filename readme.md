# Embarquer
Expedite the onboarding process with Embarquer

### Starting Embarquer
Create an _embarquer-dev_ database and edit the user or password in _server/constants/Config.js_ to match your setup.

Then run these commands:
````
npm install
node server/models/database.js
npm start
````

### Using Embarquer
Navigate to localhost:3000 and you should be at the landing page.
Click _Begin_ to start the onboarding process.

On each screen, you must fill out all fields, then press save to update your information in the database.

When you have completed the last screen, you will return to the landing page, ready for the next eager recruit to join up.