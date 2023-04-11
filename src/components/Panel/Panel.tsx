import { Notification } from "../Notification/Notification";

export const Panel = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 bg-darkGrayishBlue px-4  pt-6">
      <div className="flex text-xl font-extrabold">
        Notifications{" "}
        <div className="min-w-[32px] rounded-md bg-lightGrayishBlue2">{5}</div>
      </div>
      <button>Mark as readed</button>
      <div className="col-span-2">
        <Notification />
        <Notification />
        <Notification />
      </div>
    </div>
  );
};
