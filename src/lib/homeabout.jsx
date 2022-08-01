import React from 'react'
import About  from './about.jpg'
export default function homeabout() {
  return (
   <>
    <section class="about" id="about">
       <div class="content">
         <div class="title"><span>About Me</span></div>
       <div class="about-details">
         <div class="left">
           <img src={About} alt="about"/>
         </div>
         <div class="right">
           <div class="topic">Designing Is My Passion</div>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, porro veritatis pariatur, nobis voluptatem ipsum repellat nemo quisquam error reprehenderit recusandae odio vel, suscipit. Voluptas mollitia accusantium quaerat aspernatur labore dolorum placeat ipsa sint nam perspiciatis eos consectetur veritatis debitis, quis aliquam unde sed maiores sit! Hic molestiae optio iste iure earum amet nostrum quaerat facere quae veniam maiores harum iusto aperiam vel inventore illo voluptatibus voluptates quo impedit voluptatum error vitae, omnis praesentium? Aperiam nulla non, nesciunt fuga rem perferendis alias et, temporibus, distinctio culpa unde a laborum libero ducimus. Facilis veniam sit praesentium, voluptatibus sint maxime iusto eaque.</p>
           <div class="button">
             <button>Download CV</button>
           </div>
         </div>
       </div>
       </div>
     </section>
   </>
  )
}
