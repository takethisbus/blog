import { memo } from "react";

const Utterances = () => {
  return (
    <section
      ref={(elem) => {
        if(!elem) { 
          return;
        }
        const scriptElement = document.createElement('script');
        scriptElement.src = "https://utteranc.es/client.js";
        scriptElement.async = true;
        scriptElement.setAttribute("repo", "takethisbus/blog");
        scriptElement.setAttribute("issue-term", "pathname");
        scriptElement.setAttribute("theme", "github-light");
        scriptElement.crossOrigin = "anonymous";
        elem.appendChild(scriptElement);
      }}
    />
  );
}

export default memo(Utterances);