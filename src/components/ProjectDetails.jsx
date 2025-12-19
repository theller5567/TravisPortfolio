import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


const ProjectDetails = ({title, description, subDescription, image, tags, href, closeModal}) => {
  const modalId = `project-details-${title.replace(/\s+/g, '-').toLowerCase()}`;
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${modalId}-title`}
        aria-describedby={`${modalId}-description`}>
        <motion.div
        className="relative max-w-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        style={{
            maxHeight: '90vh',
            overflowY: 'auto',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        id={modalId}>
            <button
                onClick={() => {closeModal(true)}}
                className="absolute p-2 rounded-sm border-1 border-white top-3 right-3 bg-midnight hover:bg-gray-500"
                aria-label="Close project details">
                <img src="./assets/close.svg" alt="" className={`${isMobile ? 'w-8 h-8' : 'w-6 h-6'}`} aria-hidden="true" />
                <span className="sr-only">Close modal</span>
            </button>
            <img src={image} alt={`${title} project screenshot`} className="w-full rounded-t-2xl" />
            <div className="p-5">
                <h2 id={`${modalId}-title`} className="text-2xl font-bold text-white mb-2">{title}</h2>
                <p id={`${modalId}-description`} className="text-neutral-400 mb-4">{description}</p>
                <div aria-label="Project details">
                    {subDescription.map((subDesc, index) => (
                        <p className="mb-3 font-normal text-neutral-400" key={index}>{subDesc}</p>
                    ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-3" role="list" aria-label="Technologies used in this project">
                        <span className="sr-only">Built with: </span>
                        {tags.map((tag) => (
                            <img
                            src={tag.path}
                            alt={`${tag.name} technology logo`}
                            key={tag.id}
                            className="rounded size-10 hover-animation"
                            role="listitem" />
                        ))}
                    </div>
                    <a
                        href={href}
                        className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${title} project live (opens in new tab)`}>
                        View Project
                        <img src="./assets/arrow-up.svg" className="size-4" alt="" aria-hidden="true" />
                        <span className="sr-only">Opens in new tab</span>
                    </a>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectDetails;