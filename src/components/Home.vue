<template>
  <div 
    class="target"
    v-motion
    :initial="{opacity: 0, y:100}"
    :enter="{opacity: 1, y: 0}"
    :hovered="{ custom: {scale: 2} }"
    :delay="200"
  >
    <section class="menu">
      <nav class="menu-bar">
      <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
    </section>
  
  <section class="intro-section" id="home">
    <div class="intro" >
        <h1>hi, i'm christelle</h1>
        <h3 class="target">ambitious computer science student</h3>
    </div>
  </section>
  <section class="about-section" id="about">
    <div class="about">
      <h1>about me</h1>
      <p>I am a senior at Quinnipiac University, studying computer science with a minor in psychology. After graduation, I will be pursuing my masters through Quinnipiac's 4+1 Interactive Media and Communications program. I am passionate about learning new technologies and improving the user experience in web applications. I interested in working in front-end development, web development and UX design.</p>
        <a target="_blank" href='https://www.linkedin.com/in/christelle-flores/'><button class="btn1">LinkedIn</button></a>
        <a target="_blank" href='https://github.com/christelleflores'><button class="btn2">GitHub</button></a>
        <img src= "@/assets/me.png" alt="pic of me">
      
      <h3>some of my skills and technologies I've worked with:</h3>
        <ul class="skill-list">
          <li style="list-style: circle">Java</li>
          <li style="list-style: circle">Swift</li>
          <li style="list-style: circle">Javascript</li>
          <li style="list-style: circle">HTML/CSS</li>
        </ul>
        <ul class="tech-list">
          <li style="list-style: circle">XCode</li>
          <li style="list-style: circle">Vue</li>
          <li style="list-style: circle">Git</li>
          <li style="list-style: circle">Scrum</li>
        </ul>
    </div>
  </section>
  <section class="projects-section" id="projects">
   <div class="projects">
       <h1>projects</h1>
       <div class="wrapper">
       <div class="cards">
          <div class="project">
           <div class="content">
             <h3>Spotify Playlist-Manager</h3>
             <p class="pd1">A website utilizing the Spotify API in which allows the user to login to their Spotify account and edit their personal playlists.</p>
             <a target="_blank" href='https://github.com/christelleflores/Spotify-Playlist-Manager'><button class="pbtn1">GitHub</button></a>
           </div>
         </div>
         <div class="project">
           <div class="content">
             <h3>GoalSet App</h3>
             <p class="pd1">A lifestyle themed iOS application created in XCode programmed in Swift.</p>
             <a target="_blank" href='https://github.com/christelleflores/GoalSet-iOSProgramming'><button class="pbtn1">GitHub</button></a>
           </div>
         </div>
         <div class="project">
           <div class="content">
             <h3>Cat-Platformer</h3>
             <p class="pd1">A software development project in which a team develops and maintains an existing software by debugging and implementing enhancing features.</p>
             <a target="_blank" href='https://github.com/caprice0423/Cat-Platformer'><button class="pbtn1">GitHub</button></a>
           </div>
         </div>
         <div class="project">
           <div class="content">
             <h3>Driven Website Revamp</h3>
             <p class="pd1">A revamped model of the Driven Media Management's website utilizing Wix design tools to enhance the user experience and improve the company's online presence.</p>
             <a target="_blank" href='https://www.drivenmediamanagement.com/'><button class="pbtn1">Website</button></a>
           </div>
         </div>
       </div>
       </div>
   </div>
   </section> 
   <section class="contact-section" id="contact">
     <div class="contact">
       <h1>let's chat</h1>
       <p> Feel free to reach out with any topics to dicuss or questions you may have! </p>
       <div class="email"><a class="emailbtn" href="mailto:christellejflores@gmail.com">Email</a></div>
     </div>
   </section>
  </div>
</template>

<script>
//import { onMounted, onUnmounted } from 'vue'
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  background-color: rgb(85, 130, 139);
}
.target{
  background-color: rgb(85, 130, 139);
}
.menu{
  position: fixed;
  
}
.menu-bar{
  width: fit-content;
  height: 15vh;
  margin: auto;
  display: flex;
  align-items: center;
}
nav{
  flex: 1;
  padding-left: 900px;
}
nav ul li{
  display: inline-block;
  list-style: none;
  margin: 0px 20px;
}
nav ul li a{
  text-decoration: none;
  color: rgb(201, 228, 202);
  font-size: 20px;
}
.intro-section{
  vertical-align: top;
  display: flex;
  align-items: center;
}
.about-section{
  vertical-align: top;
  display: flex;
  align-items: center;
}
.projects-section{
  vertical-align: top;
  display: flex;
  align-items: center;
}
.contact-section{
  vertical-align: top;
  display: flex;
  align-items: center;
}
.intro{
  margin-top: 15rem;
  margin-bottom: 15rem;
}
.intro h1{
  overflow: hidden;
  border-right: .15em solid rgb(201, 228, 202);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}
@keyframes typing {
  from { width: 0 }
  to { width: 75% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(201, 228, 202) }
}
.about{
  margin-bottom: 15rem;
}
.projects{
  margin-bottom: 15rem;
 
}
.intro h1{
  font-size: 75px;
  font-weight: 100;
  margin-top: 24px;
  margin-bottom: 15px;
  margin-left: 10rem;
  color: rgb(54, 73, 88);
}
.intro h3{
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10rem;
  color: rgb(201, 228, 202);
}
.about h1{
  font-size: 60px;
  font-weight: 100;
  margin-top: 54px;
  margin-bottom: 40px;
  margin-left: 10rem;
  color: rgb(54, 73, 88);
}
.about p{
  width: 40%;
  font-size: 20px;
  margin-top: 45px;
  margin-bottom: 15px;
  margin-left: 10rem;
  color: rgb(201, 228, 202);
}
.about img{
  width: 350px;
  height: 350px;
  margin-left: 55rem;
  margin-top: -19rem;
  border-radius: 15%;
}
img:hover{
  transform: translate3D(0,-1px,0) scale(1.03);
  box-shadow: 8px 28px 50px rgb(201, 228, 202);
  transition: all .4 ease;
  cursor: pointer;
}
.btn1{
  width: 100px;
  height: 40px;
  color: rgb(201, 228, 202);
  background: rgb(59, 96, 100);
  border-radius: 8px;
  border: none;
  margin-top: 15px;
  margin-left: 15rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
}
.btn1:hover{
  color: rgb(59, 96, 100);
  background: rgb(201, 228, 202);
}
.btn2{
  width: 100px;
  height: 40px;
  color: rgb(201, 228, 202);
  background: rgb(59, 96, 100);
  border-radius: 8px;
  border: none;
  margin-top: 15px;
  margin-left: 5rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
}
.btn2:hover{
  color: rgb(59, 96, 100);
  background: rgb(201, 228, 202);
}
.about h3{
  font-size: 25px;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10rem;
  color: rgb(54, 73, 88);
}
.about .skill-list{
  width: 40%;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 9rem;
  color: rgb(201, 228, 202);
}
.about .tech-list{
  width: 40%;
  font-size: 20px;
  margin-top: -7.9rem;
  margin-bottom: 15px;
  margin-left: 20rem;
  color: rgb(201, 228, 202);
}
.projects h1{
  font-size: 60px;
  font-weight: 100;
  margin-top: 34px;
  margin-bottom: 10px;
  margin-left: 10rem;
  color: rgb(54, 73, 88);
}
.wrapper{
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 4rem;
  padding: 2rem;
  margin: 0 auto;
  width: max-content;
}
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
}
.project{
  width: 230px;
  height: 280px;
  border-radius: 35px;
  padding: 1.5rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  margin-left: 7em;
  margin-bottom: 7rem;
  box-shadow: 0px 0px 7px 7px rgb(201, 228, 202);
  
}
.project:hover{
  transform: translate3D(0,-1px,0) scale(1.03);
  transition: all .4 ease;
  cursor: pointer;
}
.content h3{
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.content .pd1{
  font-size: 15px;
  margin-bottom: 30px;
  color: rgba(201, 228, 202);
  text-align: center;
}
.content .pbtn1{
  width: 80px;
  height: 30px;
  color: rgb(201, 228, 202);
  background: rgb(59, 96, 100);
  border-radius: 8px;
  border: none;
  margin-top: 15px;
  margin-left: 4.5rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
}
.pbtn1:hover{
  color: rgb(59, 96, 100);
  background: rgb(201, 228, 202);
}
.contact h1{
  font-size: 60px;
  font-weight: 100;
  margin-top: 34px;
  margin-bottom: 40px;
  margin-left: 10rem;
  color: rgb(54, 73, 88);
}
.contact p{
  width: 100%;
  font-size: 20px;
  margin-top: 45px;
  margin-bottom: 25px;
  margin-left: 10rem;
  color: rgb(201, 228, 202);
}
.emailbtn{
  background-color: rgb(201, 228, 202);
  background: rgb(59, 96, 100);
  border-radius: 8px;
  border: none;
  margin-left: 10rem;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
}
.email{
  margin-bottom: 20rem;
}
.emailbtn:hover{
  color: rgb(59, 96, 100);
  background: rgb(201, 228, 202);
}
</style>