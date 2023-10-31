import { ChangeEventHandler, FC, useState } from "react";

export const PdfReader: FC = () => {
  const [pdf, setPdf] = useState<string | undefined>(undefined);
  const handleUploadPdf: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) setPdf(e.target.result as string);
        else setPdf(undefined);
      };
      reader.readAsDataURL(file);
    } else setPdf(undefined);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <input
        type="file"
        accept=".pdf"
        className="file-input max-w-xs"
        onChange={handleUploadPdf}
      />
      <embed src={pdf} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};
