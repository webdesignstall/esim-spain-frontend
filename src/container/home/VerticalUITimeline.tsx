import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import timelineData from "@/constants/timelineData";
import { BsChevronDown } from "react-icons/bs";

const VerticalUITimeline = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-10">
      <Timeline className="w-full">
        {timelineData?.map((item, index) => (
          <TimelineItem key={index} className="py-1 text-white">
            <TimelineSeparator>
              <item.icon className="bg-[#454545] text-5xl p-3 rounded-full text-[#C09D5E]" />
              {index !== timelineData?.length - 1 && (
                <>
                  <TimelineConnector className="mt-2" />
                  <BsChevronDown className="lg:-mt-4 text-2xl" />
                </>
              )}
            </TimelineSeparator>
            <TimelineContent className="py-20 -mt-20">
              <h3 className="text-[28px] lg:w-[520px] w-full mb-3 leading-8">
                {item?.title}
              </h3>
              <h5 className="text-[16px] text-[#D2D2D2]">
                {item?.description}
              </h5>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <div className="flex justify-center items-center">
        <button className="bg-[#C09D5E] rounded-full font-medium px-6 py-3 flex gap-2 items-center text-white">
          Check Your Device Compatibility
        </button>
      </div>
    </div>
  );
};

export default VerticalUITimeline;
