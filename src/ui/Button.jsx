function Button({ children, type, onClick }) {
  const base = "rounded-sm bg-white shadow-lg dark:bg-[#2B3945]";

  const classNames = {
    back: base + " space-x-2 px-10 py-2",
    country: base + " px-5 py-1",
  };

  return (
    <button onClick={onClick} className={classNames[type]}>
      {children}
    </button>
  );
}

export default Button;
