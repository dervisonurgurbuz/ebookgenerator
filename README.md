# Computational Creativity: E-Book Creation

## How to run

### Initially the packages and dependencies needs to be installed 

```
npm install
```

### Secondly the code needs to he compiled to parse the received story.txt file into paragraphs and use DALL-E to create, download images.

```
npm run start
```

### After the images are saved locally by the algorithm the user can open the html file to see unique ebook created. The ebook.js file has been written to consecutively fill the html with the files in parahraphs and images that previously created.

#### Open /frontend/ebook.html in default browser.

### Which can be further printed in pdf version which is like the one we added in our submission.

### Note: In orderto run the application an unique API key has to bee acquired form OpenAI and added to .env file