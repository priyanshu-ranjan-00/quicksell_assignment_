import React from "react";
import styles from "../Column/Column.module.css";
import AvatarWithStatus from "../Card/Avatar/Avatar";
import FeatureRequestCard from "../Card/FeatureCard";

const icons = {
  Done: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Done.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  "In progress": (
    <img
      src={`${process.env.PUBLIC_URL}/icons/in-progress.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Cancelled: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Cancelled.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Todo: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/To-do.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Backlog: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Backlog.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  "No priority": (
    <img
      src={`${process.env.PUBLIC_URL}/icons/No-priority.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Low: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Img - Low Priority.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Medium: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Img - Medium Priority.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  High: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Img - High Priority.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Urgent: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/SVG - Urgent Priority grey.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
};

const Column = ({ title, tickets, ordering, grouping }) => {
  return (
    <div className={styles.column}>
      <div className={styles.leftview}>
        <div className="dot">
          {grouping !== undefined && grouping === "user" ? (
            <>
              <div>
                <AvatarWithStatus
                  statusColor={"green"}
                  grouping={grouping}
                  indashBoard={grouping === "user"}
                />
              </div>
            </>
          ) : (
            <>{icons[title]}</>
          )}
        </div>
        <div className={styles.name_label}>
          <h5> {title}</h5>
          <h5 className="heading">{tickets.length}</h5>
        </div>

        <div>
          <img
            src={`${process.env.PUBLIC_URL}/icons/add.svg`}
            alt="Add Icon"
            style={{ width: "20px", height: "20px" }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/icons/3 dot menu.svg`}
            alt="Menu Dots"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>

      <div className={styles.card_container}>
        {tickets !== undefined &&
          tickets.map((ticket, i) => {
            return (
              <FeatureRequestCard
                key={i}
                id={ticket.id}
                tag={ticket.tag.join("")}
                title={ticket.title}
                grouping={grouping}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Column;
