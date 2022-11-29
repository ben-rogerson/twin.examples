import tw from 'twin.macro'

/**
 * HeadlessUI "Transition" Demo
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/transition
 */

import Transition from './Transition'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'

export default function TransitionDemo() {
  let [isShowing, setIsShowing] = useState(true)
  let resetIsShowing = useTimeoutFn(() => setIsShowing(true), 500)[2]

  return (
    <div tw="flex flex-col items-center">
      <div tw="w-32 h-32">
        <Transition as={Fragment} show={isShowing} {...transitionProps}>
          <div tw="w-full h-full bg-white rounded-md shadow-lg" />
        </Transition>
      </div>

      <button
        onClick={() => {
          setIsShowing(false)
          resetIsShowing()
        }}
        tw="flex items-center px-3 py-2 mt-8 text-sm font-medium text-white transition transform bg-black rounded-full [backface-visibility:hidden] active:bg-opacity-40 hover:(scale-105 bg-opacity-30) focus:outline-none bg-opacity-20"
      >
        <svg viewBox="0 0 20 20" fill="none" tw="w-5 h-5 opacity-70">
          <path
            d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <span tw="ml-3">Click to transition</span>
      </button>
    </div>
  )
}

const transitionProps = {
  enter: tw`transform transition duration-[400ms]`,
  enterFrom: tw`opacity-0 rotate-[-120deg] scale-50`,
  enterTo: tw`opacity-100 rotate-0 scale-100`,
  leave: tw`transform duration-200 transition ease-in-out`,
  leaveFrom: tw`opacity-100 rotate-0 scale-100`,
  leaveTo: tw`opacity-0 scale-95`,
}
