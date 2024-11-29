import React from "react";
import { useColor } from "../contexts/ColorProvider";

const ProjectActiveIcon = () => {
  const { currentColor } = useColor();
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16.9091V6.27273C2 4.46782 3.49489 3 5.33309 3H6.99963C7.38627 3 7.7729 3.08918 8.11788 3.25855L10.7468 4.54964C10.8618 4.60609 10.991 4.63555 11.1193 4.63555H15.3323C17.6297 4.63555 19.4987 6.47073 19.4987 8.72645H10.3527C9.27477 8.73122 8.22692 9.07595 7.36366 9.70983C6.5004 10.3437 5.86742 11.2332 5.55807 12.2471L3.33073 19.8881C2.91203 19.5081 2.57772 19.0472 2.34874 18.5345C2.11976 18.0218 2.00104 17.469 2 16.9091ZM21.576 11.1957C21.3822 10.9384 21.1302 10.7288 20.8398 10.5833C20.5495 10.4378 20.2288 10.3604 19.9028 10.3571C19.8903 10.3571 19.8803 10.3636 19.8678 10.3636H10.3527C9.63503 10.3666 8.93729 10.5958 8.36217 11.0173C7.78705 11.4388 7.36493 12.0305 7.15795 12.7053L4.80979 20.7586C5.24496 20.9133 5.70357 20.9949 6.16636 21H16.6306C18.4854 21 20.0887 19.8284 20.6319 18.0488L21.9085 13.0448C22.0052 12.7327 22.0256 12.4026 21.968 12.0813C21.9104 11.76 21.7755 11.4566 21.576 11.1957Z"
        // fill="#F37423"
        fill={currentColor}
      />
    </svg>
  );
};

export default ProjectActiveIcon;
