import Navbar from "../components/navbar";
import Button from "../components/button";

const NotFoundPage = () => {
  return (
    <div className="h-screen px-4">
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center gap-4 h-2/3">
        <h1 className="font-krona text-[5.5rem] tracking-[2.25rem] drop-shadow-[0_0px_30px_rgba(255,255,255,0.8)]">
          404
        </h1>
        <h2 className="font-jockey text-2xl tracking-[1rem]">PAGE NOT FOUND</h2>
        <Button className="mt-10 -ml-4">Back To Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
