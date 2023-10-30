import { FC } from "react";
import { ThemeSwapButton } from "./ThemeSwapButton";

export const Header: FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Keyboard App</a>
      </div>
      <div className="flex-none px-10">
        <ThemeSwapButton />
      </div>
    </div>
  );
};
