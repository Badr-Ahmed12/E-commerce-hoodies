import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-xl">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <a className="mt-4 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          Go back home
        </a>
      </Link>
    </div>
  );
}

