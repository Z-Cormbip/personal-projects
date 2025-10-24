import { ChevronRight } from "lucide-react";
import Link from "next/link";

type LinkBtnProps = {
  href: string;
  text: React.ReactNode;
};

const LinkBtn = ({ href, text }: LinkBtnProps) => {
  return (
    <div className="flex justify-between items-center gap-4 pl-4">
      <h2 className="text-secondary font-zodiak underline underline-offset-2">
        {text}
      </h2>
      <Link href={`/${href}`}>
        <button className="btn btn-primary btn-md btn-circle shadow-md shadow-slate-900/25">
          <ChevronRight size={26} />
        </button>
      </Link>
    </div>
  );
};
export default LinkBtn;
