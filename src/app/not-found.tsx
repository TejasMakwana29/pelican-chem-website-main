import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white">
      <div className="text-center px-6">
        <p className="text-label">404</p>
        <h1 className="heading-section mt-4">Page Not Found</h1>
        <p className="mt-4 text-body">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Return Home
        </Link>
      </div>
    </section>
  );
}
