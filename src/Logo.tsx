import * as React from "react";
import {
   chakra,
   keyframes,
   ImageProps,
   forwardRef,
   usePrefersReducedMotion,
} from "@chakra-ui/react";
import lactation_station_co from "./lactation_station_co.svg";

const spin = keyframes`
  from { transform: rotate(-2deg); }
  to { transform: rotate(2deg); }
`;

export const Logo = forwardRef<ImageProps, "img">((props: any, ref: any) => {
   const prefersReducedMotion = usePrefersReducedMotion();

   const animation = prefersReducedMotion
      ? undefined
      : `${spin} infinite 5s linear`;

   return (
      <chakra.img
         animation={animation}
         src={lactation_station_co}
         ref={ref}
         {...props}
      />
   );
});
