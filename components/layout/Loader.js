import loader from '../../public/assets/imgs/loader.gif';

export default function Loader({ message }) {
    const styles = {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100%",
        zIndex: 9999999,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    };

    const imageStyles = {
        maxWidth: "30%", // Adjust the value as needed
        maxHeight: "30%", // Adjust the value as needed
    };

    return (
        <div style={styles}>
            <img style={imageStyles} src={loader.src} alt="Loading Spinner" />
            {message && <p className='md:pl-10 px-5 text-lg tracking-wider text-gray-700 animate-pulse text-center'>{message}</p>}
        </div>
    );
}
