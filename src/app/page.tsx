const AppPage = () => {
    const version = process.env.version!;
    const env = process.env.NEXT_PUBLIC_ENV!;

    return (
        <div>
            <h1>My App</h1>
            <p>Version: {version}</p>
            <p>Env: {env}</p>
        </div>
    );
};

export default AppPage;
