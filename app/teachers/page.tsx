"use client";

import { Users,  usertype } from "@/lib/users/Users";
import React, { useEffect, useState } from "react";
const TeacherCard = dynamic(() => import("../components/card/teachersCard/TeachersCard"));
import dynamic from "next/dynamic";

const Page = () => {
  const [userData, setUserData] = useState<usertype[]>([]);
  

  useEffect(() => {

    const fetchUsers = async () => {
      const data = await Users();
      console.log("data:",data)
      setUserData(data);
    };
    fetchUsers();
  }, [userData]);


  return (
    <div className="max-w-[1200px] mx-auto my-10">
      {/* <StudentSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

      <div className="max-w-[1280px] mx-auto flex flex-wrap  space-x-1 space-y-1">
        {userData && userData.map((user)=>{
          console.log(user)
          return <TeacherCard person={user} key={user.id} />
        
        })}
      </div>
     
    </div>
  );
};

export default Page;
