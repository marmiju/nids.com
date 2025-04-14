import { usertype } from '@/lib/users/Users'
import Image from 'next/image';
import React from 'react'
import avatar from '@/public/avatar.png'


interface UserCartProps {
  data: usertype;
}

export const UserCart: React.FC<UserCartProps> = ({ data }) => {
  let ranking;
  if (data.contestPoints <= 200) {
    ranking = 'bronze'
  } else if (data.contestPoints <= 500) {
    ranking = 'Silver'
  }
  else if (data.contestPoints <= 1200) {
    ranking = 'Gold'
  }
  else if (data.contestPoints <= 2000) {
    ranking = 'diamond'
  } else if (data.contestPoints <= 5000) {
    ranking = 'Master'
  } else {
    ranking = 'Legend'
  }


  return (
    <div className=' shadow-sm  text-gray-600 border-gray-200 border rounded-xl p-2'>
      {/* first section */}
      <div className='flex space-x-5'>
        {/* for Icon */}
        <div>
          <Image src={avatar} alt='avatar' width={100} height={100} />
        </div>
        {/* for first poperties */}
        <div className='w-full'>
          <div className='flex justify-between  text-sm'>
            <p>@{data.username}</p>
            <p className={` rounded-2xl text-sm px-2 text-white ${data.contestPoints < 500 ? 'bg-red-500' : 'bg-green-600'}`}>{
              data.role === 'student' ? ranking : data.rank
            }
            </p>
          </div>
          <p className='text-lg font-medium text-black'>{data.name}</p>
          <h1>{data.semester}</h1>
        </div>
      </div>
      {/* second Section */}
      <details className='text-sm'>
        <summary>More </summary>

        <div>
          <p> point: {data.contestPoints ?? 'new'}</p>
          <h1>Email: {data.email}</h1>
          <h1>phone: {data.phone}</h1>
          <h1>phone: {data.phone}</h1>
        </div>
      </details>
    </div>
  )
}

