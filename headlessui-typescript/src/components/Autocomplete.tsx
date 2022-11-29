import tw from 'twin.macro'
import React, { Fragment, useState } from 'react'
import { Combobox } from '@headlessui/react'
import Icons from './Icons'
import Transition from './Transition'

/**
 * HeadlessUI "Combobox (Autocomplete)"
 * Customized for twin.macro + typescript
 * https://headlessui.com/react/combobox
 */

type ComboboxOption = { name: string }

type SelectProps = {
  items: ComboboxOption[]
  ComboboxProps?: {
    as?: React.ElementType
    disabled?: boolean
    value?: string
    onChange?: () => void
    horizontal?: boolean
  }
  ComboboxOptionsProps?: {
    as?: React.ElementType
    static?: boolean
    unmount?: undefined
  }
}

type OptionProps = {
  label: string
  active: boolean
  selected: boolean
}

export default function Select({
  items,
  ComboboxProps,
  ComboboxOptionsProps,
}: SelectProps) {
  const [selected, setSelected] = useState(items[0])
  const [query, setQuery] = useState('')

  if (items.length === 0) return null

  const filteredItems =
    query === ''
      ? items
      : items.filter(item =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  return (
    <Combobox
      value={selected}
      tw="focus-within:z-10 relative"
      onChange={setSelected}
      {...ComboboxProps}
    >
      {({ open }) => (
        <div tw="relative mt-1">
          <Label open={open} setQuery={setQuery} />
          <Transition {...transitionProps} afterLeave={() => setQuery('')}>
            {filteredItems.length > 0 && (
              <Combobox.Options
                tw="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                {...ComboboxOptionsProps}
              >
                {filteredItems.map(ComboboxOption)}
              </Combobox.Options>
            )}
          </Transition>
        </div>
      )}
    </Combobox>
  )
}

function ComboboxOption(item: ComboboxOption, index: number) {
  return (
    <Combobox.Option as={Fragment} key={index} value={item}>
      {props => <Option label={item.name} {...props} />}
    </Combobox.Option>
  )
}

function Label({
  setQuery,
}: {
  open: boolean
  setQuery: (query: string) => void
}) {
  return (
    <div tw="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
      <Combobox.Input
        tw="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:(outline-none ring-0)"
        displayValue={(i: ComboboxOption) => i.name}
        onChange={event => setQuery(event.target.value)}
      />
      <Combobox.Button tw="absolute inset-y-0 right-0 flex items-center pr-2">
        <Icons.ChevronUpDownIcon
          tw="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Combobox.Button>
    </div>
  )
}

const Option = React.forwardRef(
  (
    { label, active, selected, ...rest }: OptionProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        css={[
          tw`cursor-default select-none relative py-2 pl-10 pr-4`,
          active ? tw`bg-teal-600 text-white` : tw`text-gray-900`,
        ]}
        ref={ref}
        {...rest}
      >
        <span
          css={[
            tw`block truncate`,
            selected ? tw`font-medium` : tw`font-normal`,
          ]}
        >
          {label}
        </span>
        {selected && (
          <span
            css={[
              tw`absolute inset-y-0 left-0 flex items-center pl-3`,
              active ? tw`text-white` : tw`text-teal-600`,
            ]}
          >
            <Icons.CheckIcon tw="w-5 h-5" aria-hidden="true" />
          </span>
        )}
      </div>
    )
  },
)

const transitionProps = {
  leave: tw`transition ease-in duration-100`,
  leaveFrom: tw`opacity-100`,
  leaveTo: tw`opacity-0`,
}
