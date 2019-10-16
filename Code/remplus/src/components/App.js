import React, { Component } from "react";
import Kanban from "./Goal/Kanban";

class App extends Component {
  render() {
    return (
      <div className="bg-light-blue w-full h-screen font-sans">
        <div className="flex p-2 bg-blue-dark items-center">
          <div className="hidden md:flex justify-start">
            <button className="bg-blue-light rounded p-2 font-bold text-white text-sm mr-2 flex">
              <svg className="fill-current text-white h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z" />
              </svg>
              Pannels
            </button>
            <input type="text" className="bg-blue-light rounded p-2" />
          </div>
          <div className="mx-0 md:mx-auto">
            <h1 className="text-blue-lighter text-xl flex items-center font-sans italic">
              <svg className="fill-current h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z" />
              </svg>
              Trello
            </h1>
          </div>
          <div className="flex items-center ml-auto">
            <button className="bg-blue-light rounded h-8 w-8 font-bold text-white text-sm mr-2">+</button>
            <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full" />
          </div>
        </div>
        <div className="flex m-4 justify-between">
          <div className="flex">
            <h3 className="text-white mr-4">TailwindComponents.com</h3>
            <ul className="list-reset text-white hidden md:flex">
              <li>
                <span className="font-bold text-lg px-2">☆</span>
              </li>
              <li>
                <span className="border-l border-blue-lighter px-2 text-sm">Business Name</span>{" "}
                <span className="rounded-lg bg-blue-light text-xs px-2 py-1">Free</span>
              </li>
              <li>
                <span className="border-l border-blue-lighter px-2 text-sm ml-2">Team Visible</span>
              </li>
            </ul>
          </div>
          <div className="text-white font-sm text-underlined hidden md:flex items-center underline">
            <svg
              className="h-4 fill-current text-white cursor-pointer mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
            </svg>
            Show menu
          </div>
        </div>
        <Kanban />
      </div>
    );
  }
}

export default App;
