import React from 'react'

const Footer = () => {
   return (
      <footer className="footer-container flex justify-around mt-15 pt-10 font-medium bg-gray-800 text-white pb-10">
         <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
               <li><a href="/about">About Us</a></li>
               <li><a href="/services">Services</a></li>
               <li><a href="/contact">Contact</a></li>
               <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
         </div>

         <div className="footer-info">
            <h3>Contact</h3>
            <p>123 Main Street, Anytown, USA</p>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Phone: (555) 123-4567</p>
         </div>
      </footer>
   )
}

export default Footer