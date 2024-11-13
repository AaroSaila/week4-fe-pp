import { Link } from "react-router-dom";


const PageLink = ({ link, itemClass }) => {
  return (
    <li key={link.id}>
      <Link to={link.href} className={itemClass}>
        {link.text}
      </Link>
    </li>
  );
};
export default PageLink;
