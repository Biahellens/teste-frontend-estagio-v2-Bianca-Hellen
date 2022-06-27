//dependencies
import React, { FormEvent, useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet-draw/dist/leaflet.draw.css'
import { Marker, Popup } from 'react-leaflet'
import { v4 as uuidv4 } from 'uuid'

import { fetchLocalMapBox } from '../../api/apiMapBox'
import AsyncSelect from 'react-select/async'

//componentes
import { Button, Text, Input } from '../../components'
import {
  Container,
  ContainerInput,
  Fieldset,
  Form,
  FormMap,
  MapId,
  Wrapper,
} from './style'
import './index.css'

//images
import aiko from '../../assets/aiko.png'

interface Machine {
  id: string
  name: string
  address: string
  complement: string
  description: string
  latitude: number
  longitude: number
}

type Position = {
  longitude: number
  latitude: number
}

export function Home() {
  useEffect(() => {
    //Function de pointers
    function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent)
      }
    }

    //adição do mapa
    const map = L.map('mapid').setView([-23.5489, -46.6388], 13)

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`,
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(map)

    //pointers estaticos
    const MachineA = L.marker([-23.5677666, -46.6487763]).bindPopup(
        'Está máquina está em funcionamento - MachineA'
      ),
      MachineB = L.marker([-23.574979, -46.629226]).bindPopup(
        'Está máquina está em funcionamento - MachineB'
      )

    const MachineC = L.marker([-23.5620287, -46.6386148]).bindPopup(
        'Está máquina não está em funcionamento - MachineC'
      ),
      MachineD = L.marker([-23.5514553, -46.6975551]).bindPopup(
        'Está máquina não está em funcionamento - MachineD'
      )

    const machinesOn = L.layerGroup([MachineA, MachineB])
    const machinesOff = L.layerGroup([MachineC, MachineD])
    const machines = L.layerGroup([MachineA, MachineB, MachineC, MachineD])


    const overlayMaps = {
      MachinesOn: machinesOn,
      MachinesOff: machinesOff,
      Machines: machines
    }

    const layerControl = L.control.layers(overlayMaps).addTo(map)
  })

  const initialPosition = { lat: -23.5489, lng: -46.6388 }

  const [machines, setMachines] = useState<Machine[]>([])

  const [position, setPosition] = useState<Position | null>(null)

  const [name, setName] = useState('')
  const [complement, setComplement] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState<{
    label: any
    value: any
  } | null>(null)

  const [location, setLocation] = useState(initialPosition)

  //carrega as opções de endereço
  const loadOptions = async (inputValue: any, callback: any) => {
    const response = await fetchLocalMapBox(inputValue)
    const places: any = []
    if (inputValue.length < 5) return
    response.features.map((item: any) => {
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.place_center,
        place: item.place_name,
      })
    })

    callback(places)
  }

  //seleção do endereço
  const handleChangeSelect = (event: any) => {
    setPosition({
      longitude: event.coords[0],
      latitude: event.coords[1],
    })

    setAddress({ label: event.place, value: event.place })

    setLocation({
      lng: event.coords[0],
      lat: event.coords[1],
    })
  }

  //envia formulário
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!address || !name) return

    setMachines([
      ...machines,
      {
        id: uuidv4(),
        name,
        address: address?.value || '',
        complement,
        description,
        latitude: location.lat,
        longitude: location.lng,
      },
    ])

    setName('')
    setAddress(null)
    setComplement('')
    setPosition(null)
  }

  return (
    <Wrapper>
      <Container width={[1]}>
        <img src={aiko} className="App-logo" alt="logo" />
      </Container>
      <Container width={[1]}>
        <Container width={[1, 0.6]}>
          <MapId id="mapid">
            {position && (
              <Marker
                position={[position.latitude, position.longitude]}
              ></Marker>
            )}

            {machines.map((machine) => (
              <Marker
                key={machine.id}
                position={[machine.latitude, machine.longitude]}
              >
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                >
                  <div>
                    <Text variant="primaryBold">{machine.name}</Text>
                    <Text>
                      {machine.address} - {machine.complement}
                    </Text>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapId>
        </Container>

        <Container width={[0.4]}>
          <FormMap>
            <Form onSubmit={handleSubmit}>
              <Fieldset>
                <Text variant="primaryBold">Nova Máquina</Text>

                <ContainerInput>
                  <Text>Nome</Text>
                  <Input
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </ContainerInput>

                <ContainerInput>
                  <Text>Endereço</Text>

                  <AsyncSelect
                    placeholder="Digite o endereço da máquina..."
                    id="filter"
                    cacheOptions
                    loadOptions={loadOptions}
                    onChange={handleChangeSelect}
                    value={address}
                  />
                </ContainerInput>

                <ContainerInput>
                  <Text>Complemento</Text>
                  <Input
                    placeholder="Apto / Nr / Casa..."
                    id="complement"
                    value={complement}
                    onChange={(event) => setComplement(event.target.value)}
                  />
                </ContainerInput>

                <ContainerInput>
                  <Text>Descrição</Text>
                  <Input
                    placeholder="Em funcionamento ou não?"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </ContainerInput>
              </Fieldset>

              <Button id="confirm-button" type="submit">
                Confirmar
              </Button>
            </Form>
          </FormMap>
        </Container>
      </Container>
    </Wrapper>
  )
}
