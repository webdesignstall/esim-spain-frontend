import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { TfiWorld } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";
import { FaBorderAll } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const VerticalTimelineMobile = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          marginLeft: "-20px",
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TfiWorld className="bg-[#454545] text-5xl p-3 rounded-full text-[#C09D5E]" />
          <TimelineConnector className="mt-2" />
          <BsChevronDown className="text-white -mt-[10px]" />
        </TimelineSeparator>
        <TimelineContent className="py-10 -mt-10">
          <h4 className="text-white lg:text-2xl mb-4">
            Choose your destination and package that suits your needs
          </h4>
          <p className="text-[#D2D2D2]">
            Choose the package based on your data needs for a perfect match of
            data usage and cost-effectiveness
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <CiMobile2 className="bg-[#454545] text-5xl p-3 rounded-full text-[#C09D5E]" />
          <TimelineConnector className="mt-2" />
          <BsChevronDown className="text-white -mt-[10px]" />
        </TimelineSeparator>
        <TimelineContent className="py-10 -mt-10">
          <h4 className="text-white lg:text-2xl mb-4">
            Confirm compatibility and click on check out to complete the
            purchase
          </h4>
          <p className="text-[#D2D2D2]">
            Not sure if your phone is eSIM compatible?
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <FaBorderAll className="bg-[#454545] text-5xl p-3 rounded-full text-[#C09D5E]" />
        </TimelineSeparator>
        <TimelineContent>
          <h4 className="text-white lg:text-2xl mb-4">
            Use the QR code provided to install and activate your eSIM
          </h4>
          <p className="text-[#D2D2D2]">
            After successful payment, activate your eSIM by scanning the QR code
            or check your email for the QR code sent to you.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default VerticalTimelineMobile;
