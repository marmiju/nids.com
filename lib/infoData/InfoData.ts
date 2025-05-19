import { error } from 'console'
import React from 'react'

 export interface InfoData {
    id: number;
    logo: string;
    title: string;
    description: string;
    slogan: string;
    tagLine: string;
    location: string;
    phone: string;
    email: string;
  }
  
  export interface SocialData {
    id: number;
    title: string;
    link: string;
    icon: string;
  }
  
 export interface GetInfoResponse {
    message: string;
    infoData: InfoData;
    socialData: SocialData[];
  }
  
export let siteLogo: string;

export const InfoData = async () => {

    try {
        const respons = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/getinfo`)
        
      const result = await respons.json()
      siteLogo = result.infoData.logo
      
        return result
    } catch (err) {
        throw new Error('Something went wrong')
    }

}



