import { FiCornerDownRight } from "react-icons/fi";
import FrontSkillsContainer from "../FrontSkillsContainer/FrontSkillsContainer"
import BackSkillsContainer from "../BackSkillsContainer/BackSkillsContainer";

const Skills = () => {
  return (
    <section className="bg-white text-black mt-10 w-full flex flex-col items-center gap-y-10 py-10">
      <h1 className="text-5xl w-9/12 flex"><FiCornerDownRight /> Skills</h1>
      <FrontSkillsContainer />
      <article className="w-8/12">
      <BackSkillsContainer />
      </article>
    </section>
  )
}

export default Skills
