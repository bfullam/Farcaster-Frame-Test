import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameReducer,
  NextServerPageProps,
  getFrameMessage,
  getPreviousFrame,
  useFramesReducer,
} from "frames.js/next/server";

type State = {
  recentButtonIndex: string | null;
  total_button_presses: number;
};

const initialState = { recentButtonIndex: null, total_button_presses: 0 };

const reducer: FrameReducer<State> = (state, action) => {
  console.log(state, action);
  return {
    total_button_presses: state.total_button_presses + 1,
    recentButtonIndex: action.postBody?.untrustedData.buttonIndex
    ? String(action.postBody?.untrustedData.buttonIndex)
    : null,  };
};

export default async function Page({ searchParams }: NextServerPageProps) {
  const previousFrame = getPreviousFrame<State>(searchParams);

  const frameMessage = await getFrameMessage(previousFrame.postBody);

  if (frameMessage && !frameMessage?.isValid) {
    throw new Error("Invalid frame payload");
  }

  const [state] = useFramesReducer<State>(
    reducer,
    initialState,
    previousFrame
  );

  return (
    <div className="p-4">
      <FrameContainer
        postUrl="/frames"
        pathname="/"
        state={state}
        previousFrame={previousFrame}
      >
        <FrameImage aspectRatio="1:1">
          <div tw="bg-purple-800 text-white w-full h-full justify-center items-center">
            Awesome Product
          </div>
        </FrameImage>
        <FrameButton action="tx" target="/txdata">
          Buy now 🎁
        </FrameButton>
      </FrameContainer>
    </div>
  );
}
