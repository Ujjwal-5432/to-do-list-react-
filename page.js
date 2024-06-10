"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }
  let renderTask = <h2>no task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}
          className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className="bg-red-400 text-white rounded">Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-slate-800 p-4 text-5xl font-bold text-center">
        Ujjwal todo list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800  border-2 m-5 px-4 py-2"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          add task
        </button>
      </form>
      <hr className="border-t-8 border-slate-800" />
      <div classname="p-8 bg-slate-800">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;

