import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i/"
        height={400}
        width={400}
        className="mb-20"
        alt="fb-logo"
      />
      <h1
        onClick={signIn}
        className="p-5 cursor-pointer bg-blue-500 
        rounded-full text-white text-center"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
