import React, { useState, useEffect } from 'react'
import { Row, Avatar, Card, Divider } from 'antd'
import { all } from './listings-service'
import { useHistory } from 'react-router-dom'
import './style.css'

const { Meta } = Card

export const Listings = () => {
  const [listings, setListings] = useState()
  const [selectedId, setSelectedId] = useState(undefined)
  const history = useHistory()

  useEffect(async () => {
    const response = await all()
    setListings(response.json())
  }, [])

  useEffect(() => {
    selectedId && history.push(`/listings/${selectedId}`)
  }, [selectedId])

  const CardView = ({
    id = '',
    title = "Default Title",
    description = "Default Text",
    img = "default_holder.js/100px180",
    buttonText = '',
    link = ''
  }) => (
    <Card
      id={id}
      hoverable
      style={{ width: 300, marginBottom: '1rem', padding: '1px' }}
      onClick={e => setSelectedId(id)}
      cover={
        <img
          alt={description}
          src={img}
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={title}
        description={description}
      />
    </Card>
  )

  return (
    <Row justify='space-around'>
      {
        listings?.map((i, index) => 
        <>
        <CardView key={index} {...i} />
        </>)
      }
    </Row>
  )
}

export default Listings