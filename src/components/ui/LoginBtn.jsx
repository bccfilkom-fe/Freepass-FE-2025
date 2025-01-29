import Link from "next/link";

const LoginBtn = ({ className }) => {
  return (
    <Link href={"/login"}>
      <button
        className={`${className} bg-primary px-8 py-1 w-full rounded-lg hover:scale-110 transition-all text-white font-semibold`}
      >
        Log In
      </button>
    </Link>
  );
};

export default LoginBtn;
