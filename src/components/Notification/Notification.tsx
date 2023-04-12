const notificationsMsg = {
  reaction: "reacted to your recent post",
  follow: "followed you",
  join: "has joined your group",
  leave: "left the group",
  message: "sent you a private message",
  comment: "commented on your picture",
};

// const Template = ({ nData }: NotificationProps) => {
//   const {
//     from,
//     image,
//     post,
//     time,
//     message,
//     group,
//     additionalImg,
//   } = nData;
//   return (
//     <li
//       className={`grid gap-x-3 ${
//         additionalImg ? `grid-cols-[40px_1fr_40px]` : `grid-cols-[40px_1fr]`
//       }`}
//     >
//       <img src="sdf" alt="das" className="h-10 w-10 rounded-full" />
//       <div>
//         <p>
//           <span className="font-extrabold">{from}&ensp;</span>
//           <span className="text-darkGrayishBlue">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
//             nisi?&ensp;
//           </span>
//           <span className="font-extrabold text-darkGrayishBlue">
//             {message}&ensp;
//           </span>
//           <span className="font-extrabold text-[#083378]">{group}</span>
//         </p>
//         <span className="text-grayishBlue">{time}</span>
//       </div>
//       {additionalImg && (
//         <div className="h-10 w-10 rounded-md bg-darkGrayishBlue"></div>
//       )}
//     </li>
//   );
// };

export const Notification = ({
  type,
  from,
  image,
  post,
  time,
  message,
  group,
  additionalImg,
  ...props
}: NotificationTemplateProps) => {
  return (
    <li
      className={`grid gap-x-3 text-sm ${
        additionalImg ? `grid-cols-[40px_1fr_40px]` : `grid-cols-[40px_1fr]`
      }`}
      {...props}
    >
      <img
        src={"images/" + image}
        alt={from}
        className="h-10 w-10 rounded-full"
      />
      <div>
        <div>
          <span className="font-extrabold">{from}&ensp;</span>
          <span className="text-darkGrayishBlue">
            {notificationsMsg[type]}&ensp;
          </span>
          {post && (
            <span className="font-extrabold text-darkGrayishBlue">
              {post}&ensp;
            </span>
          )}
          {group && (
            <span className="font-extrabold text-[#083378]">{group}&ensp;</span>
          )}
          <span className="inline-block h-2 w-2 rounded-full border-darkRedBorder bg-redDot"></span>
        </div>
        <span className="text-grayishBlue">{time}</span>
        {message && (
          <p className="mt-3 rounded-md border border-lightGrayishBlue2 p-4 text-sm text-darkGrayishBlue">
            {message}
          </p>
        )}
      </div>
      {additionalImg && (
        <img src={"images/" + additionalImg} className="h-10 w-10 rounded-md" />
      )}
    </li>
  );
};

interface NotificationProps {
  nData: NotificationTemplateProps;
}

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
