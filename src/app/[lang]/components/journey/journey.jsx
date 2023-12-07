import Title from "@/app/components/common/title";
import JourneyItem from "./journeyItem";

export default function Journey({ DICT }) {
  return (
    <div className="">
      <div className="">
        <Title>Timeline</Title>
        {DICT.items.map((item) => (
          <JourneyItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            key={item.key}
          />
        ))}
      </div>
    </div>
  );
}
