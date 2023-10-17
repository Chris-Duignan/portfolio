interface Props {
    children: React.ReactNode;
    style?: string;
}

const TertiaryTitle = ({ children, style }: Props) => {
    return (
        <h3 className={`text-l font-bold ${style}`}>
            {children}
        </h3>
    )
};

export default TertiaryTitle;