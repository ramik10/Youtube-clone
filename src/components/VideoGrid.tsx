import { VideoCard } from "./videocard"

const videos=[
    {title:"How to learn anything within 5 minutes",channel:"Ramik Mukherjee",views:"45k views . 1 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"},
    {title:"How to learn anything within 4 minutes",channel:"Ramik Mukherjee",views:"45k views . 2 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"},
    {title:"How to learn anything within 3 minutes",channel:"Ramik Mukherjee",views:"45k views . 3 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"},
    {title:"How to learn anything within 2 minutes",channel:"Ramik Mukherjee",views:"45k views . 4 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"},
    {title:"How to learn anything within 1 minutes",channel:"Ramik Mukherjee",views:"45k views . 5 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"},
    {title:"How to learn anything within 0 minutes",channel:"Ramik Mukherjee",views:"45k views . 6 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"},
    {title:"How to learn anything within 5 minutes",channel:"Ramik Mukherjee",views:"45k views . 7 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"},
    {title:"How to learn anything within 5 minutes",channel:"Ramik Mukherjee",views:"45k views . 8 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"},
    {title:"How to learn anything within 5 minutes",channel:"Ramik Mukherjee",views:"45k views . 9 day ago",thumbnail:"61c32ad02e88b70889182ca7_how-to-create-youtube-thumbnails-1.png",channelImage:"download.jpeg"}
]

export function VideoGrid(){
    return(
        <div className="grid grid-cols-12 mt-5">
            {videos.map((video)=>{
                return(
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 ml-2 mr-2 mt-2">
                <VideoCard key={video.title} title={video.title} channel={video.channel} views={video.views} thumbnail={video.thumbnail} channelImage={video.channelImage}/>
            </div>
            )})
            }
        </div>
    )
}