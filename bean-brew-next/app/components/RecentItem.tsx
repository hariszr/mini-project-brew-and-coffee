type RecentItemProps = {
  icon: string;
  order: string;
  detail: string;
  price: string;
  time: string;
};

const RecentItem = ({ icon, order, detail, price, time }: RecentItemProps) => {
  return (
    <>
      <div className="flex items-center">
        <div className="h-14 w-14 rounded-full bg-gray-300/50 flex items-center justify-center">
          <img src={icon} className="h-7 opacity-40" />
        </div>

        <div className="flex justify-between w-full px-5">
          <div>
            <h2 className="text-start font-semibold">{order}</h2>
            <p className="text-gray-400 text-sm">{detail}</p>
          </div>

          <div className="text-right">
            <h2 className="font-semibold">{price}</h2>
            <p className="text-gray-400 text-sm">{time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentItem
