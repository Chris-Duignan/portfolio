interface Props {
  children: React.ReactNode;
}

const Tag = ({ children }: Props) => {
  return (
    <p className="bg-orange-500 rounded-full p-4 inline-block w-40 m-2 text-center">
      {children}
    </p>
  );
};

export default Tag;
