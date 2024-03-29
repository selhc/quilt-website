import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

let schedule = [
  {
    date: 'July 11th',
    dateTime: '2022-07-11',
    summary:
      "Our first meeting will be focused on <a class='underline underline-offset-8' href='https://carequality.org'>Carequality</a> and <a class='underline underline-offset-8' href='https://www.commonwellalliance.org'>Commonwell</a>.",
    timeSlots: [
      {
        name: 'Brief Introductions',
        description: "Which Actor you represent and what is the status of your Actor's interoperability capability?",
        start: '9:00AM',
        end: '9:15AM',
      },
      {
        name: "National HIE's",
        description: "Level of Commonwell and Carequaltiy support within each actor.",
        start: '9:15AM',
        end: '9:30AM',
      },
      {
        name: "Information blocking exceptions",
        description: "Review the information blocking exceptions and discuss why these should be special cased with default open",
        start: '9:30AM',
        end: '10:00AM',
      },
      {
        name: "Enumerate barriers for full interoperability for each Actor",
        description: "Discussion of barriers",
        start: '10:00AM',
        end: '10:00AM',
      }
    ],
  },
  {
    date: 'August 1st',
    dateTime: '2022-08-01',
    summary:
      "Second meeting focused on barriers to interoperability identified for each Actor",
    timeSlots: [
      {
        name: 'Update on Carequality and Commonwell support',
        description: 'National HIE\'s',
        start: '9:00AM',
        end: '9:15AM',
      },
      {
        name: 'SJRMC Update and USCDI discussion',
        description: 'Technical discussion',
        start: '9:15AM',
        end: '9:45AM',
      },
      {
        name: 'Discuss missing media kits',
        description: 'Website review?',
        start: '9:45AM',
        end: '10:00AM'
      }
    ]
  },
  {
    date: 'August 15th',
    dateTime: '2022-08-15',
    summary:
      "Third meeting focused on state HIE interoperability with National HIE's",
    timeSlots: [
      {
        name: 'Update on IDHE integration with Carequality and Commonwell',
        description: 'ID support for National HIE\'s',
        start: '9:00AM',
        end: '9:15AM',
      },
      {
        name: 'Update on OneHealthPort integration with Carequality and Commonwell',
        description: 'WA support for National HIE\'s',
        start: '9:15AM',
        end: '9:30AM',
      },
      {
        name: 'Review Vendor/Actor Matrix',
        description: 'What EHR\'s are in operation in which organizations',
        start: '9:30AM',
        end: '9:45AM'
      },
      {
        name: 'Review CARES Act Timeline',
        description: 'Milestones for interoperability requirements',
        start: '9:45AM',
        end: '10:00AM'
      }
    ]
  },
  {
    date: 'August 30th',
    dateTime: '2022-08-29',
    summary:
      "Fourth meeting focused on vendor costs",
    timeSlots: [
      {
        name: 'Review Vendor/Actor Matrix for Carequality support',
        description: 'Will vendors commit?',
        start: '9:00AM',
        end: '9:15AM',
      },
      {
        name: 'Establish vendor cost quotes for interoperability support in compliance with the 21st Century Cures Act',
        description: 'Vendor costs',
        start: '9:15AM',
        end: '9:30AM',
      },
      {
        name: 'Review Vendor/Actor Matrix',
        description: 'What EHR\'s are in operation in which organizations',
        start: '9:30AM',
        end: '9:45AM'
      },
      {
        name: 'Decide whether to file an information blocking complaint against any vendor charging for interoperability implementation',
        description: 'None of us is as gullible as all of us!',
        start: '9:45AM',
        end: '10:00AM'
      }
    ]
  },
  {
    date: 'September 12th',
    dateTime: '2022-09-12',
    summary:
      "Fifth meeting focused on vendor costs",
    timeSlots: [
      {
        name: 'Review Vendor/Actor Matrix for FHIR support',
        description: 'October 6th, 2022 deadline for FHIR support',
        start: '9:00AM',
        end: '9:15AM',
      },
      {
        name: 'Establish vendor cost quotes for interoperability support in compliance with the 21st Century Cures Act',
        description: 'Vendor Quotes',
        start: '9:15AM',
        end: '9:30AM',
      }
    ]
  },
  {
    date: 'September 26th',
    dateTime: '2022-09-26',
    summary:
      "Sixth meeting again focused on vendor costs",
    timeSlots: [
      {
        name: 'Review Vendor/Actor Matrix for FHIR support',
        description: 'December 31st, 2022 deadline for FHIR support',
        start: '9:00AM',
        end: '9:15AM',
      },
      {
        name: 'Establish other vendor cost quotes for interoperability support in compliance with the 21st Century Cures Act',
        description: 'Vendor Quotes',
        start: '9:15AM',
        end: '9:30AM',
      }
    ]
  },
  {
    date: 'October 10th',
    dateTime: '2022-10-10',
    summary:
      "Seventh meeting focused on public messaging and FHIR support.",
    timeSlots: [
      {
        name: 'Discuss what the group desires for public access to meeting information.',
        description: 'QUILT infrastructure/governance',
        start: '9:00AM',
        end: '9:10AM',
      },
      {
        name: 'Review Vendor/Actor Matrix for FHIR support',
        description: 'December 31st, 2022 deadline for FHIR support',
        start: '9:10AM',
        end: '9:15AM',
      },
      {
        name: 'Finish other vendor cost quotes for interoperability support in compliance with the 21st Century Cures Act',
        description: 'Vendor Quotes',
        start: '9:15AM',
        end: '9:30AM',
      }
    ]
  },
  {
    date: 'November 7th',
    dateTime: '2022-11-07',
    summary:
      "Eighth meeting focused on engaging other stakeholders.",
    timeSlots: [
      {
        name: 'Discuss engaging Whitman County and Gritman.',
        description: 'Stakeholder Engagement',
        start: '9:20AM',
        end: '9:30AM',
      },
      {
        name: 'Onsite collaboration planning.',
        description: 'Explore real-world interoperability challenges by visiting Actor sites.',
        start: '9:30AM',
        end: '9:45AM',
      }
    ]
  },
  {
    date: 'April 10th',
    dateTime: '2023-04-10',
    summary:
      "Focus on FHIR API",
    timeSlots: [
      {
        name: 'Discuss FHIR API support progress',
        description: 'FHIR API',
        start: '9:30AM',
        end: '9:40AM',
      },
      {
        name: 'PRH Epic interoperability plan',
        description: 'Explore real-world interoperability challenges with Epic',
        start: '9:40AM',
        end: '9:45AM',
      },
      {
        name: 'Vendor real-world testing updates',
        description: 'Examine any real-world testing results from EHR vendors',
        start: '9:45AM',
        end: '10:00AM',
      }
    ]
  }
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          )).reverse()
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        <span dangerouslySetInnerHTML={{__html: day.summary}} />
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      )).reverse()}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Meeting Agendas
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The taskforce strives for transparency in our meetings and actions. A summary of our meeting agendas by date of meeting.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
