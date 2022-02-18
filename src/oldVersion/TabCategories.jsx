import React from 'react';
import Tabs from "./components/Tabs";
import './styles/biography.css';
import './styles/background.css';
import mePhoto from './images/me.png'

function TabCategories() {
  return (
    
    <div className="Tabs">
      <Tabs> 
       <div label="Bio"> 
       <div className="tab-head">
       <div className="animation-container">
       {/* include animation here */}
       </div>
       <div className="description">
         <h1>Biography</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit quisquam labore possimus aperiam blanditiis ipsa fugiat, magni sapiente esse excepturi quo, dolorum pariatur necessitatibus a est accusamus ducimus debitis perferendis consequatur omnis eos quidem cum. Rem sequi quo, quidem quisquam veniam illo quos vero aspernatur totam dicta maxime nam aut temporibus tenetur dolore. Ad vel voluptatem officia, deleniti obcaecati praesentium numquam repudiandae porro qui iure doloremque necessitatibus ullam placeat et ipsa facere nemo voluptatum unde? Distinctio, magnam. Ratione ad enim ipsa laudantium perferendis veniam accusantium neque dolor consequuntur ut, molestias consequatur deserunt distinctio sed numquam ea et, quae quia?</p>
       </div>
       <figure className="figure_me">
         <img src={mePhoto} alt="EstebanLasso"/>
         <div className="circle1"></div>
       </figure>


       </div>
       

       <div className="separator">
         <div className="circle"></div>
         <div className="circle"></div>
         <div className="circle"></div>
       </div>

       <footer className='footer'></footer>


       </div> 
       <div label="Design"> 
       
       </div> 
       <div label="Programming"> 
       
       </div> 
       <div label="VideoGame"> 
       
       </div> 
       <div label="Physics"> 
       
       </div>        
     </Tabs> 
    </div>
  );
}

export default TabCategories;
