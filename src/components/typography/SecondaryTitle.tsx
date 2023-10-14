interface Props {
    children: React.ReactNode;
    style?: string;
}

const SecondaryTitle = ({ children, style }: Props) => {
    return (
        <h2 className={`text-xl font-bold ${style}`}>
            {children}
        </h2>
    )
};

export default SecondaryTitle;