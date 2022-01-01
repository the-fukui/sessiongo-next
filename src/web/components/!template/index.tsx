import React, { useEffect } from 'react'
import style from './index.module.scss'

type ContainerProps = {
  className?: string
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({ className = '' }) => (
  <div className={`${className}`}></div>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */

  const presenterProps = {}

  return { ...props, ...presenterProps }
}

export default function Component(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
