import BackSkills from "../BackSkills/BackSkills"

const BackSkillsList = ( { backSkills } ) => {
  return (
    backSkills.map(skill => {
        return <BackSkills key={ skill.name } { ...skill }  />
    })
  )
}

export default BackSkillsList