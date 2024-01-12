
 

  document.addEventListener('DOMContentLoaded', function() {
    // Array of file paths for iframes
    const filePaths = [
      '../paragraphs/paragraph0.txt',
      '../paragraphs/paragraph1.txt',
      '../paragraphs/paragraph2.txt',
      '../paragraphs/paragraph3.txt',
      // '../paragraphs/paragraph4.txt',
      // '../paragraphs/paragraph5.txt',
      // '../paragraphs/paragraph6.txt'
      // Add more paragraph paths if needed
    
    ]
    const imagePaths = [
      
      '../images/downloaded_image0.png',
      '../images/downloaded_image1.png',
      '../images/downloaded_image2.png',
      '../images/downloaded_image3.png',
      // '../images/downloaded_image4.png',
      // '../images/downloaded_image5.png',
      // '../images/downloaded_image6.png', 
      // Add more image paths if needed
    ];
  
    var iframesContainer = document.getElementById('main-container');
  
    // Loop through the file paths array and create iframes

    for(let i = 0;i<4;i++){

       // Add Image
       const img = document.createElement('img');
       img.src = imagePaths[i];
       img.alt = 'Image';
       img.style ='style="width:500px;height:600px;'
       iframesContainer.appendChild(img);
      
            // Add Space
      var additionalContent = document.createElement('div');
      additionalContent.innerHTML += '&nbsp;';
      iframesContainer.appendChild(additionalContent);
    

       
      // Add Paragraph
      var iframe = document.createElement('iframe');
      iframe.src = filePaths[i];
      iframe.setAttribute("style", "font-family: 'Arial', sans-serif; font-size: 200px;");
      iframe.width = '90%';
      iframe.height = '200'; 
      iframesContainer.appendChild(iframe);

 
     
      

    }
   
  }); 