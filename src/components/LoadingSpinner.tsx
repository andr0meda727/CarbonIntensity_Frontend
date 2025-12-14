const LoadingSpinner = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-80">
            <h1 className={"text-white text-3xl font-bold mb-4"}>It's worth waiting :D</h1>
            <div
                className="animate-spin rounded-full h-16 w-16 border-4 border-buttonBg border-t-transparent"
            ></div>
        </div>
    );
};

export default LoadingSpinner;