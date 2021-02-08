import { MutableRefObject, useEffect, useRef } from "react";

const createRootElement = (id: string): Element => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
};

const addRootElement = (rootElem: Element) => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild!.nextElementSibling
  );
};

export const usePortal = (id: string) => {
  const rootElemRef: MutableRefObject<Element | null> = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    parentElem.appendChild(rootElemRef.current as Element);

    return () => {
      rootElemRef.current!.remove();

      if (!parentElem.childElementCount) {
        parentElem.remove();
      }
    };
  }, [id]);

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  };

  return getRootElem();
};
