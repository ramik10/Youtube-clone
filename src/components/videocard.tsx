
type props = {
    title: string,
    channel: string,
    views: string,
    thumbnail: string,
    channelImage: string
}

export function VideoCard(props: props){
    return(
        <div>
            <img className="rounded-lg" src={props.thumbnail} />
            <div className="grid grid-cols-12">
                <div className="col-span-2 md:col-span-2">
                <img className="rounded-full" src={props.channelImage}></img>
                </div>
                <div className="mt-2 col-span-10 md:col-span-10 ">
                    <h1 className="text-white" >{props.title}</h1>
                    <p className="text-gray-400">{props.channel}</p>
                    <p className="text-gray-400">{props.views}</p>
                </div>
            </div>
        </div>
    )
}