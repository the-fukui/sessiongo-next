import React, { useEffect, ComponentProps } from 'react'
import style from './index.module.scss'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
} from '@mui/material'
import { SESSION_FEATURE_LABELS } from '@shared/constants'
import {
  Controller,
  Control,
  UseFormSetValue,
  UseFormGetValues,
  FieldValues,
} from 'react-hook-form'

type ContainerProps = {
  className?: string
  control: Control
  setValue: UseFormSetValue<FieldValues>
  getValues: UseFormGetValues<FieldValues>
} & ComponentProps<typeof FormControl>
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  features,
  control,
  setValue,
  getValues,
  handleCheck,
  ...formControlProps
}) => (
  <FormControl className={`${className}`} {...formControlProps}>
    <FormLabel>特徴</FormLabel>
    <FormGroup row>
      <Controller
        name="features"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <>
            {features.map((feature) => (
              <FormControlLabel
                {...field}
                key={feature.value}
                control={
                  <Checkbox
                    value={feature.value}
                    onChange={(event) =>
                      field.onChange(handleCheck(feature.value, event))
                    }
                  />
                }
                label={feature.label}
              />
            ))}
          </>
        )}
      />
    </FormGroup>
  </FormControl>
)

const useContainer = (props: ContainerProps) => {
  const { getValues, setValue } = props

  /**
   * Options
   */
  const features = (
    Object.keys(
      SESSION_FEATURE_LABELS,
    ) as (keyof typeof SESSION_FEATURE_LABELS)[]
  ).map((key) => {
    return {
      value: key,
      label: SESSION_FEATURE_LABELS[key],
    }
  })

  /**
   * React hook formに配列形式でset
   */
  const handleCheck = (
    value: keyof typeof SESSION_FEATURE_LABELS,
    event: React.ChangeEvent<{}>,
  ) => {
    let values: string[] = getValues('features') || []
    values = values.filter((v) => v) // 空要素削除

    let newValues: string[] = []
    if ((event.target as HTMLInputElement).checked) {
      newValues = [...(values ?? []), value]
    } else {
      newValues = values?.filter((value) => value !== value)
    }
    setValue('features', newValues)

    return newValues
  }

  const presenterProps = {
    features,
    handleCheck,
  }

  return { ...props, ...presenterProps }
}

export default function FormSessionPostFeatures(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
