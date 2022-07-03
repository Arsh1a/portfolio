import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Loader from "../Loader";

interface Props {}

const Form = ({}: Props) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleForm = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setIsSuccess(false);

    if (formData.name === "" || formData.email === "" || formData.message === "") {
      setIsFormSubmitted(true);
      setErrorMessage("Please fill out all fields");
      return;
    }

    fetch("https://formsubmit.co/ajax/arshiafaraji22@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsFormSubmitted(true);
        setIsLoading(false);
        setErrorMessage("");
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsFormSubmitted(true);
        setIsLoading(false);
        setIsSuccess(false);
        setErrorMessage("Failed to send message.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        <Input
          type="text"
          className="flex-1"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleForm}
          required
        />
        <Input
          type="email"
          className="flex-1"
          name="email"
          value={formData.email}
          onChange={handleForm}
          placeholder="Email"
          required
        />
      </div>
      <textarea
        rows={10}
        className="bg-neutral-100 p-3 rounded-lg"
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleForm}
        required
      ></textarea>
      <Button type="submit">{isLoading ? <Loader /> : "Submit"}</Button>
      {isFormSubmitted && errorMessage && (
        <div className="py-4 px-6 bg-red-500 text-white rounded-xl">There was an error</div>
      )}

      {isFormSubmitted && isSuccess && (
        <div className="py-4 px-6 bg-green-500 text-white rounded-xl">
          Message sent. I&apos;ll come back to you as soon as possible.
        </div>
      )}
    </form>
  );
};
export default Form;
