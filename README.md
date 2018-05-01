# Flickthr
A responsive, searchable image gallery using Flickr API, React, SuitCSS, and more!


## How to use it

In your terminal or command line (CL), type
1. `git clone https://github.com/albertchanged/Flickthr.git`
2. `cd Flickthr`
3. `npm run start`

   Then create a new terminal / CL tab within the same directory

4. `npm run build` (in the new tab) and wait for that to finish

Once both `npm run`'s have completed, open the source code in an IDE and
1. Create a new file called `flickr.js` in the root directory
2. Copy this into the file:

   ```javascript
   module.exports = {
     API_KEY: {REPLACE THIS}
   }
   ```

3. Replace `{REPLACE THIS}` with your own Flickr API key

Lastly, go to your browser and
1. Navigate to `localhost:8080`
2. Browse / click photos or find more using the search box
3. Have fun!


## Technologies Used

* React JS
* Node JS
* Webpack
* Babel
* CSS3
* SuitCSS
* HTML5
* Flickr Search API


### Big thanks to Upthere for providing this coding challenge!