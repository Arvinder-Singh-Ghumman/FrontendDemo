import Progress from '../components/Progress';

const Skills = () => {
  return (
    <div className="Skills" id='Portfolio'>
      <div className="skillLeft">
        <h1>Our skills & expertise</h1>
        <p>
          We help company set up business strategy including design brand
          identiy or product design service. So company can focus on their core
          business. Morbi accumsan ipsum velit. Nam nec tellus.
        </p>
        <button className="buttonFill">We are in the press</button>
      </div>
      <div className="skillRight">
        <Progress percent="96%" title="Branding" />
        <Progress percent="81%" title="Design & Development" />
        <Progress percent="90%" title="PR & Marketing" />
        <Progress percent="88%" title="Design & Development" />
      </div>
    </div>
  );
};

export default Skills;
