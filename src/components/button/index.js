const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="pt-2 pb-3 px-6 rounded-full bg-primary-400 text-2xl "
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
      className="pt-3 pb-2 md:pb-3 px-8 md:px-10 rounded-full bg-white text-primary-400 text-3xl font-bold"
    >
      {children}
    </button>
  );
};
