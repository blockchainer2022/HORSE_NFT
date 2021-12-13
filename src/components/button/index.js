const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="pt-4 pb-3 px-6 rounded-full bg-primary-400 text-sm "
    >
      {children}
    </button>
  );
};

export default Button;

export const WhiteButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="pt-4 pb-3 px-10 rounded-full bg-white text-primary-400 text-xl "
    >
      {children}
    </button>
  );
};
