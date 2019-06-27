import React from 'react'
import axios from '../../utils/axios'
import {prop} from 'ramda'
import {setStorage, getStorage} from '../../utils/localStorage'
import styled from 'styled-components'
import Logo from '../../images/logo.png'
const Container = styled.div`
  background-color: #303435;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 30px;
`

const Image = styled.img`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`
const Home = props => {

  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (!data) {
      axios().get('/people/1/')
        .then(response => {
          const data = prop('data', response)
          setData(data)
          setLoading(false)
          setStorage('data', data)
        })
        .catch(error => {
          setData(getStorage('data'))
          setLoading(false)
        })
    }

  })
  
  return (
    <Container>
      <div>
        <div>{data && data.name} {loading && 'Loading...'}</div>
        <Image src={Logo} alt=""/>
      </div>
    </Container>
  )
}

export default Home