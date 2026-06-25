
const container = document.getElementsByClassName('profile-container')[0];

 
 // Define the data for the top-list container


const posts = [
  {
    id: 1,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    name: 'ztsambad',
    postpic: './image/myimage/IMG_20240825_131607_729.jpg',
    imageUrl: "./image/profile-pic/member-5.png",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
    emoji: 27,
    follow: 7,
  
  },
  
   
    
];



// Using map to create an array of HTML strings
const htmlArray = Array.from(posts).map(post => ` 

    <fieldset >
     <legend></legend>
    <div class="post-zone">
  
      <div class="group-name">
        
        <p>${post.title}</p>
        <p>time:${post.time}</p>
      </div> 
      <div class="post-upp">
      <div class="post-pic">
      <img src="${post.postpic}" alt="">
      </div> 
      <div class="poster-name">
      <p>
      ${post.name}
      </p>
      </div>
      </div>
      <div class="post-write">
      <textarea name="" id="" cols="40" rows="10">${post.write}</textarea>
        
      </div>
      <div class='box-img'>
      <div class="post-img">
        <img src="${post.imageUrl}" alt="">
      </div>
            <div class="post-img">
        <img src="${post.imageUrl}" alt="">
      </div>
            <div class="post-img">
              <img src="${post.imageUrl}" alt="">
            </div>
                  <div class="post-img">
                    <img src="${post.imageUrl}" alt="">
                  </div>
      </div>
      <div class="icon-info">
        <div class="emoji-count">${post.emoji}k</div>
        <div class="follow-count">you and ${post.follow} others</div>
      </div>
   <div class="icons conss">
<i class="far fa-thumbs-up" style='font-size:27px; color:gray;'></i>
<i class="fa-sharp fa-regular fa-comment-dots" style='font-size:27px; color:gray;'></i>
 <i class = "fa-solid fa-phone" > </i>
        <p class='resend'>re-xend</p>
      </div>
    </div>
  
  </fieldset>
      <fieldset class='chatter'>
       <legend></legend>
      <div class="post-zone">
        <div class="group-name">
          <p>${post.title}</p>
          <p>time:${post.time}</p>
        </div> 
     <div class="chat-box">
      <div class="chat-contain">
        <div class="chat-message" id="chatone">
          <p>hey bro</p>
        </div>
        <div class="chat-message" id="chatwo">
          <p>hi king Kong</p>
         </div>
        </div>
           <div class="chat-contain">
             <div class="chat-message" id="chatone">
                  <p>hey bro</p>
                </div>
             <div class="chat-message" id="chatwo">
                  <p>hi sam</p>
             </div>
            </div>
                  <div class="chat-contain">
                    <div class="chat-message" id="chatone">
                      <p>hey bro</p>
                    </div>
                    <div class="chat-message" id="chatwo">
                      <p>hi sam</p>
                     </div>
                    </div>
                          <div class="chat-contain">
                            <div class="chat-message" id="chatone">
                              <p>hey bro</p>
                            </div>
                            <div class="chat-message" id="chatwo">
                              <p>hi king Kong</p>
                             </div>
                            </div>
            
            <div class='input'>                
       <input placeholder="reply message"></input>
       <svg fill="#000000" width="800px" height="800px" class='Capa_1' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11.303 8l11.394 7.997L11.303 24z"/></svg>
            </div>
     </div>


      </div>
    </fieldset>
  
`);


// Joining the array and setting innerHTML of the container
container.innerHTML = htmlArray.join('');


const container = document.getElementsByClassName('profile-container')[0];

 
 // Define the data for the top-list container

/*
const posts = [
  {
    id: 1,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    name: 'ztsambad',
    postpic: './image/myimage/IMG_20240825_131607_729.jpg',
    imageUrl: "./image/profile-pic/member-5.png",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
    emoji: 27,
    follow: 7,
  
  },
  
    {
      id: 2,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      name:'odama kingsley',
      postpic:"./image/1701696930215.jpg",
      imageUrl: "./image/myimage/20240915_120938.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
      emoji: 27,
      follow: 7,
      
    },
    {
      id: 3,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      name: 'Alex Mike',
      postpic: "./image/myimage/1724493497248.jpg",
      imageUrl: "./image/post-pics/1706909281688.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
      emoji: 27,
      follow: 7,
      
    },
        {
      id: 4,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      name:"sam biggle",
      postpic:"./image/myimage/Screenshot_20240913-144928.jpg",
      imageUrl: "./image/myimage/BackgroundEraser_20240910_093039673.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
      emoji: 27,
      follow: 7,
      
    },
    {
    id: 5,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/myimage/IMG_20240910_071225_108.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
      
    },
        {
    id: 6,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/silhouette /silhouette1.png",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
      
    }
    ,
    {
    id: 7,
    happi: 'happi heyday',
    title: 'the nation Nigeria',
    time: 2,
    imageUrl: "./image/1701250539602.jpg",
    imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
    write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
    emoji: 27,
    follow: 7,
  
  },
  
    {
      id: 8,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/silhouette /silhouette2.png",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
      emoji: 27,
      follow: 7,
      
    },
    {
      id: 9,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701250564873.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
      emoji: 27,
      follow: 7,
      
    },
        {
      id: 10,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701275839803.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, consectetur adipisicing elit.Delectus est et distinctio nemo quia labore vel provident veniam totam, ipsum dolor sit amet, consectetur adipisicing elit.Quas hic maiores sapiente distinctio modi aliquam consectetur perferendis qui delectus ex, fugiat ea sit, rem delenitaspernatur laudantium cum nulla cumque!.',
      emoji: 27,
      follow: 7,
      
    },
    {
    id: 11,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701322713672.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
      
    },
        {
    id: 12,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701324987757.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
      
    }
    ,
    {
    id: 13,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701345731089.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
      
    },
    {
      id: 14,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701413252031.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
    
    },
    {
      id: 15,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701324987757.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
    
    },
    {
      id: 16,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701477569061.jpg",
      imagePost: "BORDERTEST/image/FB_IMG_16139169412055495.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
    
    },
    {
      id: 17,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/1701479976464.jpg",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
    
    },
    {
      id: 18,
      happi: 'happi heyday',
      title: 'the nation Nigeria',
      time: 2,
      imageUrl: "./image/silhouette /silhouette3.png",
      write: 'w2wwwwwewwewwww amet, ',
      emoji: 27,
      follow: 7,
    
    }
    
];



// Using map to create an array of HTML strings
const htmlArray = Array.from(posts).map(post => ` 

    <fieldset >
     <legend></legend>
    <div class="post-zone">
  
      <div class="group-name">
        
        <p>${post.title}</p>
        <p>time:${post.time}</p>
      </div> 
      <div class="post-upp">
      <div class="post-pic">
      <img src="${post.postpic}" alt="">
      </div> 
      <div class="poster-name">
      <p>
      ${post.name}
      </p>
      </div>
      </div>
      <div class="post-write">
      <textarea name="" id="" cols="40" rows="10">${post.write}</textarea>
        
      </div>
      <div class='box-img'>
      <div class="post-img">
        <img src="${post.imageUrl}" alt="">
      </div>
            <div class="post-img">
        <img src="${post.imageUrl}" alt="">
      </div>
            <div class="post-img">
              <img src="${post.imageUrl}" alt="">
            </div>
                  <div class="post-img">
                    <img src="${post.imageUrl}" alt="">
                  </div>
      </div>
      <div class="icon-info">
        <div class="emoji-count">${post.emoji}k</div>
        <div class="follow-count">you and ${post.follow} others</div>
      </div>
   <div class="icons conss">
<i class="far fa-thumbs-up" style='font-size:27px; color:gray;'></i>
<i class="fa-sharp fa-regular fa-comment-dots" style='font-size:27px; color:gray;'></i>
 <i class = "fa-solid fa-phone" > </i>
        <p class='resend'>re-xend</p>
      </div>
    </div>
  
  </fieldset>
      <fieldset class='chatter'>
       <legend></legend>
      <div class="post-zone">
        <div class="group-name">
          <p>${post.title}</p>
          <p>time:${post.time}</p>
        </div> 
     <div class="chat-box">
      <div class="chat-contain">
        <div class="chat-message" id="chatone">
          <p>hey bro</p>
        </div>
        <div class="chat-message" id="chatwo">
          <p>hi king Kong</p>
         </div>
        </div>
           <div class="chat-contain">
             <div class="chat-message" id="chatone">
                  <p>hey bro</p>
                </div>
             <div class="chat-message" id="chatwo">
                  <p>hi sam</p>
             </div>
            </div>
                  <div class="chat-contain">
                    <div class="chat-message" id="chatone">
                      <p>hey bro</p>
                    </div>
                    <div class="chat-message" id="chatwo">
                      <p>hi sam</p>
                     </div>
                    </div>
                          <div class="chat-contain">
                            <div class="chat-message" id="chatone">
                              <p>hey bro</p>
                            </div>
                            <div class="chat-message" id="chatwo">
                              <p>hi king Kong</p>
                             </div>
                            </div>
            
            <div class='input'>                
       <input placeholder="reply message"></input>
       <svg fill="#000000" width="800px" height="800px" class='Capa_1' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11.303 8l11.394 7.997L11.303 24z"/></svg>
            </div>
     </div>


      </div>
    </fieldset>
  
`);


// Joining the array and setting innerHTML of the container
container.innerHTML = htmlArray.join('');

