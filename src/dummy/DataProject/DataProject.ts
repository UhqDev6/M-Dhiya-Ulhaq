import dashboarImg from "../../../public/dashboar.png";
import dashboardImg from "../../../public/dashboard.png";
import talkImg from "../../../public/talk.png";
export const DataProject = [
  {
    id: 1,
    title: "CorpComment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. ",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Material UI", "React Query"],
    imageUrl: dashboarImg,
  },
  {
    id: 2,
    title: "CorpComment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. ",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Material UI", "React Query"],
    imageUrl: dashboardImg,
  },
  {
    id: 3,
    title: "CorpComment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. ",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Material UI", "React Query"],
    imageUrl: talkImg,
  },
] as const;
