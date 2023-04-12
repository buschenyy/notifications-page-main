const Template = ({
  img,
  firstName,
  lastName,
  notificationText,
  message,
  addendum,
  notificationImg = true,
}) => {
  return (
    <li
      className={`grid gap-x-3 ${
        notificationImg ? `grid-cols-[40px_1fr_40px]` : `grid-cols-[40px_1fr]`
      }`}
    >
      <img src="sdf" alt="das" className="h-10 w-10 rounded-full" />
      <div>
        <p>
          <span className="font-extrabold">Name LastName&ensp;</span>
          <span className="text-darkGrayishBlue">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            nisi?&ensp;
          </span>
          <span className="font-extrabold text-darkGrayishBlue">
            Lorem, ipsum dolor.&ensp;
          </span>
          <span className="font-extrabold text-[#083378]"> Chess Club</span>
        </p>
        <span className="text-grayishBlue">5 min ago</span>
      </div>
      {notificationImg && <div className="h-10 w-10 rounded-md bg-darkGrayishBlue"></div>}
    </li>
  );
};

export const Notification = ({ type }: NotificationProps) => {
  switch (type) {
    default:
      return <Template />;
  }
};

interface NotificationProps {
  type?: "reaction" | "subscribe" | "groupAct" | "message" | "comment";
}
