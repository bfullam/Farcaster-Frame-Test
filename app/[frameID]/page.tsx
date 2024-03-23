import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameReducer,
  NextServerPageProps,
  getPreviousFrame,
  useFramesReducer,
} from "frames.js/next/server";

type State = {};
const reducer: FrameReducer<State> = (state, action) => ({});

export default async function Page({ searchParams }: NextServerPageProps) {
  const previousFrame = getPreviousFrame<State>(searchParams);
  const [state] = useFramesReducer<State>(
    reducer,
    {},
    previousFrame
  );

  return (
    <div className="p-4">
      <FrameContainer
        postUrl="/[frameID]/frames"
        pathname="/[frameID]"
        state={state}
        previousFrame={previousFrame}
      >
        <FrameImage aspectRatio="1:1">
          <div tw="bg-purple-800 text-white w-full h-full justify-center items-center">
            Awesome Product
          </div>
        </FrameImage>
        <FrameButton action="tx" target="/[frameID]/txdata">
          Buy now 🎁
        </FrameButton>
      </FrameContainer>
    </div>
  );
}
