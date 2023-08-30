import HomeIcon from '@mui/icons-material/Home';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Drawer(){
    return(
            <div className="bg-black h-screen ml-4 mt-5 py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
               <HomeIcon/>
               <span className="ml-3">Home</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
               <MusicVideoIcon/>
               <span className="ml-3">Music</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
               <HistoryIcon/>
               <span className="ml-3">History</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
                <AccountCircleIcon/>
               <span className="ml-3">Your channel</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
               <HistoryIcon/>
               <span className="ml-3">Watch later</span>
            </a>
         </li>
        </ul>
        </div>

    )
}