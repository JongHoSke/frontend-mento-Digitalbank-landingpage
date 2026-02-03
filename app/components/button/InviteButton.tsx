import { cn } from "@/lib/utils";

interface InviteButtonProps {
  className?: string;
}

const InviteButton = ({ className }: InviteButtonProps) => {
  return (
    <div
      className={cn(
        "w-fit group relative flex justify-center items-center",
        "bg-linear-to-bl from-green-400 from-30% to-cyan-300 rounded-4xl cursor-pointer",
        className,
      )}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 rounded-4xl transition-opacity" />
      <button className="cursor-pointer text-white font-bold ">
        Request Invite
      </button>
    </div>
  );
};

export default InviteButton;
