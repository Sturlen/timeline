import Timeline, {TimelineTrack} from "./Timeline"
import {tweenNum} from "./TweenableTypes/TweenableNumber"
import {lerpColor} from "./TweenableTypes/TweenableColor"
import Color from "color"


it("is created from the keys you want to tween", () => {
    const t = new Timeline([
        {name: "sun_color", tweener: lerpColor, keys: []},
        {name: "time", tweener: tweenNum, keys: []}
    ])
    expect(t).toBeInstanceOf(Timeline)
})