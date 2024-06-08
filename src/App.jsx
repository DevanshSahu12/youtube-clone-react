import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material';
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed, PlaylistDetails} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000000'}}>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/playlist/:id" element={<PlaylistDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App