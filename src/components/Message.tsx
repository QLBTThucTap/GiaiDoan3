type MessageProps = {
  totalTasks?: number;
};

const Message = ({ totalTasks = 3 }: MessageProps) => {
  return (
    <div className="rounded-xl border border-green-200 bg-green-50 p-4 shadow-sm">
      <p className="font-medium text-green-800">
        Bạn có {totalTasks} công việc chưa hoàn thành!
      </p>

      <p className="mt-1 text-sm text-green-600">
        Hãy hoàn thành từng công việc để đạt mục tiêu hôm nay.
      </p>
    </div>
  );
};
export default Message;
