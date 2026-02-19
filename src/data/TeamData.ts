import { StaticImageData } from "next/image";

import team_1 from "@/assets/images/team/team-image1.jpg"
import team_2 from "@/assets/images/team/team-image2.jpg"
import team_3 from "@/assets/images/team/team-image3.jpg"


interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   designation: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      thumb: team_1,
      title: "Kawser Ahmed",
      designation: "Web Designer"
   },
   {
      id: 2,
      page: "home_2",
      thumb: team_2,
      title: "Karniz Fatema",
      designation: "Customer Support"
   },
   {
      id: 3,
      page: "home_2",
      thumb: team_3,
      title: "Alex Pranto",
      designation: "UI/UX Designer"
   },

   // team
   {
      id: 1,
      page: "team",
      thumb: team_1,
      title: "Kawser Ahmed",
      designation: "Web Designer"
   },
   {
      id: 2,
      page: "team",
      thumb: team_2,
      title: "Karniz Fatema",
      designation: "Customer Support"
   },
   {
      id: 3,
      page: "team",
      thumb: team_3,
      title: "Alex Pranto",
      designation: "UI/UX Designer"
   },
  
];

export default team_data;