import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { SliderInputs } from '../types';

type Props = {
  sliderInputs: SliderInputs;
  setSliderInputs: (p: SliderInputs) => void;
  index: number;
};

const SliderInput = ({ sliderInputs, setSliderInputs, index }: Props) => {
  const handleSliderInput = (sliderInput: number[]) => {
    const newInputs = sliderInputs.values;
    newInputs[index] = sliderInput[1];
    const newSliderInputs: SliderInputs = { values: newInputs };
    setSliderInputs(newSliderInputs);
  };

  return (
    <>
      <div className='flex items-center gap-4 py-4'>
        <RangeSlider
          min={1}
          max={100}
          defaultValue={[1, 10]}
          thumbsDisabled={[true, false]}
          rangeSlideDisabled={true}
          className={'slider'}
          onInput={handleSliderInput}
        />
        <div>{sliderInputs.values[index]}</div>
      </div>
    </>
  );
};

export default SliderInput;
