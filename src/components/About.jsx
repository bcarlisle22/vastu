import React from 'react'
import aboutImage from "../assets/about.webp"

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4 font-light">About</h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20 ">
            <div className="mb-8 lg:mb-0">
                <img src={aboutImage} alt="About VastuSpaze" className="w-full h-auto "/>
            </div>
            <p className="text-lg lg:text-xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                At <span className="font-normal">VastuSpaze</span>, we are passionate about turning houses into dream homes, utilizing our design expertise 
                and unwavering commitment to quality to craft beautiful, functional spaces that perfectly reflect your unique 
                lifestyle and taste. With over a decade of experience, our skilled team specializes in personalized renovations, 
                from modern kitchens and luxurious bathrooms to tranquil outdoor living areas and comfortable home offices, 
                ensuring every project is tailored to your specific needs and desires. Our mission is to elevate the beauty and 
                functionality of your home, creating a space where you can truly thrive.
            </p>
        </div>
    </section>
  )
}

export default About