import { useForm } from "react-hook-form";
import Button from "../../UI/button";
import Input from "../../UI/input";
import { LoginTyped } from "../../models";

const className = "border rounded-md w-full p-1";
const FormYoutube = () => {
  const { register, handleSubmit, reset } = useForm<LoginTyped>();

  const onSubmite = (data: LoginTyped) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-full flex justify-center p-6 flex-col items-center gap-4">
      <h1 className="text-3xl">Wellcom To YouTube</h1>
      <form
        onSubmit={handleSubmit(onSubmite)}
        className="flex gap-3 flex-col justify-center items-center w-1/2 border-2 rounded-lg p-4"
      >
        <Input
          {...register("userName")}
          className={className}
          label="userName"
        />
        <Input
          {...register("password")}
          className={className}
          label="password"
        />
        <Input {...register("email")} className={className} label="email" />
        <div className="w-full flex justify-center items-center">
          <Button
            type="submit"
            text="Submit"
            className="bg-green-500 p-1 text-white w-1/2 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default FormYoutube;
