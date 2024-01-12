const { OpenAI } = require('openai');
const fs = require("fs"); 
const path = require('path');
const axios = require("axios")



require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
  });

  

async function createParagraphImage(count,text) {

    //  Prompt must be length 1000 or less while using DALL-E for image generation
    if (text.length > 1000) {
      text = text.substring(0, 1000)
  
    }
  
    async function dalleGenerateImage(text) {
  
      const image = await openai.images.generate({ prompt: text });
  
      console.log(image.data[0].url);
      return image.data[0].url
  
  
  
    }
  
  
    // Function to download the image
    async function downloadImage(outputPath, myCallback) {
      try {
        image_url = await myCallback(text)
        const response = await axios.get(image_url, { responseType: 'stream' });
        const writer = fs.createWriteStream(path.join(__dirname, outputPath));
  
        response.data.pipe(writer);
  
        return new Promise((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
        });
      } catch (error) {
        console.error('Error downloading the image:', error);
      }
    }
  
    downloadImage(`images/downloaded_image${count}.png`, dalleGenerateImage)
      .then(() => {
        console.log(`images/downloaded_image${count}.pn downloaded successfully!`); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
}
  
// Flushing previous content before creating the new E-book
// fs.writeFileSync('./ebook.txt', '');

// Creating text and image files for the ebook website
fs.readFile('./story.txt', 'utf8', async (err, text) => {
    if (err) {
        console.log(err)
        console.error(err);
        return;
      } else {
        i = 0;
        const parahraphSize = 600
        while ((i+1)*parahraphSize<=text.length){
            
            console.log(i)
            paragraph = text.substring(i*parahraphSize,(i+1)*parahraphSize) 
            

            // ADD PARAGRAPH
            fs.writeFile(`./paragraphs/paragraph${i}.txt`, paragraph, err => {
                if (err) {
                console.error(err);
            }
            }) 

            // ADD IMAGE
            // Read the image file as binary data to add into file
            // timing = i * 60000
            // setTimeout(() => {
            //     createParagraphImage(i,paragraph)
            //     console.log("Delayed for 1 min.");
            //   }, `${timing}`);
            createParagraphImage(i,paragraph)
            i+=1
        }

        // lastParagraph = text.substring(i,text.length) 
        // fs.appendFile('./ebook.txt', lastParagraph, err => {
        //     if (err) {
        //     console.error(err);
        //     }
        // })

        console.log(text.length)
        // createParagraphImage(text)

      }

})



