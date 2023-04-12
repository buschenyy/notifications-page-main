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
    image: "avatar-mark-webber.webp",
    post: "My first tournament today!",
    time: "1m ago",
  },
  {
    type: "follow",
    from: "Angela Gray",
    image: "avatar-angela-gray.webp",
    time: "5m ago",
  },
  {
    type: "join",
    from: "Jacob Thompson",
    image: "avatar-jacob-thompson.webp",
    group: "Chess Club",
    time: "1 day ago",
  },
  {
    type: "message",
    from: "Rizky Hasanuddin",
    image: "avatar-rizky-hasanuddin.webp",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
  },
  {
    type: "comment",
    from: "Kimberly Smith",
    image: "avatar-kimberly-smith.webp",
    additionalImg: "image-chess.webp",
    time: "1 week ago",
  },
  {
    type: "reaction",
    from: "Nathan Peterson",
    image: "avatar-nathan-peterson.webp",
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
  },
  {
    type: "leave",
    from: "Anna Kim",
    image: "avatar-anna-kim.webp",
    group: "Chess Club",
    time: "2 weeks ago",
  },
];
