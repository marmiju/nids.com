import { usertype } from '@/lib/users/Users'
import Image from 'next/image';
import React from 'react'
import avatar from '@/public/avatar.png'


interface UserCartProps {
  data: usertype;
}

export const UserCart: React.FC<UserCartProps> = ({ data }) => {
  let ranking;
  let color;
  if (data.contestPoints <= 200) {
    ranking = 'bronze'
    color = '#FF1111'
  } else if (data.contestPoints <= 500) {
    ranking = 'Silver'
    color = '#FF8811'
  }
  else if (data.contestPoints <= 1200) {
    ranking = 'Gold'
    color = '#DCFF11'
  }
  else if (data.contestPoints <= 2000) {
    ranking = 'diamond'
    color = '#01FFAF'
  } else if (data.contestPoints <= 5000) {
    ranking = 'Master'
    color = '#016BFF'
  } else {
    ranking = 'Legend'
    color = '#60BEFE'
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
            {
              data.role == 'student' ? <p style={{ backgroundColor: color }} className={` rounded-2xl text-sm px-2 $`}>{
                data.role === 'student' ? ranking : data.rank
              }
              </p> : <p></p>
            }
          </div>
          <p className='text-lg font-medium text-black'>{data.name}</p>
          <h1>{data.department}</h1>
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

