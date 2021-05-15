import ReactHtmlParser from 'react-html-parser'
import educations from '@/data/educations'
import experiences from '@/data/experiences'
import skills from '@/data/skills'
import resources from '@/data/resources'

export default function Work() {
  return (
    <div className="bg-white">
      <div
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 divide-y divide-gray-200"
        id="education"
      >
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 pb-8">
          <div className="flex justify-center">
            <h4 className="text-xl">
              <span className="border-solid border-b-4 border-blue-500 uppercase tracking-widest font-bold">
                Education
              </span>
            </h4>
          </div>
          <div className="col-span-2">
            {educations.map((education) => (
              <div key={education.id}>
                <h3 className={`${education.first ? '-mt-4' : 'pt-4'} text-3xl font-bold`}>
                  {education.name}
                </h3>
                <div className="block text-lg pt-4">
                  <span className="italic">
                    {education.degree}
                    {' in '}
                    {education.area}
                  </span>
                  {' • '}
                  <em>{education.graduation}</em>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 pt-16" id="work">
          <div className="flex justify-center">
            <h4 className="text-xl">
              <span className="border-solid border-b-4 border-blue-500 uppercase tracking-widest font-bold">
                Work
              </span>
            </h4>
          </div>
          <div className="col-span-2">
            {experiences.map((experience) => (
              <div key={experience.company}>
                <h3 className={`${experience.first ? '-mt-4' : 'pt-5'} text-3xl font-bold`}>
                  {experience.company}
                </h3>
                <div className="block text-lg pt-4">
                  <span className="italic">{experience.position}</span>
                  {' • '}
                  <em>
                    {experience.start}
                    {' - '}
                    {experience.end}
                  </em>
                </div>
                {experience.positions.length > 0 ? (
                  <div className="flow-root pt-10">
                    <ul>
                      {experience.positions.map((position, positionIdx) => (
                        <li key={position.name}>
                          <div className="relative pb-8">
                            {positionIdx !== experience.positions.length - 1 ? (
                              <span
                                className="absolute top-1 left-1 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span className="h-2 w-2 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-400" />
                              </div>
                              <div className="min-w-0 flex-1 flex justify-between space-x-4 -mt-3 pl-4">
                                <div>
                                  <h5 className="text-lg font-bold">{position.name}</h5>
                                  <p className="italic pt-2">
                                    {position.start}
                                    {' - '}
                                    {position.end}
                                  </p>
                                  <p className="pt-2">{ReactHtmlParser(position.description)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="pt-4">{ReactHtmlParser(experience.description)}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 pt-16" id="skills">
          <div className="flex justify-center">
            <h4 className="text-xl">
              <span className="border-solid border-b-4 border-blue-500 uppercase tracking-widest font-bold">
                Skills
              </span>
            </h4>
          </div>
          <div className="col-span-2">
            <div className="block">
              Below is Chris's skills ratings, software, programs, and os usage.
            </div>
            <div className="block pt-4">
              {skills.map((skill) => (
                <div className="relative pt-1" key={skill.name}>
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 uppercase">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200 w-11/12">
                    <div
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 ${skill.class}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 w-11/12">
              {resources.map((resource) => (
                <span
                  key={resource.name}
                  className={`
                  inline-flex items-center ml-2 mt-2 px-3 py-0.5 rounded-full text-sm font-medium
                  ${
                    resource.type === 'Software'
                      ? 'bg-red-100 text-red-800'
                      : resource.type === 'Programs'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {resource.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
