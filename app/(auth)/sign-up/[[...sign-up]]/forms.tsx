"use client";

import { MultiSelect } from "@/components/multi-select";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { specificSportArr, sportTypesArr } from "@/constants";
import { SignUp } from "@clerk/nextjs";
import { FormEvent, useEffect, useState } from "react";

export const SignUpTrainer = () => {
  const [sportType, setSportType] = useState("wrestling");
  const [selectedSpecific, setSelectedSpecific] = useState<string[]>([]);
  const [specificSportNumber, setSpecificSportNumber] = useState(0);
  const [finalSelectOption, setFinalSelectOption] = useState(
    specificSportArr[0]["wrestling"]
  );
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("handle submit");
    localStorage.setItem(
      "sign-up-data",
      JSON.stringify({ sportType, selectedSpecific })
    );
    if (selectedSpecific.length > 0) {
      setSuccess(true);
    }
    //  else {
    //   toast({
    //     title: "Choose your specific options",
    //     description: "Not chosen specific sport",
    //     variant: "destructive",
    //   });
    // }
  }

  useEffect(() => {
    const number = specificSportArr.findIndex(
      (item) => Object.keys(item)[0] === sportType
    );
    setSpecificSportNumber(number);
    setFinalSelectOption(specificSportArr[specificSportNumber][sportType]);
  }, [sportType, specificSportNumber]);

  return (
    <div className="w-3/4 mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Choose your specifics
        </h3>
        <Select onValueChange={setSportType}>
          <SelectTrigger>
            <SelectValue placeholder="Choose your occupation" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {sportTypesArr.map((sport) => (
                <SelectItem key={sport.value} value={sport.value}>
                  {sport.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="space-y-2">
          <MultiSelect
            options={
              (!!finalSelectOption && finalSelectOption) ||
              specificSportArr[0]["wrestling"]
            }
            onValueChange={setSelectedSpecific}
            defaultValue={selectedSpecific}
            placeholder="Select specific sport"
            variant="secondary"
            maxCount={6}
          />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
      {success && <SignUp path="/sign-up" />}
    </div>
  );
};

export const SignUpClient = () => {
  return (
    <div className="w-3/4 mx-auto space-y-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Client registration
      </h3>
      <SignUp path="/sign-up" />
    </div>
  );
};
