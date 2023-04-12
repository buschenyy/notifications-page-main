import { Notification } from "../Notification/Notification";

export const Panel = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 bg-white px-4  pt-6">
      <div className="flex text-xl font-extrabold">
        <span className="mr-2">Notifications</span>
        <div className="rounded-md bg-[#083378] px-[11px] text-base/[1.75rem] text-white">
          {3}
        </div>
      </div>
      <button className="cursor-pointer self-center justify-self-end text-sm font-medium text-darkGrayishBlue">
        Mark all as read
      </button>
      <div className="col-span-2 pt-10 flex-col flex gap-y-10">
        <Notification />
        <Notification />
        <Notification />
      </div>
    </div>
  );
};
