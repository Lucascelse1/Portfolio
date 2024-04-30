import { useEffect, useState } from "react"
import { getBack } from "../Skills/skillsList"
import BackSkillsList from "../BackSkillsList/BackSkillsList"
import { GoDatabase } from "react-icons/go"

const BackSkillsContainer = () => {
    const [backSkills, setBackSkills] = useState([])

    useEffect(() => {
        getBack()
            .then((response) => {
                setBackSkills(response)
            })
            .catch((error) => {
                console.error(error)
            })
    })

    return (
        <article className="w-8/12 font-['Anta']">
            <h5 className="mb-6 text-2xl flex items-center gap-x-3">Back-End<GoDatabase /></h5>
            <div className="flex w-full gap-x-10 items-baseline text-center ml-6">
                <BackSkillsList backSkills= { backSkills } />
            </div>
        </article>
    )
}

export default BackSkillsContainer