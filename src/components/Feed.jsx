import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {SideBar, Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack 
      sx={{
        flexDirection: {
          sx:"column",
          md:"row"
        }
      }}
    >
      <Box 
        sx={{
          borderRight:"1px solid #3d3d3d",
          height: {sx:'auto', md:'auto'},
          px: {sx:0, md:2}
        }}
      >
        <Typography 
          className="made-by"
          variant="body2"
          sx={{
            color:'#ffffff',
            mt:'1.5'
          }}
        >
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          Made by Devansh Sahu
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2
        }}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{
            color: 'white'
          }}
        >
          {selectedCategory} <span style={{color:'#F31503'}}>videos</span>
        </Typography>

        <Videos videos={videos}/>

      </Box>
    </Stack>
  )
}

export default Feed