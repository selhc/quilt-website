import Image from 'next/future/image'

import { Container } from '@/components/Container'
import logoPrh from '@/images/logos/prh.png'
import logoSjrmc from '@/images/logos/sjrmc.png'
import logoSEL from '@/images/logos/sel.jpg'
import logoCatalyst from '@/images/logos/catalyst.jpg'

const actors = [
  { name: 'Schweitzer Engineering Laboratories Health Clinic', logo: logoSEL, href: 'https://selhealthclinic.com' },
  { name: 'Pullman Regional Hospital', logo: logoPrh, href: 'https://pullmanregional.org' },
  { name: 'St. Joseph\'s Regional Medical Center', logo: logoSjrmc, href: 'https://sjrmc.org' },
  { name: 'Catalyst Medical Group', logo: logoCatalyst, href: 'https://catalystmedicalgroup' }
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
              <a href={actor.href}>
                <Image src={actor.logo} alt={actor.name} unoptimized />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
