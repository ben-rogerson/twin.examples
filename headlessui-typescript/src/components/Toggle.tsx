import 'twin.macro'
import tw from 'twin.macro'
import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

/**
 * HeadlessUI "Switch (Toggle)"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/switch
 */

type Switch = {
  as?: React.ElementType
  checked?: boolean
  onChange?: () => void
}

type Label = {
  as?: React.ElementType
  passive?: boolean
}

type ToggleProps = {
  label: string
  description?: string
  groupProps?: { as?: React.ElementType }
  labelProps?: Label
  descriptionProps?: { as?: React.ElementType }
  switchProps?: Switch
}

type SwitchLabelProps = {
  label: string
  description?: string
  labelProps?: Label
  descriptionProps?: { as?: React.ElementType }
}

export default function Toggle({
  label,
  description,
  groupProps,
  labelProps,
  descriptionProps,
  switchProps,
}: ToggleProps) {
  return (
    <Switch.Group {...groupProps}>
      <div tw="flex items-center justify-between">
        <SwitchLabel
          label={label}
          description={description}
          labelProps={labelProps}
          descriptionProps={descriptionProps}
        />
        <SwitchKnob switchProps={switchProps} />
      </div>
    </Switch.Group>
  )
}

function SwitchLabel({
  label,
  description,
  labelProps,
  descriptionProps,
}: SwitchLabelProps) {
  return (
    <Switch.Label tw="block pr-5 w-full" {...labelProps}>
      {label && <div>{label}</div>}
      {description && (
        <Switch.Description tw="text-green-800" {...descriptionProps}>
          {description}
        </Switch.Description>
      )}
    </Switch.Label>
  )
}

function SwitchKnob({ switchProps }: { switchProps?: Switch }) {
  const [enabled, setEnabled] = useState(false)
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      css={[
        tw`h-[38px] w-[74px]
            relative inline-flex flex-shrink-0
            border-2 border-transparent rounded-full cursor-pointer
            transition-colors ease-in-out duration-200
            focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75)`,
        enabled ? tw`bg-teal-900` : tw`bg-teal-700`,
      ]}
      {...switchProps}
    >
      <span
        aria-hidden="true"
        css={[
          tw`h-[34px] w-[34px]
              pointer-events-none inline-block
              rounded-full bg-white shadow-lg transform ring-0
              transition ease-in-out duration-200`,
          enabled ? tw`translate-x-9` : tw`translate-x-0`,
        ]}
      />
    </Switch>
  )
}
