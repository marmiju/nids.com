"use client";

import { Users,  usertype } from "@/lib/users/Users";
import React, { useEffect, useState } from "react";
// import StudentSearch from "../components/serchBar/StudentSearch";
import TeacherCard from "../components/card/teachersCard/TeachersCard";

const Page = () => {
  const [userData, setUserData] = useState<usertype[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await Users();
      console.log("data:",data)
      setUserData(data);
    };
    fetchUsers();
  }, []);

  // const filteredUsers = userData.filter(
  //   (user) =>
  //     user.name.toLowerCase().includes(searchTerm.toLowerCase()) && user.role == 'teacher'
      
  // );

  return (
    <div className="max-w-[1200px] mx-auto my-10">
      {/* <StudentSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

      <div className="max-w-[1280px] mx-auto flex flex-wrap  space-x-1 space-y-1">
        {userData && userData.map((user)=>{
          console.log(user)
          return <TeacherCard person={user} key={user.id}/>
        })}
      </div>
     
    </div>
  );
};

export default Page;
