import { SpinnerCircular } from "spinners-react";

import { Color } from "../GlobalStyle";

export const Loading = () => {
  return (
    <>
      <SpinnerCircular
        size={70}
        thickness={120}
        speed={100}
        color={Color.Title}
        secondaryColor="rgba(0, 0, 0, 0.44)"
        style={{ margin: "auto" }}
      />
    </>
  );
};
