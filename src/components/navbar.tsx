import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export function Navbar(){
    return(
        <div className="fixed w-full bg-black h-16 flex justify-between items-center">
            <div className="flex items-center ml-5">
                <DensityMediumIcon className="text-white" />
                <img src="Youtube-Logo-PNG.jpg" className="hidden h-8 ml-5 lg:block" />
            </div>
            <div className="flex items-center outline-slate-800">
                <input className="bg-zinc-900 text-white rounded-l-lg h-8 w-2/5 md:w-80" placeholder="    Search" />
                <button className="bg-zinc-700 rounded-r-lg h-8 w-20">
                    <SearchIcon className="text-white" />
                </button>
                <div className="flex items-center bg-zinc-700 rounded-full ml-2 w-9 h-9">
                <button className="flex items-center">
                    <MicIcon sx={{display:"flex", justifyItems:"center", marginLeft:"6px", color:"white "}} />
                </button>
                </div>
            </div>
            <div className="flex items-center">
                <button className="hover:bg-zinc-700 rounded-full ml-2 w-9 h-9">
                    <VideoCallIcon className="text-white" />
                </button>
                <button className="hover:bg-zinc-700 rounded-full ml-2 w-9 h-9">
                    <NotificationsNoneIcon className="text-white" />
                </button>
                <img src='My project-1 (1).png' className='ml-2 mr-10 w-9 h-9'>
                </img>
            </div>
        </div>
    )
}