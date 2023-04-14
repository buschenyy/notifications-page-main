import { Notification } from "../Notification/Notification";
import { notifications } from "../../data/notifications";
import { useEffect, useState } from "react";

export const Panel = () => {
  const [unreadNotice, setUnreadNotice] = useState<string[]>(
    notifications.map((e) => e.from).filter((_, i) => i < 3)
  );

  const readNoticeHandler = (id: string) => {
    setUnreadNotice(unreadNotice.filter((e) => e !== id));
  };

  return (
    <div className="container mx-auto grid grid-cols-2 bg-white px-4  pt-6">
      <div className="flex text-xl font-extrabold">
        <span className="mr-2">Notifications</span>
        <div className="rounded-md bg-[#083378] px-[11px] text-base/[1.75rem] text-white">
          {unreadNotice.length}
        </div>
      </div>
      <button
        onClick={() => setUnreadNotice([])}
        className="cursor-pointer self-center justify-self-end text-sm font-medium text-darkGrayishBlue"
      >
        Mark all as read
      </button>
      <ul className="col-span-2 flex flex-col gap-y-10 py-10 pl-4 pr-3">
        {notifications.map((e) => {
          return (
            <Notification
              onClick={() => readNoticeHandler(e.from)}
              key={e.from}
              unreaded={unreadNotice}
              {...e}
            />
          );
        })}
      </ul>
    </div>
  );
};
