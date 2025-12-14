const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center w-full h-80">
            <div
                className="animate-spin rounded-full h-16 w-16 border-4 border-buttonBg"
            ></div>
        </div>
    );
};

export default LoadingSpinner;