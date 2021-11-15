import tw from 'twin.macro'
import React from 'react'
import { Disclosure as HeadlessDisclosure } from '@headlessui/react'
import Icons from './Icons'
import Transition from './Transition'

/**
 * HeadlessUI "Disclosure"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/disclosure
 */

type DisclosureProps = {
  items: { heading: string; content: React.ReactNode }[]
  disclosureProps?: { as?: React.ElementType; defaultOpen?: boolean }
  buttonProps?: { as?: React.ElementType }
  panelProps?: {
    as?: React.ElementType
    static?: boolean
    unmount?: undefined
    tw?: string
  }
}

export default function Disclosure({
  items,
  disclosureProps,
  buttonProps,
  panelProps = {},
}: DisclosureProps) {
  if (!items) return null

  return (
    <div tw="p-2 space-y-2 bg-white rounded-2xl">
      {items.map(item => {
        return (
          <HeadlessDisclosure key={item.heading} {...disclosureProps}>
            {({ open }) => (
              <div>
                <HeadlessDisclosure.Button
                  tw="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:(ring ring-purple-500 ring-opacity-75)"
                  {...buttonProps}
                >
                  <span>{item.heading}</span>
                  <Icons.ChevronUp
                    css={[
                      tw`w-5 h-5 text-purple-500`,
                      open && tw`transform rotate-180`,
                    ]}
                  />
                </HeadlessDisclosure.Button>
                <Transition show={open} {...transitionProps}>
                  <HeadlessDisclosure.Panel
                    static
                    tw="px-4 pt-4 pb-2 text-sm text-gray-500"
                    {...panelProps}
                  >
                    {item.content}
                  </HeadlessDisclosure.Panel>
                </Transition>
              </div>
            )}
          </HeadlessDisclosure>
        )
      })}
    </div>
  )
}

const transitionProps = {
  enter: tw`transition ease-out duration-100`,
  enterFrom: tw`transform opacity-0 scale-95`,
  enterTo: tw`transform opacity-100 scale-100`,
  leave: tw`transition ease-out duration-75`,
  leaveFrom: tw`transform opacity-100 scale-100`,
  leaveTo: tw`transform opacity-0 scale-95`,
}
