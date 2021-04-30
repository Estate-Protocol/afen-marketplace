export default function Footer() {
  return (
    <footer className="w-full border-t border-grey-200 px-4 md:px-10 lg:px-16  py-5 mt-auto mx-auto flex align-middle font-mono tracking-wide">
      <p className="ml-2 text-xl">AFEN &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
