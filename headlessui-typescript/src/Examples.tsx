import React from 'react'
import tw, { TwStyle } from 'twin.macro'
import {
  Dropdown,
  Select,
  Autocomplete,
  Toggle,
  Disclosure,
  Modal,
  Popover,
  RadioGroup,
  Tabs,
  Icons,
} from './components'
import TransitionDemo from './components/TransitionDemo'

/**
 * Headless UI usage examples
 */

export default function Examples() {
  return (
    <Container>
      <Dropdown
        items={[
          [
            { label: 'Edit', onClick: () => {} },
            { label: 'Duplicate', onClick: () => {} },
          ],
          [
            { label: 'Archive', onClick: () => {} },
            { label: 'Move', onClick: () => {} },
          ],
          [{ label: 'Delete', onClick: () => {} }],
        ]}
      >
        Options
      </Dropdown>

      <Select
        items={[
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]}
      />

      <Autocomplete
        items={[
          { name: 'Wade Cooper' },
          { name: 'Arlene Mccoy' },
          { name: 'Devon Webb' },
          { name: 'Tom Cook' },
          { name: 'Tanya Fox' },
          { name: 'Hellen Schmidt' },
        ]}
      />

      <Toggle
        label="Enable notifications"
        description="For extra noise"
        groupProps={{}}
        labelProps={{}}
        descriptionProps={{}}
        switchProps={{}}
      />

      <Disclosure
        items={[
          {
            heading: 'What is your refund policy?',
            content:
              'If you’re unhappy with your purchase for any reason, email us within 90 days and we’ll refund you in full, no questions asked.',
          },
          {
            heading: 'Do you offer technical support?',
            content: 'No.',
          },
        ]}
      />

      <Modal
        contentProps={{
          title: 'Payment successful',
          content: (
            <p>
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
            </p>
          ),
          closeLabel: 'Got it, thanks!',
        }}
      >
        Open dialog
      </Modal>

      <Popover
        label="Solutions"
        items={[
          {
            name: 'Insights',
            description: 'Measure actions your users take',
            href: '#',
          },
          {
            name: 'Automations',
            description: 'Create your own targeted content',
            href: '#',
          },
          {
            name: 'Reports',
            description: 'Keep track of your growth',
            href: '#',
          },
        ]}
      />

      <RadioGroup
        screenReaderLabel="Server size"
        items={[
          {
            name: 'Startup',
            ram: '12GB',
            cpus: '6 CPUs',
            disk: '160 GB SSD disk',
          },
          {
            name: 'Business',
            ram: '16GB',
            cpus: '8 CPUs',
            disk: '512 GB SSD disk',
          },
          {
            name: 'Enterprise',
            ram: '32GB',
            cpus: '12 CPUs',
            disk: '1024 GB SSD disk',
          },
        ]}
      />

      <TransitionDemo />

      <Tabs
        items={{
          Recent: [
            {
              id: 1,
              title: 'Does drinking coffee make you smarter?',
              date: '5h ago',
              commentCount: 5,
              shareCount: 2,
            },
            {
              id: 2,
              title: "So you've bought coffee... now what?",
              date: '2h ago',
              commentCount: 3,
              shareCount: 2,
            },
          ],
          Popular: [
            {
              id: 1,
              title: 'Is tech making coffee better or worse?',
              date: 'Jan 7',
              commentCount: 29,
              shareCount: 16,
            },
            {
              id: 2,
              title: 'The most innovative things happening in coffee',
              date: 'Mar 19',
              commentCount: 24,
              shareCount: 12,
            },
          ],
          Trending: [
            {
              id: 1,
              title:
                'Ask Me Anything: 10 answers to your questions about coffee',
              date: '2d ago',
              commentCount: 9,
              shareCount: 5,
            },
            {
              id: 2,
              title: "The worst advice we've ever heard about coffee",
              date: '4d ago',
              commentCount: 1,
              shareCount: 2,
            },
          ],
        }}
        tabGroupProps={{}}
      />
    </Container>
  )
}

/**
 * Usage example ends here =====================================================
 */

const exampleData: [string, string, TwStyle][] = [
  [
    'Menu (Dropdown)',
    'https://headlessui.dev/react/menu',
    tw`to-indigo-500 from-purple-500`,
  ],
  [
    'Listbox (Select)',
    'https://headlessui.dev/react/listbox',
    tw`from-amber-300 to-orange-500`,
  ],
  [
    'Combobox (Autocomplete)',
    'https://headlessui.com/react/combobox',
    tw`from-teal-400 to-cyan-400`,
  ],
  [
    'Switch (Toggle)',
    'https://headlessui.dev/react/switch',
    tw`from-green-400 to-cyan-500`,
  ],
  [
    'Disclosure',
    'https://headlessui.dev/react/disclosure',
    tw`from-fuchsia-500 to-purple-600`,
  ],
  [
    'Dialog (Modal)',
    'https://headlessui.dev/react/dialog',
    tw`from-sky-400 to-indigo-500`,
  ],
  [
    'Popover',
    'https://headlessui.dev/react/popover',
    tw`from-orange-400 to-pink-600`,
  ],
  [
    'Radio Group',
    'https://headlessui.dev/react/radio-group',
    tw`from-cyan-400 to-sky-500`,
  ],
  [
    'Transition',
    'https://headlessui.dev/react/transition',
    tw`from-pink-500 to-rose-500`,
  ],
  ['Tabs', 'https://headlessui.dev/react/tabs', tw`from-sky-400 to-blue-600`],
]

type ExampleProps = {
  className?: string
  children: React.ReactNode
  index: number
}

function Example({ className, children, index }: ExampleProps) {
  const [heading, demoUrl, gradientStyles] = exampleData[index] || []
  return (
    <div css={[tw`space-y-4`, gradientStyles]}>
      <h2 tw="text-xl font-bold text-3xl">{heading}</h2>
      <div
        tw="p-10 relative rounded-xl bg-gradient-to-r shadow-lg text-black"
        {...{ className }}
      >
        {children}
      </div>
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        tw="inline-block"
      >
        Docs
        <Icons.ChevronRight tw="inline w-4 h-4" />
      </a>
    </div>
  )
}

function Container({ children }: { children: React.ReactNode[] }) {
  if (!children) return null

  return (
    <div tw="flex flex-col items-center py-36">
      <div tw="w-full max-w-[500px] space-y-20">
        {children.map((item, index) => (
          <Example key={index} index={index}>
            {item}
          </Example>
        ))}
      </div>
    </div>
  )
}
