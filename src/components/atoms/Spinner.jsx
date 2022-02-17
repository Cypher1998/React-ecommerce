import spinner from '../../assets/spinner.gif';
import spin from '../../assets/spin.gif';

const Spinner = () => {
  return (
    <div>
      <img src={spinner} size={10} alt="loading..." />
    </div>
  );
};

export default Spinner;

export const Spin = () => {
  return (
    <div>
      <img src={spin} size={10} alt="loading..." />
    </div>
  );
};
