import React from "react";

const SingleCardWithTitle = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
    return (
        <div className="col-span-4 md:col-span-2 lg:col-span-1  border border-text/50 text-primary p-2 m-0  shadow">
            <div className="text-xl md:text-2xl grid  min-h-32 ">
                <p className=" flex justify-center items-center">{icon}</p>
                <h4 className="text-center font-semibold">{title}</h4>
            </div>
        </div>
    );
}


export default SingleCardWithTitle;