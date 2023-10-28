import Image from 'next/image'
import Link from 'next/link'

import localFont from 'next/font/local'
const cooper = localFont({ src: '../public/CooperBlackStd.woff2' })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${cooper.className}`}>
      <header className='h-24 w-full flex items-center px-24 justify-between bg-white'>
        <Image height={100} width={300} alt='efo-logo' src='/logo.svg' />
        <div className='flex flex-col'>
          <span className='text-black font-bold text-xl'>Eisenbahnfreunde Ostbelgien VoG*</span>
          <span className='text-black font-bold text-right'>*VoG in Gründung</span>
        </div>
      </header>
      <div className="flex-1 h-full w-full bg-[url('/background.jpg')] bg-cover flex items-center justify-center">
        <div className='flex flex-col p-8 bg-gray-900/70 backdrop-blur-md space-y-8 max-w-[700px] rounded-2xl items-center justify-center'>
          <Image height={200} width={200} alt='efo-logo' className='' src={'/EFO_Logo.svg'}/>
          <span className='text-center font-bold text-4xl'>
            Seite im Aufbau und VoG in Gründung.
          </span>
          <span className='text-center font-semibold text-xl'>
            Hier bald die neue seite des neuen ostbelgischen Eisenbahnvereines.
          </span>
        </div>
        <div className='flex flex-col p-8 bg-gray-900/70 backdrop-blur-md space-y-16 max-w-[750px] rounded-2xl absolute right-8 bottom-8'>
        <div className='flex items-center justify-center space-x-8'>
          <span className='text-red-500'>Hier geht&apos;s zur unserem Schwesterverein:<br/> Eisenbahnfreunde Grenzland eV</span>
            <Link href={'https://eisenbahnfreunde-grenzland.de/'} className='py-2 px-8 text-center bg-white rounded-md text-black font-bold hover:bg-gray-300 transition-colors duration-200 flex space-x-2 items-center'>
            <span>Zur</span>
              <Image height={36} width={40} alt='efg-logo' src={'/EFG_Logo.png'} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
