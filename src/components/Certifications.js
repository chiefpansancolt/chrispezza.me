import salesforceCertifications from '@/data/salesforce_certifications'
import Link from 'next/link'

export default function Certifications() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex justify-center mb-10 lg:mb-0">
          <h4 className="text-xl">
            <Link href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=6G3owgggG1JJQtqmZEXXJnwkqVnzAiE8e2KxdsFb3G04A8YeYm6DcQpbm4/fVDxp">
              <span className="border-solid border-b-4 border-blue-500 uppercase tracking-widest font-bold cursor-pointer">
                Salesforce Certifications
              </span>
            </Link>
          </h4>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          {salesforceCertifications.map((cert) => (
            <div key={cert.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <Link href={cert.href}>
                <img className="max-h-32 cursor-pointer" src={cert.img} alt={cert.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
