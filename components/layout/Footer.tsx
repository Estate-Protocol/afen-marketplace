export default function Footer() {
  return (
    <footer className="w-full border-t border-grey-200 flex align-middle font-mono tracking-wide px-10 py-5">
      <p className="ml-2 text-xl">AFEN &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
