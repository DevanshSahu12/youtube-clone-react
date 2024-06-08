import {Link} from 'react-router-dom'
import {Box, Typography, CardContent, CardMedia} from '@mui/material'
import {demoChannelUrl, demoChannelTitle, demoProfilePicture} from '../utils/constants'

const ChannelCard = ({channel, marginTop}) => {
    console.log(channel)

  return (
    <Box sx={{
            width: {md: '320px', xs: '100%' }, 
            boxShadow: 'none', 
            borderRadius: 0, 
            display:'flex', 
            flexDirection:'column', 
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            margin:'auto',
            marginTop: marginTop,
            pt:'30px'
        }}
    >
        <Link to={`/channel/${channel?.id?.channelId}`}>
            <CardMedia 
                image={channel?.snippet?.thumbnails?.high?.url}
                alt={channel?.snippet?.title}
                sx={{width:180, height:180, borderRadius:'50%', backgroundColor: '#000000'}}
            />
        </Link>
        <CardContent sx={{backgroundColor: '#000000', height:'60px'}}>
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFFFFF'>
                    {channel?.snippet?.title}
                </Typography>
                {channel?.statistics?.subscriberCount && (
                    <Typography variant='subtitle2' color='gray'>
                        {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </Link>
        </CardContent>

    </Box>
  )
}

export default ChannelCard