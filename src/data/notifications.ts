interface NotificationTemplateProps {
  type: "reaction" | "follow" | "join" | "leave" | "message" | "comment";
  from: string;
  image?: string;
  time: string;
  group?: string;
  message?: string;
  post?: string;
  additionalImg?: string;
}

export const notifications: NotificationTemplateProps[] = [
  {
    type: "reaction",
    from: "Mark Webber",
    post: "My first tournament today!",
    time: "1m ago",
  },
  {
    type: "follow",
    from: "Angela Gray",
    time: "5m ago",
  },
  {
    type: "join",
    from: "Jacob Thompson",
    group: "Chess Club",
    time: "1 day ago",
  },
  {
    type: "message",
    from: "Rizky Hasanuddin",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
  },
  {
    type: "comment",
    from: "Kimberly Smith",
    additionalImg: "d",
    time: "1 week ago",
  },
  {
    type: "reaction",
    from: "Nathan Peterson",
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
  },
  {
    type: "leave",
    from: "Anna Kim",
    group: "Chess Club",
    time: "2 weeks ago",
  },
];
