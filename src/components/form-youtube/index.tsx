/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useForm,
  useFieldArray,
  FormState,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import Button from "../../UI/button";
import Input from "../../UI/input";
import { LoginTyped } from "../../models";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
const className = "border rounded-md w-full p-1";
const FormYoutube = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    getValues,
    setValue,

    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      submitCount,
    },
  } = useForm<LoginTyped>({
    mode: "onBlur",
    defaultValues: {
      userName: "admin",
      email: "",
      age: 24,
      dateofbirthDay: "2022/03/12",
      password: "",
      socialMedia: {
        facbook: "ddd",
        twiter: "",
      },
      phones: ["", "", ""],
      skills: [{ hobbise: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });
  const onSubmite = (data: FieldValues) => {
    console.log("GGGGG", data);
  };
  // const onErrorHandler = (errors: FieldErrors<FormState<LoginTyped>>) => {
  //   console.log("RRRRRRRRRRRRRRRRRRRRR : ", errors);
  // };

  // useEffect(() => {
  //   const subscribe = watch((value) => {
  //     console.log(value);
  //   });

  //   return () => subscribe.unsubscribe();
  // }, [watch]);
  // console.log("Is Valid Element : ", isValid);
  // console.log("isSubmitting : ", isSubmitting);
  // console.log("isSubmitSuccessful : ", isSubmitSuccessful);
  // console.log("Submit Count  : ", submitCount);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
  return (
    <div className="w-full flex justify-center p-6 flex-col items-center gap-4">
      <h1 className="text-3xl">Wellcom To YouTube</h1>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmite)}
        className="flex gap-3 flex-col justify-center items-center w-1/2 border-2 rounded-lg p-4"
      >
        <Input
          {...register("userName", {
            required: "نام کابری الزامی است",
            disabled: getValues("password") ? false : true,
          })}
          className={className}
          errors={errors && errors.userName?.message}
          label="userName"
        />
        <Input
          {...register("password", {
            required: "رمزعبور الزامی است",
          })}
          className={className}
          errors={errors && errors.password?.message}
          label="password"
        />
        <Input
          {...register("age", {
            required: "سن الزامی است",
            valueAsNumber: true,
          })}
          className={className}
          errors={errors && errors.age?.message}
          label="سن"
        />
        <Input
          type="date"
          {...register("dateofbirthDay", {
            valueAsDate: true,
          })}
          className={className}
          errors={errors && errors.dateofbirthDay?.message}
          label="تاریخ تولد"
        />
        <Input
          {...register("socialMedia.twiter", {
            required: "Twiter الزامی است",
          })}
          className={className}
          errors={errors && errors.socialMedia?.twiter?.message}
          label="Twiter"
        />
        <Input
          {...register("socialMedia.facbook")}
          className={className}
          errors={errors && errors.socialMedia?.facbook?.message}
          label="facsBook"
        />
        <Input
          {...register("phones.0")}
          className={className}
          errors={errors && errors.socialMedia?.facbook?.message}
          label="mobile"
          id="mobile"
        />
        <Input
          {...register("phones.1")}
          className={className}
          errors={errors && errors.socialMedia?.facbook?.message}
          label="home"
          id="home"
        />
        <Input
          {...register("phones.2")}
          className={className}
          errors={errors && errors.socialMedia?.facbook?.message}
          label="office"
          id="office"
        />
        <Input
          {...register("email", {
            required: "ایمیل الزامی است",
            validate: {
              notAdmin: (fild: string) => {
                return fild !== "test@gmail.com" || "ایمیل دیگری وارد کنید";
              },
              notBlockList: (fild: string) => {
                return (
                  fild !== "FFF@gamil.com" ||
                  "ایمیل در حالت بلاک قرار دارد ایمیل دیگری وارد کنید"
                );
              },
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "فرمت ایمیل اشتباه است",
            },
          })}
          className={className}
          errors={errors && errors.email?.message}
          label="email"
        />

        <div className="w-full flex flex-col gap-4">
          <Button
            onClick={() => append({ hobbise: "" })}
            type="button"
            text="add-skills"
            className=" bg-purple-600 text-white h-max w-full mt-5 rounded-lg"
          />
          {fields.map((filed, index) => (
            <div
              className="w-full gap-2 flex justify-center items-center"
              key={filed.id}
            >
              <Input
                label="add Skills"
                {...register(`skills.${index}.hobbise`)}
                className={className}
              />

              <Button
                onClick={() => remove(index)}
                type="button"
                text="remove-skills"
                className=" bg-red-500 text-white rounded-lg  w-1/2 mt-5"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex gap-2 flex-col justify-center items-center ">
          <Button
            type="submit"
            text="Submit"
            className={` ${
              isDirty && isValid ? "bg-green-500" : "bg-gray-500 bg-opacity-20"
            }  p-1 text-white w-1/2 rounded-md`}
            disabled={!isDirty || !isValid}
          />
          <Button
            type="button"
            text="GetValue"
            onClick={() => console.log("GETVALUES : ", getValues("password"))}
            className="bg-yellow-500 p-1 text-white w-1/2 rounded-md"
          />
          <Button
            type="button"
            text="GetValue"
            onClick={() => {
              setValue("password", "AAAAAAA : ", {
                shouldTouch: true,
              });
            }}
            className="bg-rose-500 p-1 text-white w-1/2 rounded-md"
          />
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default FormYoutube;
