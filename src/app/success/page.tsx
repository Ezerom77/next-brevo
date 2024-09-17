import Link from "next/link";
function Success() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className=" text-4xl">Email Sent 🎉 </h1>
      <Link href={"/"}> Back to Homepage</Link>
    </div>
  );
}

export default Success;
