import React, { useEffect } from 'react'
import { podcastCardImg } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEpisodes } from '../features/episodeSlice'
import EpisodeCard from '../components/podcasts/EpisodeCard'
import { useNavigate } from 'react-router-dom'
import { BackIcon } from '../components/icons'
import AddEpisode from '../components/podcasts/AddEpisode'

export default function Library({podcast}) {
  const {episodes} = useSelector(state => state.episodes)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getAllEpisodes(podcast?._id))
  }, [podcast])
  return (
    <div className='p-7 w-full h-full'>
      <div className="flex gap-3 items-center">
        <div onClick={() => navigate(-1)} className="p-1.5 cursor-pointer rounded-full hover:bg-color-card">
          <BackIcon size={18}/>
        </div>
        <h2 className="sm:text-xl tracking-wider font-semibold text-color-font">My Podcasts</h2>
        <p className='text-2xl font-light'> | </p>
        <h2 className="sm:text-lg tracking-wider font-medium text-color-font">{podcast?.name || "title"}</h2>
      </div>
    <div className='flex flex-col md:flex-row pb-4 w-full h-full'>
      <div className='md:w-5/12 h-full p-4 flex flex-col items-center gap-4'>
        <div>
          <img src={podcastCardImg} className='w-64 rounded-lg shadow-lg' />
        </div>
        <div className='self-start'>
          <h2 className='text-3xl font-semibold mb-2'>title</h2>
          <h2 className='text-base font-medium'>by Speaker</h2>
          <h2 className='text-xs font-light'>22 episodes 2.2M views Last updated on May 21, 2023</h2>
          <div className='flex justify-between gap-4 my-4'>
            <button className='px-4 py-2 text-sm font-semibold w-full bg-color-font text-color-card rounded-full '>Play all</button>
            <button className='px-4 py-2 text-sm font-semibold w-full bg-color-font text-color-card rounded-full '>Save</button>
          </div>
          <div className="w-full text-base ">
            description
          </div>
        </div>
      </div>
      <div className='p-4 w-full h-full overflow-y-auto space-y-3'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <h2 className='text-lg text-color-font font-semibold'>Episodes</h2>
          <p className='text-color-bg text-sm px-2.5 py-1 rounded-full font-mono font-semibold bg-color-font'>{episodes?.length}</p>
          </div>
          <AddEpisode/>
        </div>
        <div className='space-y-3'>
          {episodes?.map(ep => <EpisodeCard key={ep?._id} episode={ep} />)}
          </div>
      </div>
    </div>
    </div>
  )
}
