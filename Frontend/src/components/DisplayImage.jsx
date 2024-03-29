import React, { useEffect, useState } from "react";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import "../css/Sandbox.css";

export function Stack({ image, background, showImage }) {
  const [open, setOpen] = useState(false);
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 });
  const cards = useSprings(
    5,
    [0, 1, 2, 3, 4].map((i) => ({
      opacity: 0.2 + i / 5,
      z: open ? (i / 5) * 80 : 0,
    }))
  );

  useEffect(() => {
    if (open == true) {
      console.log("Enter", image);
      showImage(image);
    } else {
      console.log("Close");
      // showImage("");
    }
  }, [open]);

  return (
    <div
      class="container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          style={{
            opacity,
            background,
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            ),
          }}
        >
          {index === 4 && (
            <animated.img
              style={{
                transform: f.interpolate([0, 1], ["scale(0.35)", "scale(1)"]),
                // transform: f.interpolate([0, 1], [1, open ? 1 : 1.2]),
              }}
              src={image}
            />
          )}
        </animated.div>
      ))}
    </div>
  );
}

function DisplayImage({ image }) {
  return (
    <div class="main">
      <Stack image={image} background="#52649e" />
      {/* <Stack
        image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png"
        background="#52649e"
      /> */}
      {/* <Stack
        image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png"
        background="#f7f295"
      />
      <Stack
        image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png"
        background="#ee7074"
      />
      <Stack
        image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png"
        background="#ee7074"
      />
      <Stack
        image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png"
        background="#52649e"
      />
      <Stack
        image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png"
        background="#f7f295"
      />
      <Stack
        image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png"
        background="#f7f295"
      />
      <Stack
        image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png"
        background="#ee7074"
      />
      <Stack image="..\original.jpeg" background="#52649e" /> */}
    </div>
  );
}

export default DisplayImage;
