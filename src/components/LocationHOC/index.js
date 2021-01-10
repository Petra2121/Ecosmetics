import React from 'react'
import { Location } from '@reach/router'

const LocationHOC = ({children}) => (
  <Location>
    {location => React.cloneElement(children, {...location})}
  </Location>
)

export default LocationHOC