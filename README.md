# text-editor-app

## Description
The purpose of this project is to create a text-editor that can be used both online and offline. The ability for this application to be used offline is made possible as it is a Progressive Web Application (PWA). This is additionally a demonstration of the client-server model in use in conjunction with the npm package 'concurrently'. IndexedDB and webpack have also been used in this application.

## Requirements
- Ensure opening application in editor displays a client-server folder structure
- Ensure running `npm run start` from root directory has application backend start and serve the client
- Ensure running text editor in application has JS files bundled via webpack
- Ensure running webpack plugins leads to generated HTML file, service worker and manifest file
- Ensure text editor functions in the browser with no errors
- Ensure opening text editor leads to IndexedDB creating a database storage
- Ensure entering content and clicking of DOM window leads to content in text editor being saved with IndexedDB
- Ensure reopening text editor after close leads to content being retrieved from IndexedDB
- Ensure clicking on Install button downloads application as icon on desktop
- Ensure loading web application should have a registered service worker using workbox
- Ensure registering service worker should have static assets precached upon loading along with subsequent pages and static assets
- Ensure deploying to Render has proper build scripts for a webpack application

## Insomnia Application Preview
![Application Screenshot 1](client/src/images/text-editor-application-1.png)
![Application Screenshot 2](client/src/images/text-editor-application-2.png)

## Submission Requirements
- [Deployed Application](https://text-editor-app-d968.onrender.com/)
- [GitHub Repo](https://github.com/ajayshans/text-editor-app)