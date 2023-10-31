import { FC } from "react";
import { Header } from "./components/Header/Header";
import { PdfReader } from "./components/PdfReader/PdfReader";

export const App: FC = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex h-full">
        <PdfReader />
      </div>
    </div>
  );
};
