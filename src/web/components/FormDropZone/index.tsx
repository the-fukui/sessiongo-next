import React, { useMemo, useState, ComponentProps } from 'react'
import style from './index.module.scss'
import { useDropzone } from 'react-dropzone'
import { Controller, Control } from 'react-hook-form'
import { Box } from '@mui/material'
import { Cancel } from '@mui/icons-material'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'

type ContainerProps = {
  className?: string
  control: Control<any, object>
  inputName: string
} & ComponentProps<typeof Box>
type Props = ReturnType<typeof useContainer>

const baseStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  width: '100%',
  height: '150px',
}

const focusedStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

const Presenter: React.VFC<Props> = ({
  className = '',
  getRootProps,
  getInputProps,
  isDragActive,
  control,
  inputName,
  preview,
  createPreview,
  dropZoneStyle,
  deletePreview,
  ...boxProps
}) => (
  <Box {...boxProps}>
    <Controller
      control={control}
      name={inputName}
      render={({ field: { onChange } }) => (
        <div {...getRootProps({ style: dropZoneStyle })}>
          <input
            id={inputName}
            {...getInputProps()}
            onChange={(e) => {
              if (!e?.target?.files?.[0]) return
              createPreview(e.target.files[0])
              onChange(e.target.files[0])
            }}
          />
          {isDragActive ? (
            <p>ここにファイルをドロップして画像を設定 ...</p>
          ) : (
            <p>ここにドラッグ＆ドロップ、またはここをクリックで画像を設定</p>
          )}
        </div>
      )}
    />
    {preview && (
      <Box position={'relative'} borderRadius={1} maxWidth={300}>
        <img
          src={preview}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <ButtonUnstyled
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            transform: 'translateY(-50%) translateX(50%)',
            cursor: 'pointer',
          }}
          onClick={deletePreview}
        >
          <Cancel fontSize="large" />
        </ButtonUnstyled>
      </Box>
    )}
  </Box>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */

  const [preview, setPreview] = useState<string | null>()

  const createPreview = (file: File) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      setPreview(fileReader.result as string)
    }
  }

  const deletePreview = () => {
    setPreview(null)
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: 'image/*' })

  const dropZoneStyle = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      display: preview ? 'none' : 'block',
    }),
    [isFocused, isDragAccept, isDragReject, preview],
  )

  const presenterProps = {
    getRootProps,
    getInputProps,
    isDragActive,
    createPreview,
    preview,
    dropZoneStyle,
    deletePreview,
  }

  return { ...props, ...presenterProps }
}

export default function FormDropZone(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
