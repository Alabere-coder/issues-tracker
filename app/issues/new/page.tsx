"use client";

import { TextField, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineNotification } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { zodResolver } from "@hookform/resolvers/zod"
import Spinner from "@/app/components/Spinner";

interface FormData {
  title: string;
  description: string;
}

const NewIssuePage: React.FC = () => {
  const navigate = useRouter();
  const [error, setError] = useState("");
  const [isSpinning, setIsSpinning] = useState(false)
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

    //   
    if (response.ok) {
        setIsSpinning(true)
        toast("Data sent successfully");
        navigate.push("/issues");
        setFormData({
          title: "",
          description: "",
        });
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "An error occurred while processing the request.");
      }
    } catch (error) {
      setIsSpinning(false)
      setError("Fields cannot be empty !");
    }
  };

  return (
    <div className="">
      <div className=" flex justify-center mt-4">
      {error && (
        <Callout.Root style={{width: 400}} color="red">
          <Callout.Icon>
            <AiOutlineNotification />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      </div>
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
        <Button className="w-[60%]" disabled={isSpinning}>Add New Issue {isSpinning && <Spinner />}</Button>
        <ToastContainer autoClose={false} />
      </form>
    </div>
  );
};

export default NewIssuePage;
