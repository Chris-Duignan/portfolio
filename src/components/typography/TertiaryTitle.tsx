interface Props {
    children: React.ReactNode
}

const TertiaryTitle = ({ children }: Props) => {
    return (
        <h3 className="text-l font-bold">
            {children}
        </h3>
    )
};

export default TertiaryTitle;