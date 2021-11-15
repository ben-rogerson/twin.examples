import tw from 'twin.macro'
import React, { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import Icons from './Icons'
import Transition from './Transition'

/**
 * HeadlessUI "Menu (Dropdown)"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/menu
 */

type DropdownItems = {
  label: string
  onClick: () => void
}

type MenuItemProps = { as?: React.ElementType; disabled?: boolean }

type DropdownProps = {
  items: DropdownItems[][]
  menuProps?: { as?: React.ElementType }
  menuItemsProps?: {
    as?: React.ElementType
    static?: boolean
    unmount?: undefined
  }
  menuItemProps?: MenuItemProps
  children: React.ReactNode
}

export default function Dropdown({
  items,
  menuProps,
  menuItemsProps,
  menuItemProps,
  children,
}: DropdownProps) {
  if (items.length === 0) return null

  return (
    <Menu
      as="div"
      tw="relative inline-block text-left focus-within:z-10"
      {...menuProps}
    >
      {({ open }) => (
        <Fragment>
          <Label children={children} open={open} />
          <Transition {...transitionProps}>
            <Menu.Items
              tw="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              {...menuItemsProps}
            >
              <Fragment>
                {items.map((group, index) => (
                  <ItemGroup
                    key={index}
                    group={group}
                    menuItemProps={menuItemProps}
                  />
                ))}
              </Fragment>
            </Menu.Items>
          </Transition>
        </Fragment>
      )}
    </Menu>
  )
}

function ItemGroup({
  group,
  menuItemProps,
}: {
  group: DropdownItems[]
  menuItemProps?: MenuItemProps
}) {
  return (
    <div tw="p-1">
      {group.map((item, index) => (
        <Item {...item} key={index} menuItemProps={menuItemProps} />
      ))}
    </div>
  )
}

function Item({
  label,
  menuItemProps,
  ...rest
}: {
  label: string
  menuItemProps?: MenuItemProps
}) {
  const Icon = (Icons as { [key: string]: any })[label] || Icons['Edit']
  return (
    <Menu.Item key={label} {...menuItemProps}>
      {({ active }: { active: boolean }) => (
        <button
          css={[
            active ? tw`bg-violet-500 text-white` : tw`text-gray-900`,
            tw`flex rounded-md items-center w-full p-2 text-sm`,
          ]}
          {...rest}
        >
          {Icon({ active, css: tw`w-5 h-5 mr-2` })}
          {label}
        </button>
      )}
    </Menu.Item>
  )
}

type LabelProps = {
  children: React.ReactNode
  open: boolean
}

function Label({ children, open }: LabelProps) {
  return (
    <Menu.Button tw="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75)">
      {children}
      <Icons.ChevronDown css={open && tw`rotate-180`} />
    </Menu.Button>
  )
}

const transitionProps = {
  enter: tw`ease-out duration-100`,
  enterFrom: tw`opacity-0 scale-75`,
  enterTo: tw`opacity-100 scale-100`,
  leave: tw`ease-in duration-75`,
  leaveFrom: tw`opacity-100 scale-100`,
  leaveTo: tw`opacity-0 scale-95`,
}
