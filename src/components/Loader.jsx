
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center items-center text-3xl my-10">
        <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#C71585"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
      </div>
    );
};

export default Loader;
