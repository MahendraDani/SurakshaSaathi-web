interface NavLinksMiniProps {
  href: string;
  title: string;
}
const NavLinksMini = ({ href, title }: NavLinksMiniProps) => {
  return (
    <a
      href={href}
      className="text-white border-2 border-[#0F1B92] hover:border-white hover:text-white px-3 p-1 rounded-3xl duration-75 ease-in"
    >
      {title}
    </a>
  );
};

export default NavLinksMini;
