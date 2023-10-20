"use client";

import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  title: string;
  description: string;
}

const NewIssuePage: React.FC = () => {

  const navigate = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/issues", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      toast("Data sent successfully");
      navigate.push("/issues");
      setFormData({
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-h-screen space-y-4 flex-col items-center p-8"
    >
      <TextField.Root className="w-[60%]">
        <TextField.Input
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </TextField.Root>

      <SimpleMDE
        placeholder="Description"
        onChange={(value) => setFormData({ ...formData, description: value })}
        className="w-[60%]"
      />
      <Button className="w-[60%]">Add New Issue</Button>
      <ToastContainer autoClose={false} />
    </form>
  );
};

export default NewIssuePage;
