import { Stack, Box } from "@mui/material"
import {VideoCard, ChannelCard, PlaylistCard} from "./"

const Videos = ({videos, direction}) => {
  console.log(videos)

if(!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
          {item.id.playlistId && <PlaylistCard playlist={item} />}
        </Box>

      ))}
    </Stack>
  )
}

export default Videos