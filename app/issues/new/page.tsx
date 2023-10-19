"use client";

import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
  return (
    <div className="flex min-h-screen space-y-4 flex-col items-center p-24">
      <TextField.Root className="w-[60%]">
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" className="w-[60%]" />
      <Button className="w-[60%]">Add New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
