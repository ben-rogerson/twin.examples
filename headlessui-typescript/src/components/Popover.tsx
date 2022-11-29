import tw from 'twin.macro'
import React, { Fragment } from 'react'
import { Popover as HeadlessPopover } from '@headlessui/react'
import Icons from './Icons'
import Transition from './Transition'

/**
 * HeadlessUI "Popover"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/popover
 */

type ItemProps = {
  name: string
  description: string
  href: string
}

type PopoverProps = {
  label: string
  items: ItemProps[]
  panelProps?: {
    as?: React.ElementType
    focus?: boolean
    static?: boolean
    unmount?: undefined
  }
}

type TriggerProps = {
  label: string
  open: boolean
}

export default function Popover({ label, items, panelProps }: PopoverProps) {
  if (items.length === 0) return null

  return (
    <HeadlessPopover tw="relative">
      {({ open }) => (
        <>
          <Trigger label={label} open={open} />
          <Transition as={Fragment} {...transitionProps}>
            <HeadlessPopover.Panel
              tw="absolute z-10 w-screen max-w-sm px-4 mt-3 transform left-0 sm:px-0"
              {...panelProps}
            >
              <div tw="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div tw="relative bg-white p-7">
                  <div tw="grid gap-8">{items.map(ContentItem)}</div>
                </div>
                <div tw="p-4 bg-gray-50">
                  <Footer />
                </div>
              </div>
            </HeadlessPopover.Panel>
          </Transition>
        </>
      )}
    </HeadlessPopover>
  )
}

function Footer() {
  return (
    <a
      href="#"
      tw="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:(ring ring-orange-500 ring-opacity-50)"
    >
      <span tw="flex items-center">
        <span tw="text-sm font-medium text-gray-900">Documentation</span>
      </span>
      <span tw="block text-sm text-gray-500">
        Start integrating products and tools
      </span>
    </a>
  )
}

function ContentItem(item: ItemProps) {
  const content = (
    <Fragment>
      <p tw="text-sm font-medium text-gray-900">{item.name}</p>
      <p tw="text-sm text-gray-500">{item.description}</p>
    </Fragment>
  )

  const Illustration = (Illustrations as { [key: string]: any })[item.name]

  return (
    <a
      key={item.name}
      href={item.href}
      tw="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:(ring ring-orange-500 ring-opacity-50)"
    >
      {Illustration ? (
        <Fragment>
          <div tw="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:(h-12 w-12)">
            <Illustration aria-hidden="true" />
          </div>
          <div tw="ml-4">{content}</div>
        </Fragment>
      ) : (
        <div>{content}</div>
      )}
    </a>
  )
}

function Trigger({ label, open }: TriggerProps) {
  return (
    <HeadlessPopover.Button
      className="group"
      css={[
        tw`text-white bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:(ring ring-purple-500 ring-opacity-75)`,
        !open && tw`text-opacity-90`,
      ]}
    >
      <span>{label}</span>
      <Icons.ChevronDown
        css={[
          tw`ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`,
          open && 'text-opacity-70',
        ]}
        aria-hidden="true"
      />
    </HeadlessPopover.Button>
  )
}

const transitionProps = {
  enter: tw`transition ease-out duration-200`,
  enterFrom: tw`opacity-0 translate-y-1`,
  enterTo: tw`opacity-100 translate-y-0`,
  leave: tw`transition ease-in duration-150`,
  leaveFrom: tw`opacity-100 translate-y-0`,
  leaveTo: tw`opacity-0 translate-y-1`,
}

const Illustrations = {
  Insights: ({ ariaHidden = true, ...rest }) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      aria-hidden={ariaHidden}
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  ),
  Automations: ({ ariaHidden = true, ...rest }) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      aria-hidden={ariaHidden}
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  ),
  Reports: ({ ariaHidden = true, ...rest }) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      aria-hidden={ariaHidden}
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  ),
}
