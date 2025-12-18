import React from 'react'
import { experiences } from '../constants'
import { Timeline } from '../components/Timeline'

const Experiences = () => {
  return (
    <section id="experience" className="w-full">
        <Timeline data={experiences} />
        {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {experiences.map((experience) => (
                <Card key={experience.id} {...experience} />
            ))}
        </div> */}
    </section>
  )
}

export default Experiences