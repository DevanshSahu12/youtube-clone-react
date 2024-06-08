import {Link} from 'react-router-dom'
import {Typography, Card, CardContent, CardMedia} from '@mui/material'
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants'

const PlaylistCard = ({playlist: {id: {playlistId}, snippet}}) => {
    return (
        <Card sx={{width:'320px', boxShadow: 'none', borderRadius: 0}}>
            <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{width:320, height:180}}
                />
            </Link>
            <CardContent sx={{backgroundColor: '#1E1E1E', height:'90px'}}>
                <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#FFFFFF'>
                        Playlist: {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50) }
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' color='gray'>
                        {snippet?.Channeltitle || demoChannelTitle}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
      )
}

export default PlaylistCard