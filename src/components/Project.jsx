import React from 'react'
import ProjectDetails from './ProjectDetails'
import { useState } from 'react';

const Project = ({title, description, subDescription, href, image, tags, setPreview}) => {
    const [isHidden, setIsHidden] = useState(false);
  return (
    <>
        <article
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        aria-label={`Project: ${title}`}>
            <div>
                <h3 className="text-2xl">{title}</h3>
                <div className="flex gap-5 mt-2 text-mint" role="list" aria-label="Technologies used">
                    <span className="sr-only">Built with: </span>
                    {tags.map((tag) => (
                        <span key={tag.id} role="listitem" aria-label={`Technology: ${tag.name}`}>{tag.name}</span>
                    ))}
                </div>
            </div>
            <button
                onClick={() => {setIsHidden(true)}}
                className="flex items-center gap-1 cursor-pointer hover-animation mt-5"
                aria-label={`View details for ${title} project`}
                aria-expanded={isHidden}
                aria-controls={`project-details-${title.replace(/\s+/g, '-').toLowerCase()}`}>
                Read More
                <img src="assets/arrow-right.svg" alt="" className="w-5" aria-hidden="true" />
                <span className="sr-only">Opens project details modal</span>
            </button>
        </article>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" aria-hidden="true" />
        {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  )
}

export default Project