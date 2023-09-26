type NavLinkProps = {
  href: string;
  title: string;
};
const NavLinks = ({ href, title }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-[#0F1B92] hover:bg-[#0F1B92] hover:text-white px-3 p-1 rounded-3xl duration-300 ease-in"
    >
      {title}
    </a>
  );
};

export default NavLinks;
