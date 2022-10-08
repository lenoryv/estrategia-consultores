function NavItem({ content, href }) {
    
  const pathname = window.location.pathname;

  return (
    <li>
      <a
        href={href}
        className={`block py-2 pr-4 pl-3 ${
          pathname === href ? "text-white" : "text-gray-400"
        } rounded hover:bg-gray-100 hover:text-gray-900 md:hover:bg-transparent md:hover:text-blue-100 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400`}
      >
        {content}
      </a>
    </li>
  );
}

export { NavItem };
