import type { SectionName } from "./../utils/types/types";
import { useActiveSectionContext } from "@/contex/ActiveSectionContext/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function useSectionInView(sectionName: SectionName, threshold?: number) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActive, timeOfLastClick } = useActiveSectionContext();
  //effect
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
    }
  }, [inView, sectionName, setActive, timeOfLastClick]);

  return { ref };
}

export default useSectionInView;
