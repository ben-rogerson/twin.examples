import 'twin.macro'
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'

const IconsDropdown = {
  ChevronUp: ({ ariaHidden = true, ...rest }) => (
    <ChevronUpIcon aria-hidden={ariaHidden} {...rest} />
  ),
  ChevronDown: ({ ariaHidden = true, ...rest }) => (
    <ChevronDownIcon
      tw="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
      aria-hidden={ariaHidden}
      {...rest}
    />
  ),
  ChevronRight: ({ ariaHidden = true, ...rest }) => (
    <ChevronRightIcon tw="ml-1" aria-hidden={ariaHidden} {...rest} />
  ),
  Edit: ({
    active,
    ariaHidden = true,
    ...rest
  }: {
    active: boolean
    ariaHidden: boolean
  }) => (
    <svg
      {...rest}
      aria-hidden={ariaHidden}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill={active ? '#8B5CF6' : '#EDE9FE'}
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
    </svg>
  ),
  Duplicate: ({
    active,
    ariaHidden = true,
    ...rest
  }: {
    active: boolean
    ariaHidden: boolean
  }) => (
    <svg
      {...rest}
      aria-hidden={ariaHidden}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill={active ? '#8B5CF6' : '#EDE9FE'}
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill={active ? '#8B5CF6' : '#EDE9FE'}
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
    </svg>
  ),
  Archive: ({
    active,
    ariaHidden = true,
    ...rest
  }: {
    active: boolean
    ariaHidden: boolean
  }) => (
    <svg
      {...rest}
      aria-hidden={ariaHidden}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill={active ? '#8B5CF6' : '#EDE9FE'}
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill={active ? '#8B5CF6' : '#EDE9FE'}
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
      <path
        d="M8 12H12"
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
    </svg>
  ),
  Move: ({
    active,
    ariaHidden = true,
    ...rest
  }: {
    active: boolean
    ariaHidden: boolean
  }) => (
    <svg
      {...rest}
      aria-hidden={ariaHidden}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4H16V10"
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
      <path
        d="M16 4L8 12"
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
      <path
        d="M8 6H4V16H14V12"
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
    </svg>
  ),
  Delete: ({
    active,
    ariaHidden = true,
    ...rest
  }: {
    active: boolean
    ariaHidden: boolean
  }) => (
    <svg
      {...rest}
      aria-hidden={ariaHidden}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill={active ? '#8B5CF6' : '#EDE9FE'}
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
      <path
        d="M3 6H17"
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
      <path
        d="M8 6V4H12V6"
        stroke={active ? '#C4B5FD' : '#A78BFA'}
        strokeWidth="2"
      />
    </svg>
  ),
  CheckRounded: ({ ariaHidden = true, ...rest }) => (
    <svg {...rest} aria-hidden={ariaHidden} viewBox="0 0 24 24" fill="none">
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

const IconsSelect = {
  CheckIcon: CheckIcon,
  ChevronUpDownIcon: ChevronUpDownIcon,
}

const Icons = { ...IconsDropdown, ...IconsSelect }

export default Icons
