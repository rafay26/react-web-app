import React from 'react';
import GradientBackground from './GradientBackground'; // Assuming you have a reusable GradientBackground component
import './About.css'; // Import CSS for About component

const About = () => {
  return (
      <div className="container mt-4">
        <h1>About Us</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra scelerisque urna, at gravida elit mollis nec. Nulla facilisi. Nullam bibendum mauris et urna sagittis, a egestas dolor rutrum. Sed interdum sit amet lorem vitae tincidunt. Integer eu ultricies nunc, ac ultricies eros. Suspendisse potenti.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra lectus sit amet nisi consectetur, at consequat felis volutpat. Nulla vitae leo eu dolor lobortis elementum. Sed suscipit semper tortor, vel pharetra elit tincidunt a. Vivamus auctor risus sed magna ultricies, a volutpat neque consequat.
        </p>
        <p>
          Integer eget bibendum felis, sed consectetur purus. Nam efficitur semper tincidunt. Phasellus varius urna magna, a ultricies justo placerat vitae. Proin tristique nibh nec libero congue, vel rutrum nisi malesuada. Mauris dignissim felis sed nunc tincidunt, a mollis lorem interdum. Aliquam erat volutpat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis lectus nec sem mattis, non ullamcorper nunc cursus. Suspendisse potenti. Cras ultricies tempor ligula, sed suscipit felis varius at. In hac habitasse platea dictumst.
        </p>
      </div>
  );
};

export default About;
