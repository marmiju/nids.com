"use client";

import { Users,  usertype } from "@/lib/users/Users";
import React, { useEffect, useState } from "react";
import StudentSearch from "../components/serchBar/StudentSearch";
import TeacherCard from "../components/card/teachersCard/TeachersCard";

const Page = () => {
  const [userData, setUserData] = useState<usertype[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await Users();
      setUserData(data);
    };
    fetchUsers();
  }, [userData]);

  const filteredUsers = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) && user.role == 'teacher'
      
  );

  return (
    <div className="max-w-[1200px] mx-auto">
      <StudentSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="max-w-[1280px] mx-auto flex flex-wrap  space-x-1 space-y-1">
        {filteredUsers.length > 0
          ? filteredUsers.map((data: usertype) => (
            <TeacherCard key={data.id} person={data}/>
          ))
          : " Not Found"}
      </div>
    </div>
  );
};

export default Page;
