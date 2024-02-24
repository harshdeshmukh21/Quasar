import React from "react";
import "../css/sticky.css";
import { Carousel, Typography, Button } from "@material-tailwind/react";
// import { Textarea } from "@material-tailwind/react";
import { useState } from "react";

export const Sticky = () => {
  const [inputValue, setInputValue] = useState("");
  const clearInput = () => {
    setInputValue("");
  };
  return (
    <div className="Main">
      <div className="box">
        <Carousel className="rounded-xl">
          {/* First Carousel Item - Repeat this structure for all four */}
          <div className="relative h-full w-full">
            <div className="Box">
              <div className="upper">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  NoteMagnet
                </Typography>
              </div>
              <div className="lower"></div>
            </div>
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <div className="w-96 flex justify-center items-center">
                  <input
                    type="text"
                    placeholder=""
                    className="Text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white" onClick={clearInput}>
                    <img
                      src="data:image/png;base64,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"
                      alt="x"
                      height="20px"
                      width="20px"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat the above structure for the remaining four carousels */}
          <div className="relative h-full w-full">
            <div className="Box">
              <div className="upper">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  NoteMagnet
                </Typography>
              </div>
              <div className="lower"></div>
            </div>
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <div className="w-96 flex justify-center items-center">
                  <input
                    type="text"
                    placeholder=""
                    className="Text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white" onClick={clearInput}>
                    <img
                      src="data:image/png;base64,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"
                      alt="x"
                      height="20px"
                      width="20px"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="Box">
              <div className="upper">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  NoteMagnet
                </Typography>
              </div>
              <div className="lower"></div>
            </div>
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <div className="w-96 flex justify-center items-center">
                  <input
                    type="text"
                    placeholder=""
                    className="Text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white" onClick={clearInput}>
                    <img
                      src="data:image/png;base64,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"
                      alt="x"
                      height="20px"
                      width="20px"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="Box">
              <div className="upper">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  NoteMagnet
                </Typography>
              </div>
              <div className="lower"></div>
            </div>
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <div className="w-96 flex justify-center items-center">
                  <input
                    type="text"
                    placeholder=""
                    className="Text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white" onClick={clearInput}>
                    <img
                      src="data:image/png;base64,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"
                      alt="x"
                      height="20px"
                      width="20px"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="Box">
              <div className="upper">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  NoteMagnet
                </Typography>
              </div>
              <div className="lower"></div>
            </div>
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <div className="w-96 flex justify-center items-center">
                  <input
                    type="text"
                    placeholder=""
                    className="Text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white" onClick={clearInput}>
                    <img
                      src="data:image/png;base64,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"
                      alt="x"
                      height="20px"
                      width="20px"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
