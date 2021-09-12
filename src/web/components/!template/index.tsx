import React, { useEffect, useRef } from 'react'
import style from './index.module.scss'

interface Props {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '' }) => (
  <div className={`${className}`}></div>
)

export default Component
