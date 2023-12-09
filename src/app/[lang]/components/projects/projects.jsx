import Title from "@/app/components/common/title";
import ProjectItem from "./projectItem";

export default function Projects({ DICT }) {
  return (
    <div className="">
      <Title>Knowledge</Title>
      <div className="">
        {DICT.items.map((item) => (
          <ProjectItem
            imgUrl={item.imgUrl}
            title={item.title}
            tecnologies={item.tecnologies}
            link={item.link}
            key={item.key}
          />
        ))}
      </div>
    </div>
  );
}
