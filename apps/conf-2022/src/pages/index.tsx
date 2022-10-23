import {
  motion,
  useMotionValue,
  useScroll,
  useTime,
  useTransform,
} from "framer-motion";
import { FunctionComponent } from "react";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const baseX = useMotionValue(0);
  const { scrollYProgress } = useScroll({});

  const textTop = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const textBottom = useTransform(scrollYProgress, [1, 0], [0, -2000]);

  const time = useTime();
  const intro = useTransform(time, [0, 1000], [0.4, 1], {});

  return (
    <>
      <div
        style={{ height: `500vh` }}
        className="relative w-full min-h-screen overflow-hidden bg-primary"
      >
        <motion.h1
          className="fixed font-thin text-white uppercase whitespace-nowrap"
          style={{
            fontSize: 400,
            scale: intro,
          }}
        >
          Times Up
        </motion.h1>
        {/* <h1
          className="font-thin text-white uppercase whitespace-nowrap"
          style={{
            fontSize: 200,
          }}
        >
          Conference
        </h1> */}
      </div>

      <div className="min-h-screen">more content</div>
    </>
  );
};

export default HomePage;
