import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="my-4 text-2xl font-medium">Home</h1>
      <Link href="/notes" className="text-blue-600 underline">
        View notes
      </Link>
    </div>
  );
};

export default HomePage;
