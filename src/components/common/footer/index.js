import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    // <div 
    // className='absolute-center max-width' 
    // style={{ backgroundColor: "var(--gray)", color:"black", fontWeight:"600"
    // }}>
    //   <div>Made with 🔥 & 💖 by MKM.</div>
    // </div>
<div>
<footer class="page-footer font-small " style={{ backgroundColor:"black" }}>
  <div class="container">
  <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
        <h5 class="mb-1">Made with 🔥 & 💖 by MKM.</h5>
      </li>
    </ul>
    <div class="row">
      <div class="col-md-12 py-1">
        <div class="mb-5 flex-center">

        <a href="https://www.linkedin.com/in/mohit-kumar-mandhre-ab451b190/">
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>

          <a href="https://github.com/MohitKumarMandhre">
            <i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
          </a>

          <a href="mailto:mohitmandhre@gmail.com">
            <i class="fas fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
          </a>

          <a href="https://join.skype.com/invite/Uy3XlH0UpN34">
            <i class="fab fa-skype fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
          </a>

          <a href="https://mohitkumarmandhre.github.io/MKMPortfolio/">
            <i class="fas fa-briefcase fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
          </a>

        </div>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-1">© 2020 Copyright :
    <a href="#"> MKM </a>
  </div>

</footer>
</div>

  )
}

export default Footer;