Astronomy Picture of the Day

Using nasa open api, I have created a react application to view the photo/video of the day!

React application that uses material ui for the styling, indexedDB for caching of the apod data. This application also utilizes module federation to expose the apod component for use in a different application.

A working version is hosted [here](http://jay-one-try.srv658343.hstgr.cloud/)

To run this app, you need to create a .env file. For now we store our nasa issued api key within these files.

.env

which contains the nasa api key:
BART_API_KEY=DEMO_KEY
