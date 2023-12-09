import Title from "@/app/components/common/title";
import TimelineItem from "./timelineItem";

export default function Timeline({ DICT }) {
  return (
    <div className="flex flex-col md:flex-row justify-center my-10 ">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {DICT.items.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
}
