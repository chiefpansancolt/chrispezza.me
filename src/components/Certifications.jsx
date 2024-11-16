/* eslint-disable @next/next/no-img-element */
import salesforceCertifications from '@/data/salesforce_certifications'
import ncinoCertifications from '@/data/ncino_certifications'
import Link from 'next/link'

export default function Certifications() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 flex justify-center lg:mb-0">
          <h4 className="text-xl">
            <Link
              href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=6G3owgggG1JJQtqmZEXXJnwkqVnzAiE8e2KxdsFb3G04A8YeYm6DcQpbm4/fVDxp"
              className="cursor-pointer border-b-4 border-solid border-blue-500 font-bold uppercase tracking-widest"
            >
              Salesforce Certifications
            </Link>
          </h4>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          {salesforceCertifications.map((cert) => (
            <div key={cert.name} className="col-span-1 flex justify-center bg-slate-100 px-8 py-8">
              <Link href={cert.href}>
                <img className="max-h-32 cursor-pointer" src={cert.img} alt={cert.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 flex justify-center lg:mb-0">
          <h4 className="text-xl">
            <Link
              href="https://www.credly.com/users/christopher-pezza/badges"
              className="cursor-pointer border-b-4 border-solid border-blue-500 font-bold uppercase tracking-widest"
            >
              nCino Certifications
            </Link>
          </h4>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          {ncinoCertifications.map((cert) => (
            <div key={cert.name} className="col-span-1 flex justify-center bg-slate-100 px-8 py-8">
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
