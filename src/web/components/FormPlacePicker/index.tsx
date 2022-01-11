import React, { useEffect, useRef, ComponentProps, useState } from 'react'
import style from './index.module.scss'
import GoogleMapReact from 'google-map-react'
import { TextField, Grid, Box } from '@mui/material'

export type Place = {
  ID: string
  address: string
  region: string
  country: string
  postalCode: string
  name: string
  lat: number
  lng: number
} | null

type ContainerProps = {
  className?: string
  spacing?: ComponentProps<typeof Grid>['spacing']
  place: Place
  setPlace: React.Dispatch<React.SetStateAction<Place>>
}

type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  handleApiLoaded,
  placeInput,
  defaultCenter,
  spacing,
}) => (
  <>
    <TextField label="開催場所" inputRef={placeInput} fullWidth />
    <Box mt={spacing} height={300} borderRadius={1} overflow={'hidden'}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
          libraries: ['places'],
        }}
        defaultCenter={defaultCenter}
        defaultZoom={15}
        onGoogleApiLoaded={({
          map,
          maps,
        }: {
          map: any
          maps: typeof google.maps
        }) => handleApiLoaded(map, maps)}
      />
    </Box>
  </>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { setPlace } = props

  const defaultCenter = {
    lat: 35.66, // 緯度経度
    lng: 139.74,
  }
  const placeInput = useRef<HTMLInputElement>(null)
  const handleApiLoaded = (map: any, maps: typeof google.maps) => {
    if (placeInput.current) {
      const LatLngFrom = new maps.LatLng(45.3326, 148.4508)
      const LatLngTo = new maps.LatLng(24.2658, 122.5601)
      const bounds = new maps.LatLngBounds(LatLngTo, LatLngFrom)
      const autocomplete = new maps.places.Autocomplete(placeInput.current, {
        bounds,
        strictBounds: false,
        fields: [
          'geometry',
          'place_id',
          'name',
          'address_components',
          'vicinity',
        ],
        types: ['establishment'],
      })
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (!place.geometry || !place.geometry.location) return

        console.log(place)
        const {
          name: placeName,
          place_id: placeID,
          geometry,
          address_components,
        } = place
        const lat = geometry.location?.lat()
        const lng = geometry.location?.lng()
        let address = place.vicinity
        let country: string = ''
        let region: string = ''
        let postalCode: string = ''
        address_components &&
          address_components.forEach((addressComponent) => {
            if (addressComponent.types.includes('country'))
              return (country = addressComponent.long_name)
            if (addressComponent.types.includes('administrative_area_level_1'))
              return (region = addressComponent.long_name)
            if (addressComponent.types.includes('postal_code'))
              return (postalCode = addressComponent.long_name)
            return
          })

        if (placeInput.current) {
          //開催場所フィールドには店名・地名のみ表示
          placeInput.current.value = placeName || ''
        }

        if (
          placeName &&
          placeID &&
          lat &&
          lng &&
          region &&
          country &&
          address &&
          postalCode
        ) {
          setPlace({
            name: placeName,
            ID: placeID,
            lat: lat,
            lng: lng,
            region,
            country,
            address,
            postalCode,
          })
        }

        //mapを選択された地点にセンタリングする
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport)
        } else {
          map.setCenter(place.geometry.location)
          map.setZoom(17)
        }
      })
    }
  }

  const presenterProps = {
    handleApiLoaded,
    placeInput,
    defaultCenter,
  }

  return { ...props, ...presenterProps }
}

export default function FormPlacePicker(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
