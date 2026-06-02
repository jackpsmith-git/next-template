export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-primary justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-primary-text">
            Next.js Template
          </h1>
        </div>
      </main>
    </div>
  );
}
