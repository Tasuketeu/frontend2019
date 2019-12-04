import React from 'react';
import s from './Footer.module.css';

const Footer =()=>{
  return(
   <footer>
   <div className={s.footer}>
     <div class="container">
       <div class="row">
         <div class="col-md-12 ">
           <p className={s.footerText}>Сайт разработан Accenture</p>
         </div>
       </div>
     </div>
   </div>
   </footer>
  );
}

export default Footer;

