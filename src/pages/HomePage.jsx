import React from "react";
import { BsSun } from "../utils/icons";
import { Intro } from "../components";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-14 items-center justify-center">
      <h4 className="text-white text-4xl font-bold">ChatGPT</h4>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col gap-3 items-center text-white">
            <span>
              <BsSun />
            </span>
            <p className="text-base">Examples</p>
          </div>
          <Intro>"Explain quantum computing in simple terms" →</Intro>
          <Intro>
            "Got any creative ideas for a 10 year old’s birthday?" →
          </Intro>
          <Intro>"How do I make an HTTP request in Javascript?" →</Intro>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col gap-3 items-center text-white">
            <span>
              <BsSun />
            </span>
            <p className="text-base">Capabilities</p>
          </div>
          <Intro>Remembers what user said earlier in the conversation</Intro>
          <Intro>Allows user to provide follow-up corrections</Intro>
          <Intro>Trained to decline inappropriate requests</Intro>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col gap-3 items-center text-white">
            <span>
              <BsSun />
            </span>
            <p className="text-base">Limitations</p>
          </div>
          <Intro>May occasionally generate incorrect information</Intro>
          <Intro>
            May occasionally produce harmful instructions or biased content
          </Intro>
          <Intro>Limited knowledge of world and events after 2021</Intro>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
