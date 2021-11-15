import tw, { TwStyle } from 'twin.macro'
import React, { Fragment, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Transition from './Transition'

/**
 * HeadlessUI "Dialog (Modal)"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/dialog
 */

type ContentProps = {
  title: string
  content: React.ReactNode
  closeModal?: () => void
  closeLabel: string
  titleProps?: { as?: React.ElementType }
  descriptionProps?: { as?: React.ElementType }
}

type ModalProps = {
  children: React.ReactNode
  dialogProps?: {
    open?: boolean
    onClose?: () => void
    tw?: string
    initialFocus?: React.MutableRefObject<HTMLElement | null>
    static?: boolean
    unmount?: undefined
  } & { as?: React.ElementType }
  contentProps: ContentProps
  dialogOverlayProps?: { as?: React.ElementType }
  titleProps?: { as?: React.ElementType }
  descriptionProps?: { as?: React.ElementType }
}

type TriggerProps = { label: React.ReactNode; openModal: () => void }

export default function Modal({
  children,
  dialogProps,
  contentProps,
  dialogOverlayProps,
  titleProps,
  descriptionProps,
}: ModalProps) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <Fragment>
      <Trigger label={children} openModal={openModal} />
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          tw="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          {...dialogProps}
        >
          <div tw="min-h-screen px-4 text-center">
            <Transition.Child {...overlayTransitionProps} as="div">
              <Dialog.Overlay
                tw="fixed inset-0 bg-black opacity-30"
                {...dialogOverlayProps}
              />
            </Transition.Child>
            <CenterAlignmentHack />
            <Transition.Child {...contentTransitionProps} as={Fragment}>
              <div tw="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl text-gray-900">
                <Content
                  {...contentProps}
                  titleProps={titleProps}
                  descriptionProps={descriptionProps}
                  closeModal={closeModal}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  )
}

function Content({
  title,
  content,
  closeModal,
  closeLabel,
  titleProps,
  descriptionProps,
}: ContentProps) {
  return (
    <Fragment>
      <Dialog.Title
        as="h3"
        tw="text-lg font-medium leading-6 text-gray-900"
        {...titleProps}
      >
        {title}
      </Dialog.Title>
      <Dialog.Description {...descriptionProps}>
        This payment was debited from your account
      </Dialog.Description>
      <div tw="mt-2">
        <div tw="text-sm text-gray-500">{content}</div>
      </div>
      <div tw="mt-4">
        <button
          type="button"
          tw="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:(ring-2 ring-offset-2 ring-blue-500)"
          onClick={closeModal}
        >
          {closeLabel}
        </button>
      </div>
    </Fragment>
  )
}

function Trigger({ label, openModal }: TriggerProps) {
  return (
    <button
      type="button"
      onClick={openModal}
      tw="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75)"
    >
      {label}
    </button>
  )
}

/* This element is to trick the browser into centering the modal contents. */
function CenterAlignmentHack() {
  return (
    <span tw="inline-block h-screen align-middle" aria-hidden="true">
      &#8203;
    </span>
  )
}

const overlayTransitionProps = {
  enter: tw`ease-out duration-300`,
  enterFrom: tw`opacity-0`,
  enterTo: tw`opacity-100`,
  leave: tw`ease-in duration-200`,
  leaveFrom: tw`opacity-100`,
  leaveTo: tw`opacity-0`,
}

const contentTransitionProps = {
  enter: tw`ease-out duration-300`,
  enterFrom: tw`opacity-0 scale-95`,
  enterTo: tw`opacity-100 scale-100`,
  leave: tw`ease-in duration-200`,
  leaveFrom: tw`opacity-100 scale-100`,
  leaveTo: tw`opacity-0 scale-95`,
}
