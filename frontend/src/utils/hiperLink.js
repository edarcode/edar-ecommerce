export const hiperLink = ({ href, content }) => {
  return (
    <a key={href} href={href} target={"_blank"} rel="noopener noreferrer">
      {content}
    </a>
  );
};
