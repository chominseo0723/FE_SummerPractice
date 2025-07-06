import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-row gap-4 ml-80 mt-2'>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>전체</div>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>음악</div>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>믹스</div>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>게임</div>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'> 뉴스</div>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>라이브</div>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>애니메이션</div>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>최근에 업로드된 동영상</div> 
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>감상한 동영상</div>
        <div className='border rounded-lg px-2 py-1 bg-gray-100 hover:bg-gray-900 hover:text-white'>새로운 맞춤 동영상</div>
    </div>
  )
}

export default Home