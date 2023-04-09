import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-Timeline-element--education"
          date="2014-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Reza HighSchool</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Supervisor - Saman insurance company
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Iraq,Baghdad</h4>
          <p>Leading a group of five employees To deliver high quality work </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-end development bootcamp - Re:coded
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online</h4>
          <p>
            Immersive boot camp and highly competitive, with a 5% acceptance
            rate. * Completing a five-month immersive coding boot camp, with
            400+ hours of curricula and project-based learning * Technologies:
            HTML, CSS, JavaScript, React * Co-creating various responsive web
            applications from scratch. Revisit my profile when I graduate in
            2023 to see what I’ve learned.Re:Coded prepares youth for the future
            of work, by equipping them with the technical and soft skills (such
            as teamwork and business communication) to thrive as web developers
            and designers. Immersive boot camp and highly competitive, with a 5%
            acceptance rate. * Completing a five-month immersive coding boot
            camp, with 400+ hours of curricula and project-based learning *
            Technologies: HTML, CSS, JavaScript, React * Co-creating various
            responsive web applications from scratch. Revisit my profile when I
            graduate in 2023 to see what I’ve learned. Skills: Software
            Development · Web Applications · React.js · Front-End Development ·
            English
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
