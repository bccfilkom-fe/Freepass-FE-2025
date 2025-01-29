"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { RefreshCcw } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";

const RefreshButton = () => {
  const router = useRouter();
  const onRefresh = () => {
    toast.info("Page updated");
    router.refresh();
  };
  return (
    <Button onClick={onRefresh} className="ml-0 sm:ml-auto">
      Refresh
      <RefreshCcw className=" h-8 w-8 " />
    </Button>
  );
};

export default RefreshButton;
