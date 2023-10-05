interface Props {
    children: React.ReactNode
}

const SecondaryTitle = ({ children }: Props) => {
    return (
        <h2 className="text-xl font-bold">
            {children}
        </h2>
    )
};

export default SecondaryTitle;