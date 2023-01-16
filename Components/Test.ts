import { useLottie, useLottieInteractivity } from "lottie-react";
import likeButton from "./Assets/robot.json";

const style = {
  height: 400,
 
};

const options = {
  animationData: likeButton,
};

const Example = (props:any) => {
    console.log(props);
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0,1],
        type: 'seek',
        frames: [0, 120],
      },
    ],
  });

  return Animation;
};

export default Example;