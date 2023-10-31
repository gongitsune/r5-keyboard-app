import { FC } from "react";

export const Playground: FC = () => {
  return (
    <div className="mockup-window border bg-base-300 w-full h-full">
      <div className="flex justify-center px-4 py-4 bg-base-200 h-full w-full">
        <textarea className="textarea w-full h-full" placeholder="Bio">
          実際にキーボードを試してみてください。
        </textarea>
      </div>
    </div>
  );
};
