import FrontSkills from "../FrontSkills/FrontSkills"

const FrontSkillsList = ({frontSkills}) => {
  return (
    frontSkills.map(skill => {
        return <FrontSkills key={ skill.name } { ...skill}  />
    })
  )
}

export default FrontSkillsList