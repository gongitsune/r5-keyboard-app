import { FC } from "react";
import { Header } from "./components/Header/Header";
import { PdfReader } from "./components/PdfReader/PdfReader";
import { Playground } from "./components/Playground/Playground";

export const App: FC = () => {
  return (
    <div className="h-screen flex flex-col gap-4">
      <Header />
      <div className="flex gap-4 flex-grow">
        <div className="w-2/3">
          <PdfReader />
        </div>
        <div className="w-1/3 pt-14 pr-4">
          <Playground />
        </div>
      </div>
    </div>
  );
};
