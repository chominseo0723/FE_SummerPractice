import React from 'react'
import { categorys } from '../category'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
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
   <div className='p-4'>
  <ul className="grid grid-cols-4 gap-3">
    {categorys.map((category) => (
      <li key={category.id} className="p-2 hover:shadow-md">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-48 object-cover rounded-md mb-2"
        />
        <Link to={`/category/${category.id}`} className="text-gray-800 hover:underline font-semibold block">
          {category.title}
        </Link>
        <div className="text-sm text-gray-500">{category.owner}</div>
        <div className="text-sm text-gray-500">{category.view} · {category.date}</div>
      </li>
    ))}
  </ul>
</div>

    </>
  )
}

export default Home