"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { memo, useMemo, useState } from "react";
import { highlight } from "sugar-high";

import { Button } from "@/components/ui/button";

type CodeBlockParams = {
  title?: string;
  code: string;
  [key: string]: any;
};

export const CodeBlock = memo(({ title, code, ...props }: CodeBlockParams) => {
  const [copied, setCopied] = useState(false);
  // Defer highlight for initial render to reduce FCP impact
  const codeHTML = useMemo(() => highlight(code), [code]);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-between items-center px-2 bg-gradient-to-t border-b-2 from-neutral-200 to-neutral-300 border-neutral-300">
        <div className="flex gap-3 items-center">
          <span className="inline-flex gap-1 items-center">
            <div className="overflow-hidden relative size-3.5 rounded-full bg-radial-[at_50%_75%] from-red-200 via-red-400 to-red-900 to-90% border shadow border-neutral-700">
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle at 50% 0, rgb(255 255 255), transparent 24%)" }}
              />
            </div>

            <div className="overflow-hidden relative size-3.5 rounded-full bg-radial-[at_50%_75%] from-yellow-200 via-yellow-400 to-yellow-900 to-90% border shadow border-neutral-700">
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle at 50% 0, rgb(255 255 255), transparent 24%)" }}
              />
            </div>
            <div className="overflow-hidden relative size-3.5 rounded-full bg-radial-[at_50%_75%] from-green-200 via-green-400 to-green-900 to-90% border shadow border-neutral-700">
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle at 50% 0, rgb(255 255 255), transparent 24%)" }}
              />
            </div>
          </span>
        </div>
        <div className="flex justify-center items-center"> {title && <p className="m-0! text-sm ">{title}</p>}</div>
        <Button variant="aquaGrey" size="sm" disabled={copied} onClick={onCopy}>
          <LazyMotion features={domAnimation}>
            <m.span
              key={copied ? "copied" : "copy"}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.3 }}
              className="inline-flex gap-0.5 justify-center items-center w-14 z-2"
            >
              {useMemo(
                () =>
                  copied ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-0.5"
                      >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      Copy
                    </>
                  ),
                [copied],
              )}
            </m.span>
          </LazyMotion>
        </Button>
      </div>
      <div className="overflow-x-auto flex-1 py-4 pr-4 text-sm sm:py-2 sm:pr-2 bg-neutral-900">
        <pre>
          <code className="horizontal-scroll-area" dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
        </pre>
      </div>
    </>
  );
});

CodeBlock.displayName = "CodeBlock";
