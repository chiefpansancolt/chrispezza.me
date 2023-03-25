import ReactHtmlParser from 'react-html-parser'
import educations from '@/data/educations'
import experiences from '@/data/experiences'
import skills from '@/data/skills'
import resources from '@/data/resources'

export default function Work() {
  return (
    <div className="bg-white">
      <div
        className="mx-auto max-w-7xl divide-y divide-slate-200 py-16 px-4 sm:px-6 lg:py-24 lg:px-8"
        id="education"
      >
        <div className="pb-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="mb-10 flex justify-center lg:mb-0">
            <h4 className="text-xl">
              <span className="border-b-4 border-solid border-blue-500 font-bold uppercase tracking-widest">
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
                <div className="block pt-4 text-lg">
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
        <div className="pt-16 lg:grid lg:grid-cols-3 lg:gap-x-8" id="work">
          <div className="mb-10 flex justify-center lg:mb-0">
            <h4 className="text-xl">
              <span className="border-b-4 border-solid border-blue-500 font-bold uppercase tracking-widest">
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
                <div className="block pt-4 text-lg">
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
                                className="absolute top-1 left-1 -ml-px h-full w-0.5 bg-slate-200"
                                aria-hidden="true"
                              />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span className="flex h-2 w-2 items-center justify-center rounded-full bg-slate-400 ring-8 ring-white" />
                              </div>
                              <div className="-mt-3 flex min-w-0 flex-1 justify-between space-x-4 pl-4">
                                <div>
                                  <h5 className="text-lg font-bold">{position.name}</h5>
                                  <p className="pt-2 italic">
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
        <div className="pt-16 lg:grid lg:grid-cols-3 lg:gap-x-8" id="skills">
          <div className="mb-10 flex justify-center lg:mb-0">
            <h4 className="text-xl">
              <span className="border-b-4 border-solid border-blue-500 font-bold uppercase tracking-widest">
                Skills
              </span>
            </h4>
          </div>
          <div className="col-span-2">
            <div className="block">
              Below is Chris&apos;s skills ratings, software, programs, and os usage.
            </div>
            <div className="block pt-4">
              {skills.map((skill) => (
                <div className="relative pt-1" key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <span className="inline-block py-1 text-xs font-semibold uppercase">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 flex h-4 w-11/12 overflow-hidden rounded bg-blue-200 text-xs">
                    <div
                      className={`flex flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none ${skill.class}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-11/12 pt-4">
              {resources.map((resource) => (
                <span
                  key={resource.name}
                  className={`
                  ml-2 mt-2 inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium
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
