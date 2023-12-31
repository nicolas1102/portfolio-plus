import Title from "@/app/components/common/title";
import ProjectItem from "./projectItem";

export default function Projects({ DICT }) {
  return (
    <div className="group-title">
      <Title>Projects</Title>
      <div className="flex flex-row justify-center gap-4 flex-wrap">
        {DICT.items.map((item) => (
          <ProjectItem
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            tecnologies={item.tecnologies}
            link={item.link}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
}
