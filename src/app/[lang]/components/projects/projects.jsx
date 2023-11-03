import Title from "@/app/components/common/title";
import ProjectItem from "./projectItem";

export default function Projects({ DICT }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <Title>Knowledge</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
