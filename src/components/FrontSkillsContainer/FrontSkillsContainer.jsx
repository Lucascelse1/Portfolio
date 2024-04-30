import { useState, useEffect } from "react";
import { getFront } from "../Skills/skillsList";
import FrontSkillsList from "../FrontSkillsList/FrontSkillsList"
import { GoDeviceDesktop } from "react-icons/go"

const FrontSkillsContainer = () => {
  const [frontSkills, setFrontSkills] = useState([])

  useEffect(() => {
    getFront()
      .then((response) => {
        setFrontSkills(response)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return (
    <article className="w-8/12 font-['Anta']">
      <h5 className="mb-6 text-2xl flex items-center gap-x-3">Front-End<GoDeviceDesktop /></h5>
      <div className="flex w-full gap-x-10 items-baseline text-center ml-4">
        <FrontSkillsList frontSkills={ frontSkills }/>
      </div>
    </article>
  )
}

export default FrontSkillsContainer
