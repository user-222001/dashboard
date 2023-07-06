"use client";
import React from "react";
import Todo from "../../components/todocards/page";
import Provider from "@/components/Provider/Provider";

const page = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default Provider(page);
