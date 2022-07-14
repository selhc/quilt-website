import Image from 'next/future/image'

import { Container } from '@/components/Container'
import logoPrh from '@/images/logos/prh.png'
import logoSjrmc from '@/images/logos/sjrmc.png'

const actors = [
  { name: 'Pullman Regional Hospital', logo: logoPrh },
  { name: 'St. Joseph\'s Regional Medical Center', logo: logoSjrmc }
]

export function Actors() {
  return (
    <section id="actors" aria-label="Actors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Current institutions represented by our taskforce members.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {actors.map((actor) => (
            <div
              key={actor.name}
              className="flex items-center justify-center"
            >
              <Image src={actor.logo} alt={actor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
