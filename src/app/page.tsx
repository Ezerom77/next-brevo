import handleForm from "./action";
export default function HomePage() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <form
        action={handleForm}
        method="POST"
        className=" flex flex-col gap-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Email Title"
          className=" bg-slate-400 block p-2 placeholder:text-slate-500"
        />
        <input
          type="text"
          name="to_name"
          placeholder="Name of the person you want to send the email to"
          className=" bg-slate-400 block p-2 placeholder:text-slate-500"
        />
        <input
          type="email"
          name="to"
          placeholder="To"
          className=" bg-slate-400 block p-2 placeholder:text-slate-500"
        />
        <textarea
          name="content"
          placeholder="Write your email here"
          id=""
          className=" bg-slate-400 block p-2 placeholder:text-slate-500"
        ></textarea>
        <button className=" bg-green-500 p-2 text-white rounded-md hover:bg-green-600">
          Send
        </button>
      </form>
    </div>
  );
}
